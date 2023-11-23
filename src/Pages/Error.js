import React from "react";
import { Link } from "react-router-dom";

function Error() {
    return (
        <div className="errorPage">
            <h1 className="titleError">404</h1>
            <p className="textError">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">
                <p className="textBack">Retourner sur la page d'accueil</p>
            </Link>
        </div>
    );
}

export default Error;