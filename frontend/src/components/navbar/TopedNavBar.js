import React from "react";

function TopedNavBar() {
  return (
    <nav className="toped-navbar">
      <ul>
        <li>
          <a className="active" href="/#">
            Acceuil
          </a>
        </li>
        <li>
          <a href="/#">Commander</a>
        </li>
        <li>
          <a href="/#">Heuur</a>
        </li>
      </ul>
    </nav>
  );
}

export default TopedNavBar;
