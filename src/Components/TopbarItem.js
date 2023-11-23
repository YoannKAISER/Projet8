import React from "react";
import ArrowUp from "../Assets/arrow_up.png";
import { useState } from "react";



function TopbarItem({ text, title }) {
    const [isOpened, setIsOpened] = useState(false);

    const handleToggle = () => {
        setIsOpened(!isOpened);
    };

    return (
        <div className="topbar">
            <div className="topbarStyle">
            <p className="textStyle" onClick={handleToggle}>
                {title}
            </p>
            <img
                className={`arrowIcon ${isOpened ? "open" : ""}`}
                src={ArrowUp}
                alt="fleche"
                onClick={handleToggle}
            />
            </div>

            <div className={`containerCollapse ${isOpened ? "active" : ""}`}>
                {typeof text === "string" && <p>{text}</p>}
                {Array.isArray(text) && (
                    <ul>
                    {text.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default TopbarItem;