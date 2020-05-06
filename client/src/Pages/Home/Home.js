import React from 'react';
import "./home.css";
import Col from "../../Components/Col/Col";
import Row from "../../Components/Row/Row";
function Home() {
    return (
        <div className = "container">
        <Col size="md-12">
            <div className="home">
                <div className="homeContent">
                    <h1 >Eric Wong</h1>
                    <p>Full stack web developer</p>
                    <br/>
                    <Row>
                        <Col size="sm-3"> <a href="https://github.com/Ericcwong" ><i id="github" className="fa fa-github fa-2x"></i></a></Col>
                        <Col size="sm-3"> <a href="https://www.linkedin.com/in/eric-wong-b721bbb2/" ><i id="linkedin" className="fa fa-linkedin fa-2x"></i></a></Col>
                        <Col size="sm-3"><a href="https://www.instagram.com/itswongderful/" ><i id="instagram" className="fa fa-instagram fa-2x"></i></a></Col>
                        <Col size="sm-3"><a href="https://twitter.com/itswongderful"><i id="twitter" className="fa fa-twitter-square fa-2x"></i></a></Col>
                    </Row>
                </div>
            </div>
        </Col>
        </div>
    )
}

export default Home