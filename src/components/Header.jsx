import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="mx-auto p-8 bg-orange-700">
      <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-2 px-4">
        <Link to={{ pathname: "/" }}>
          <h1 className="text-white text-4xl" label="Back to Home Page">
            YouTube Scraper (Top 10)
          </h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
