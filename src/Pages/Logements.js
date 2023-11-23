import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import logementsData from "../Pages/LogementsData.json"; 
import Carrousel from "../Components/Carrousel"; 
import TopbarItem from "../Components/TopbarItem"; 
import Error from "../Pages/Error";
import Accueil from "../Pages/Accueil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Logement() {
    const { logementId } = useParams(); 
    const [currentLogement, setCurrentLogement] = useState(null);
    const [titles, setTitles] = useState(null);
    const [locations, setLocation] = useState(null);
    const [tags, setTags] = useState([]);
    const [host, setHost] = useState(null);
    const [isValidId, setIsValidId] = useState(true);

    useEffect(() => {
        const selectedLogement = logementsData.find(
            (logement) => logement.id === logementId
        );
        if (selectedLogement) {
            setCurrentLogement(selectedLogement);
            setTitles(selectedLogement.title);
            setLocation(selectedLogement.location);
            setTags(selectedLogement.tags);
            setHost(selectedLogement.host);
        } 
        else {
            setIsValidId(false); 
        }
    }, [logementId]);

    if (!currentLogement && isValidId) {
    return <Accueil />;
    }

    if (!isValidId) {
    return <Error />;
    }

    const numberStars = (rating) => {
    const fullStars = rating;
    const emptyStars = 5 - fullStars; 

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} color="#FF6060" />);
    }

    for (let i = 0; i < emptyStars; i++) {
        stars.push(
        <FontAwesomeIcon key={i + fullStars} icon={faStar} color="#E3E3E3" />
        );
    }

    return stars;
    };

    return (
        <div>
            <div>
                <Carrousel currentLogement={currentLogement} />
            </div>
            <div className="infoContainer">
                <div className="containerLogement">
                    <h1 className="logementTitle">{titles}</h1>
                    <p className="logementLocation">{locations}</p>
                    <div className="logementTags">
                        {tags.map((tag, index) => (
                            <p className="tag" key={index}>
                            {tag}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="containerHost">
                    <div className="hostInfo">
                                {currentLogement && (
                                    <>
                                    <p>{currentLogement.host.name}</p>
                                    <img
                                        className="hostPic"
                                        src={currentLogement.host.picture}
                                        alt="Photo de l'hôte"
                                    />
                                    </>
                                )}
                            </div>
                            <div className="starsRating">
                                {numberStars(currentLogement.rating)}
                            </div>
                    </div>
            </div>
            <div className="logeDiv">
                <div className="topbarContainer topbarCarrousel">
                    <TopbarItem text={currentLogement.description} title="Description" />
                    <TopbarItem text={currentLogement.equipments} title="Equipements" />
                </div>
            </div>    
        </div>
    );
}

export default Logement;