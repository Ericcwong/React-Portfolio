import React from 'react';
import Card from "../../Components/Card/Card";
import ProjectData from "../../Components/CardInfo/Project/Project.json";
import BackEndData from "../../Components/CardInfo/Backend/BackEnd.json"
import { Spring } from "react-spring/renderprops";
import "./style.css"
function Portfolio() {
    return (
        <div className="container">
        
        <Spring
            from={{opacity:0, marginTop: -500}}
            to={{opacity:1, marginTop:0}}
            config={{delay: 500, duration:500}}
        >
            {props => (
                <div style={props}>
                    <h1 className="portfolio-title"> Projects </h1>
                    <Card CardData={ProjectData}/>
                </div>  
            )}
        </Spring>
        
        <Spring
            from={{opacity:0, marginTop: -500}}
            to={{opacity:1, marginTop:0}}
            config={{delay: 1000, duration:1000}}
        >
            {props => (
                <div style={props}>
                    <h1 className="portfolio-title"> Side Project</h1>
                    <Card CardData={BackEndData}/>
                </div>  
            )}
        </Spring>
    </div>
    )
}

export default Portfolio