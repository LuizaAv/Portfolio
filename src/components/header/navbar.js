import React from "react"
import "./navbar.css"

import Homepage from "../layout/homepage";
import About from  "../linkComponents/about";
import Projects from "../linkComponents/projects";
import Resume from "../linkComponents/resume";
import Career from "../linkComponents/career";
import Contacts from "../linkComponents/contacts";

import {Switch,Route,Link} from "react-router-dom";

export default function Navbar(){
    
    return (
        <div className="navbarContainer">
            <nav className="navbar">
              <div className="nameContainer">
                <h1>
                  <Link to="/" className="name" >Louise Avetisyan</Link>
                </h1>
              </div>
              <ul className="linkContainer">
                <li className="navbarLi">
                  <Link to="/about" className="navLinks">About</Link>
                </li>
                <li className="navbarLi">
                  <Link to="/projects" className="navLinks">Projects</Link>
                </li>
                <li className="navbarLi">
                  <Link to="/resume" className="navLinks">Resume</Link>
                </li>
                <li className="navbarLi">
                  <Link to="/career" className="navLinks">Career</Link>
                </li>
                <li className="navbarLi">
                  <Link to="/contacts" className="navLinks">Contacs</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route exact path="/">
                <Homepage/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/projects">
                <Projects/>
              </Route>
              <Route path="/resume">
                <Resume/>
              </Route>
              <Route path="/career">
                <Career/>
              </Route>
              <Route path="/contacts">
                <Contacts/>
              </Route>
            </Switch>
        </div>
    )
}

