from django.db import models

#Create task model
class Task(models.Model):
    title = models.CharField(max_length=200, unique=True, db_index=True)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title