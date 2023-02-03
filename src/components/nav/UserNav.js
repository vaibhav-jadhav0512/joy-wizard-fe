import React from "react";
import { Link } from "react-router-dom";

const UserNav = () => {
  return (
    <div>
      <nav className="mt-2">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/user/survey" className="nav-link">
              Take Survey
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user/password" className="nav-link">
              Update Password
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UserNav;
