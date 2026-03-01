import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <Link to="/">Local Events</Link>
            </div>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/create">Create Event</Link>
            </div>
        </nav>
    );
}

export default Navbar;