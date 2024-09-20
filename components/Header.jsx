import { Link } from "react-router-dom";

export const Header = ({ user }) => {
  return (
    <header className="header" role="banner">
      <h1>
        <Link to="/" id="home-link" aria-label="Homepage of NC News">
          NC News
        </Link>
      </h1>
      <p>Logged in as: {user.username}</p>
      <nav className="nav-bar" role="navigation" aria-label="Main navigation">
        <ul>
          <li>
            <Link to="/" aria-label="Go to Home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/newarticle" aria-label="Post a new article">
              Post
            </Link>
          </li>
          <li>
            <Link to="/topics" aria-label="Browse topics">
              Topics
            </Link>
          </li>
          <li>
            <Link to="/topics/coding" aria-label="View Coding articles">
              Coding
            </Link>
          </li>
          <li>
            <Link to="/topics/football" aria-label="View Football articles">
              Football
            </Link>
          </li>
          <li>
            <Link to="/topics/cooking" aria-label="View Cooking articles">
              Cooking
            </Link>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ben-mccarthy-40812731a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit the creator's LinkedIn profile"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
