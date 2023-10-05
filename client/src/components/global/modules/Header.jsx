import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header" id="header">
      <ul className="navigation">
        <li className="navigation-item">
          <Link className="navigation-link" to="/">
            Placeholder
          </Link>
        </li>
        <li className="navigation-item">
          <Link className="navigation-link" to="/">
            Placeholder
          </Link>
        </li>
        <li className="navigation-item">
          <Link className="navigation-link" to="/">
            Placeholder
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
