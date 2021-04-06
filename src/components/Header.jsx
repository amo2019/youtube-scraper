import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="">
        <Link to={{ pathname: "/" }}>
          <h1 className="" label="Back to Home Page">
            YouTube Scraper (Top10)
          </h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
