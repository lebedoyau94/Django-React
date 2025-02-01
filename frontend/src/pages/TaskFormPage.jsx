import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function TaskFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async data => {
        try {
            if (params.id) {
                await updateTask(params.id, data);
                toast.success('Task updated successfully', {
                    position: 'top-right',
                    style: {
                        background: '#333',
                        color: '#fff',
                    }
                });
            } else {
                await createTask(data);
                toast.success('Task created successfully', {
                    position: 'top-right',
                    style: {
                        background: '#333',
                        color: '#fff',
                    }
                });
            }
            navigate('/tasks');
        } catch (error) {
            // Capturar errores del backend
            if (error.response && error.response.data) {
                const backendErrors = error.response.data;
                if (backendErrors.title) {
                    toast.error(backendErrors.title[0], {  // Mostrar el primer error de título
                        position: 'top-right',
                        style: {
                            background: '#ff4444',
                            color: '#fff',
                        }
                    });
                }
            } else {
                toast.error('An unexpected error occurred. Please try again.', {
                    position: 'top-right',
                    style: {
                        background: '#ff4444',
                        color: '#fff',
                    }
                });
            }
        }
    });

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const { data: { title, description, completed } } = await getTask(params.id);
                setValue('title', title);
                setValue('description', description);
                setValue('completed', completed);
            }
        }
        loadTask();
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="mb-4">{params.id ? 'Edit Task' : 'Create Task'}</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                        id="title"
                        {...register('title', { required: true })}
                    />
                    {errors.title && <div className="invalid-feedback">Title is required</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                        rows="3"
                        id="description"
                        {...register('description', { required: true })}
                    ></textarea>
                    {errors.description && <div className="invalid-feedback">Description is required</div>}
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="completed"
                        {...register('completed')}
                    />
                    <label className="form-check-label" htmlFor="completed">Completed</label>
                </div>
                <button type="submit" className="btn btn-primary me-2">Save</button>
                {params.id && (
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={async () => {
                            const confirm = window.confirm('Are you sure you want to delete this task?');
                            if (confirm) {
                                await deleteTask(params.id);
                                toast.success('Task deleted successfully', {
                                    position: 'top-right',
                                    style: {
                                        background: '#333',
                                        color: '#fff',
                                    }
                                });
                                navigate('/tasks');
                            }
                        }}
                    >
                        Delete Task
                    </button>
                )}
            </form>
        </div>
    );
}