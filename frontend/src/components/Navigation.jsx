import { Link } from 'react-router-dom';

export function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/tasks">Task App</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/tasks">Tasks</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tasks-create">Create Task</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}