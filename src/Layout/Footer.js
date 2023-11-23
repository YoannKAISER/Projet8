import React from "react";
import logoFooter from "../Assets/LogoFooter.png"

function Footer() {
  return (
    <footer className="footer">
            <div className="footerContent">
            <img src={logoFooter} className="footer-img" alt="logo-kasa"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    </footer>
  );
}

export default Footer;