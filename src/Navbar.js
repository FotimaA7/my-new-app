import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link className="navbar-brand" to="/">My React App</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/auth">Auth</Link></li>
                </ul>
            </div>
        </div>
    </nav>
);
export default Navbar;
