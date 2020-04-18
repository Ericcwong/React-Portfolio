import React from 'react'
import Selfie from "./Profile-pic.jpg"
import "./About.css";
function About() {
    return (
        <div>
            <div className="content">
                <img src={Selfie} alt="Selfie" id="selfie"/>
                <h3>Hello! Welcome to my portfolio. </h3><br/>
                <h3>My name is Eric Wong and it is a pleasure to meet you!</h3>
                <p>Let me tell you a little about myself. I am 23 years old and am the youngest of five children. I was born and raised in Utah and currently live in West Jordan.
                    I am attending the University of Utah's Coding Bootcamp where I hope to gain the skills and education necessary to become a full-stack developer.
                     I like to experience all that life has to offer through hobbies which recently includes painting and archery as well as trying out new cuisines. 
                     I am always striving to broaden my horizons through hard work, dedication, and life experiences because I am a firm believer that the most rewarding aspects of life are the memories and experiences that it is able to offer. </p>
                <h3>Thank you for looking at my portfolio, I look forward to meeting you!</h3>
                   <p >If you have any questions, please feel free to contact me!</p><br/>

                </div>
        </div>
    )
}

export default About