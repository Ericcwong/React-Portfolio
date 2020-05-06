import React from 'react'
import "./style.css"
import Col from "../Col/Col"
import Row from "../Row/Row"
export default function Card(props) {
    // let cardInfo = document.getElementsByClassName("card-body");
    // cardInfo.addEventListener("mouseover", ()=>{
    //     document.getElementsByClassName("card-body").style.display = "";
    // })
    return ( 
        <div className="modal-body">
            <Row>
                {props.CardData.map((props, index) =>{
                return(
                        // <div className="col-md-4 col-sm-6">
                        <Col size="md-4" key={index}>
                            <div className="card">
                                <div className="card text-center">
                                    <div >
                                        <img className="card-img-top" variant="top" src={props.image} alt=""/>
                                    </div>
                                    <div className="card-body text-dark">
                                        <h4>{props.title}</h4>
                                        <p className="card-text text-secondary">{props.description}</p>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <a href={props.githubLink} className="btn btn-outline">GitHub</a>
                                    <a href={props.deployedLink} className="btn btn-outline">Heroku</a>
                                </div>
                            </div>
                            </Col>
                )
                })}
            </Row>
        </div>
    );
}
