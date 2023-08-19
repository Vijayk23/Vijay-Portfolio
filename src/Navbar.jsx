import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <nav>
        <div>
          <ul className="navbar">
            <li>
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>

            <li>
              <Link to="/about" className="nav-link">
                ABOUT ME
              </Link>
            </li>

            <li>
              <Link to="/sociallink" className="nav-link">
                BLOG
              </Link>
            </li>

            <li>
              <Link to="/contact" className="nav-link">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
