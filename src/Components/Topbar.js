import React from "react";
import TopbarItem from "./TopbarItem";

//Reutilisation du composant TopbarItem
function Topbar() {
  return (
    <div className="topbarContainer">
      <TopbarItem
        text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
 régulièrement vérifiées par nos équipes.
"
        title="Fiabilité"
      />
      <TopbarItem
        text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme."
        title="Respect"
      />
      <TopbarItem
        text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme."
        title="Service"
      />
      <TopbarItem
        text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
également des ateliers sur la sécurité domestique pour nos hôtes.
"
        title="Sécurité"
      />
    </div>
  );
}

export default Topbar;