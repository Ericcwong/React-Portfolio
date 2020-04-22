import React from 'react'
import "./style.css"
// import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footerIcons">
                <a href="https://github.com/Ericcwong" ><i id="github" className="fa fa-github fa-2x"></i></a>
                <a href="https://www.linkedin.com/in/eric-wong-b721bbb2/" ><i id="linkedin" className="fa fa-linkedin fa-2x"></i></a>
                <a href="https://www.instagram.com/itswongderful/" ><i id="instagram" className="fa fa-instagram fa-2x"></i></a>
                <a href="https://twitter.com/itswongderful"><i id="twitter" className="fa fa-twitter-square fa-2x"></i></a>
            </div>
            <p className="footerText">Eric Wong</p>
            <p className="footerText">Copyright 2020 </p>
        </footer>
    )
}
