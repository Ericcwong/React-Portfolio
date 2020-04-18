import React from 'react'
import "./style.css"
import Col from "../Col/Col"
import Row from "../Row/Row"
export default function Card(props) {
    return ( 
        <Row>
            {props.CardData.map((props) =>{
            return(
                    // <div className="col-md-4 col-sm-6">
                    <Col size="md-4">
                        <div className="card">
                            <div className="card text-center">
                                <div >
                                    <img className="card-img-top" variant="top" src={props.image} alt=""/>
                                </div>
                                <div className="card-body text-dark">
                                    <h4>{props.title}</h4>
                                    <p className="card-text text-secondary">{props.description}</p>
                                    <a href={props.githubLink} className="btn btn-outline">GitHub</a>
                                    <a href={props.deployedLink} className="btn btn-outline">Heroku</a>
                                </div>
                            </div>
                        </div>
                        </Col>
            )
            })}
        </Row>
    );
}
