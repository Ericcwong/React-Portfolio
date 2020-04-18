import React from 'react'
import "./style.css"
function Contact() {
    return (
        <div className="contact">
        <h2>Contact Information</h2>
        <div className="email">
            <a href="mailto:ericwong12@live.com">
                <i className="fa fa-envelope fa-2x"><h4>Email: Ericwong12@live.com</h4></i>
            </a>
        </div><br/>
        <div className="phoneNumber">
            <a href="tel:+18019318459">
                <i className="fa fa-mobile-alt fa-2x"><h4>Phone: 801-931-8459</h4></i>
            </a>
        </div><br/>

    </div>
    )
}

export default Contact