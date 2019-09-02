import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


const Header = () => {
    return (
        // Bootstrap NAVBAR
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h3>Google Books</h3>
                {/* Button tag refers to hamburger menu button in mobile view */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-nav" id="navbarNavAltMarkup">
                    <ul className="nav-links">
                        <Link to="/search">
                            <li className="nav-item nav-link">Search</li>
                        </Link>
                        <Link to="/saved">
                            <li className="nav-item nav-link">Saved</li>
                        </Link>
                    </ul>
                </div>
            </nav>


            {/* Bootstrap Header */}
            <div className="card">
                <div className="card-body">
                <h1>(React) Google Book Search</h1>
                <h3>Look for the books you want, save them for later!</h3>
                </div>
            </div>
        </div>
    );
}

export default Header;