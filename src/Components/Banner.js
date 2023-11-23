import React from "react";
import Bannerhome from "../Assets/BannerImg.png";

function Banner(props) {

  const HomeBanner = props.src || Bannerhome
  
  return (
    <main>
      <div className="bannerHome">
        <img
          src={HomeBanner}  
          className="bannerImg"
          alt="banniereAccueil"
        ></img>
        {props.title !== "" && <p className="bannerTitle">{props.title}Chez vous, partout et ailleurs</p>}
      </div>
    </main>
  );
}

export default Banner;