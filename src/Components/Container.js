import React, { useState } from "react";
import Logement from "../Pages/LogementsData.json";
import { Link } from "react-router-dom";

function Container() {
    return (
    <section className="containerCard">
        {Logement.map((item) => (
            <div key={item.id} className="card">
                <Link to={`/logement/${item.id}`} className="cardLink">
                <div className="homeCard" />
                <img src={item.cover} />
                <div className="titleCard">
                    <h2>{item.title}</h2>
                </div>
                </Link>
            </div>
        ))}
    </section>
    );
}

export default Container;