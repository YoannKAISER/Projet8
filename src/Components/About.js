import React from "react";
import Banner from "../Components/Banner";
import Bannerabout from "../Assets/AboutBanner.png";
import Topbar from "../Components/Topbar";

function About() {
    return (
        <div>
            <Banner src={Bannerabout}  title = {""}/> 
            <Topbar/>
        </div>
    );
}

export default About;