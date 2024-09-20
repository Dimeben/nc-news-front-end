import { Link } from "react-router-dom";

export const NavBarContainer = () => {
  return (
    <nav className="">
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
          <a
            href="https://www.linkedin.com/in/ben-mccarthy-40812731a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Dimeben"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  );
};
