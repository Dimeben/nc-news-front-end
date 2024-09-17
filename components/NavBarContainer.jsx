import { Link } from "react-router-dom";

export const NavBarContainer = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
        <li>
          <Link to="/topics/coding">Coding</Link>
        </li>
        <li>
          <Link to="/topics/football">Football</Link>
        </li>
        <li>
          <Link to="/topics/cooking">Cooking</Link>
        </li>
        <li>
          <Link
            to={{
              pathname:
                "../https://www.linkedin.com/in/ben-mccarthy-40812731a/",
            }}
            target="_blank"
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: "../https://github.com/Dimeben",
            }}
            target="_blank"
          >
            GitHub
          </Link>
        </li>
      </ul>
    </nav>
  );
};
