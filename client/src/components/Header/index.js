import React from "react";
import "./style.css";

const Header = () => {
    return (
        // Bootstrap NAVBAR
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="https://books.google.com/">Google Books</a>
                {/* Button tag refers to hamburger menu button in mobile view */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Search<span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#">Saved</a>
                    </div>
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