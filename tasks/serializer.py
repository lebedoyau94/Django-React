from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'completed']
    
    def create(self, value):
        if not value.strip():
            raise serializers.ValidationError('Task title cannot be empty')
        
        value_lower = value.lower()
        if Task.objects.filter(title__iexact=value_lower).exists():
            raise serializers.ValidationError('Task with this title already exists')
        
        return value
    
    def create(self, validated_data):
        return Task.objects.create(**validated_data)