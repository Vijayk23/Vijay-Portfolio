import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <nav>
        <div>
          <ul className="navbar">
            <li>
              <NavLink to="/" className="nav-link" activeClassName="active">
                HOME
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active"
              >
                ABOUT ME
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/projects"
                className="nav-link"
                activeClassName="active"
              >
                PROJECTS
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
