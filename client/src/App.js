import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./style.css"
//Pages
import About from "./Pages/About/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";
//Components
import Footer from "./Components/Footer/Footer"
import NavBar from "./Components/NavBar/NavBar"
import Wrapper from "./Components/Wrapper/Wrapper"
//CSS

function App() {
  return (
    <Router>
        <div className="container">
          <NavBar />
          <Wrapper>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/resume" component={Resume}/>
          </Wrapper>
        </div>
        <Footer />
    </Router>
  );
}

export default App;
