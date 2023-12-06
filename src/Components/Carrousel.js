import React, { useState } from "react";
import arrowLeft from "../Assets/arrow_left.png";
import arrowRight from "../Assets/arrow_right.png";

function Slide({ currentLogement }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === currentLogement.pictures.length - 1 ? 0 : prevSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? currentLogement.pictures.length - 1 : prevSlide - 1
        );
    };

    const currentImage = currentLogement.pictures[currentSlide];

    return (
        <div className="carrousel">
            <img className="imgCarrousel" src={currentImage} alt="imageAppartement"/>
            {currentLogement.pictures.length === 1 ? null : (
            <div>
            <p className="numberCarrousel">
            {currentSlide + 1} / {currentLogement.pictures.length}
            </p>
            <div className="btnCarrousel">
                <button className="leftArrow" onClick={prevSlide}>
                    <img src={arrowLeft} alt="Précédent" />
                </button>
                <button className="rightArrow" onClick={nextSlide}>
                    <img src={arrowRight} alt="Suivant" />
                </button>
            </div>
            </div>
            )}
        </div>
    );
}

export default Slide;