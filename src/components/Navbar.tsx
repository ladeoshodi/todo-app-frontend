import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar is-dark">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/tasks" className="navbar-item">
                All Tasks
              </Link>
              <Link to="/signup" className="navbar-item">
                Signup
              </Link>
              <Link to="/login" className="navbar-item">
                Login
              </Link>
              <Link to="/create" className="navbar-item">
                Create Task
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
