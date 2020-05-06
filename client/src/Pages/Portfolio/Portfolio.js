import React from 'react';
import Card from "../../Components/Card/Card";
import ProjectData from "../../Components/CardInfo/Project/Project.json";
import BackEndData from "../../Components/CardInfo/Backend/BackEnd.json"
import "./style.css"
function Portfolio() {
    return (
        <div className="container">
            <h1 className="portfolio-title"> Projects </h1>
            <Card CardData={ProjectData}/>
            <h1 className="portfolio-title"> Side Project</h1>
            <Card CardData={BackEndData}/>
        </div>

    )
}

export default Portfolio