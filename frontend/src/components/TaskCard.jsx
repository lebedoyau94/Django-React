import { useNavigate } from "react-router-dom";
import { updateTask } from '../api/tasks.api';

export function TaskCard({ task, onTaskUpdated }) {
    const navigate = useNavigate();

    const handleToggleCompleted = async () => {
        try {
            const updatedTask = { ...task, completed: !task.completed };
            await updateTask(task.id, updatedTask);
            onTaskUpdated(); 
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    return (
        <div
            className={`card h-100 shadow-sm ${task.completed ? 'border-success' : ''}`}
            onClick={() => navigate(`/tasks/${task.id}`)}
            style={{ cursor: 'pointer' }}
        >
            <div className="card-body">
                <h5 className="card-title">
                    {task.title}
                    <button
                        className={`btn btn-sm float-end ${task.completed ? 'btn-success' : 'btn-outline-success'}`}
                        onClick={(e) => {
                            e.stopPropagation(); 
                            handleToggleCompleted();
                        }}
                    >
                        {task.completed ? 'Completed' : 'Mark as Completed'}
                    </button>
                </h5>
                <p className="card-text">{task.description}</p>
            </div>
        </div>
    );
}