import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <span className="navbar-brand fw-bold">
          ⚡ Electric Vehicle Management
        </span>

        <span className="text-white d-none d-md-block">
          CRUD Management System
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
