import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navFlex">
            <Link to="/" className="navLink">Accueil</Link>
            <Link to="/About" className="navLink">A Propos</Link>
        </nav>
    );
}

export default NavBar;