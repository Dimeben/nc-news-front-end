import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="header">
        <Link to="/" id="home-link">
          <h1>NC News</h1>
        </Link>
      </div>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/newarticle">Post</Link>
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
        </ul>
      </nav>
    </>
  );
};
