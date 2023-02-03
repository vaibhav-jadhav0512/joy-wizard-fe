import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <div style={{ height: "100vh" }}>
      <nav>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/admin/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user/survey" className="nav-link">
              Take Survey
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/questions" className="nav-link">
              Questions
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminNav;
