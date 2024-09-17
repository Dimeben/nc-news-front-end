import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/" id="home-link">
        <h1>NC News</h1>
      </Link>
    </div>
  );
};
