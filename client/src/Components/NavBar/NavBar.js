import React from 'react'
import "./style.css"
import { Link } from "react-router-dom";
export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <Link className="navbar-brand" to="/">Eric Wong</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        {/* Home link */}
                        <li className="nav-item active">
                        <Link to="/"
                            className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            Home
                        </Link>
                        </li>
                        {/* Portfolio link */}
                        <li className="nav-item">
                        <Link to="/portfolio"
                            className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                            Portfolio
                        </Link>
                        </li>
                        {/* Resume link */}
                        <li className="nav-item nav-item">
                        <Link to="/Resume.pdf"
                        target="_blank"
                        className={window.location.pathname === "/Resume.pdf" ? "nav-link active" : "nav-link"}>
                            Resume
                        </Link>
                        </li>
                        {/* About link */}
                        <li className="nav-item">
                        <Link to="/about"
                        className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                            About Me
                        </Link>
                        </li>
                        {/* Contact link */}
                        <li className="nav-item">
                        <Link to="/contact"
                            className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                            Contact
                        </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
