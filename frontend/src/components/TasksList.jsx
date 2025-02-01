import { useEffect, useState } from 'react';
import { getAllTasks } from '../api/tasks.api';
import { TaskCard } from './TaskCard';

export function TasksList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function loadTasks() {
            const res = await getAllTasks();
            setTasks(res.data);
        }
        loadTasks();
    }, []);

    const handleTaskUpdated = async () => {
        const res = await getAllTasks();
        setTasks(res.data);
    };

    const completedTasks = tasks.filter(task => task.completed);
    const incompleteTasks = tasks.filter(task => !task.completed);

    return (
        <div>
            <h2>Incomplete Tasks</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
                {incompleteTasks.map(task => (
                    <div className="col" key={task.id}>
                        <TaskCard task={task} onTaskUpdated={handleTaskUpdated} />
                    </div>
                ))}
            </div>

            <h2>Completed Tasks</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {completedTasks.map(task => (
                    <div className="col" key={task.id}>
                        <TaskCard task={task} onTaskUpdated={handleTaskUpdated} />
                    </div>
                ))}
            </div>
        </div>
    );
}