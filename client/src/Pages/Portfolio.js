import React from 'react';
import Card from "../Components/Card/Card";
import ProjectData from "../Components/CardInfo/Project/Project.json";
import FrontEndData from "../Components/CardInfo/Frontend/FrontEnd.json";
import BackEndData from "../Components/CardInfo/Backend/BackEnd.json"
function Portfolio() {
    return (
        <div>
            <h1> Group Project </h1>
            <Card CardData={ProjectData}/>
            <h1>Individual Project</h1>
            <Card CardData={BackEndData}/>
        </div>

    )
}

export default Portfolio