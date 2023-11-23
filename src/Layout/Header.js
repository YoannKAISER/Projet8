import React from "react";
import Logoheader from "../Assets/LogoHeader.png";
import NavBar from "../Components/NavBar";

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <h1>
                    <img src={Logoheader} className="logoKasa" />
                </h1>
            </div>
            <NavBar />
        </header>
    );
}

export default Header;