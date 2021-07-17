import React from "react"
import "./about.css"

import coder from "../../assets/coderr.png";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {Route,Link} from "react-router-dom";

export default function About(){
    return(
        <div className="aboutComponentContainer">
            <div className="aboutMe">
                <h1 className="aboutMeHeader">WHO AM I</h1>
                <div>
                    <p className="pAbout">
                    I am 
                    <Route>
                        <Link to = "/Portfolio" className="linkLouise">
                            Louise
                        </Link>
                    </Route>
                    from Armenia! Junior 
                    <span className="spanName"> JS / React</span> 
                    developer. 
                    </p>
                    <p className="pAbout">My first specialization was in economics, but after many searches I decided to try my forces in the field of programming.</p>
                </div>
                <p className="pAbout">I hope my expectations will be satisfied</p>
                <p className="pAbout">I am also interested in</p>
                <p className="pAbout">
                    <span className="favThings">
                    <CheckBoxIcon className="checkbox"/>
                        Reading
                    </span>
                    <br/>
                    <span className="favThings">
                    <CheckBoxIcon className="checkbox"/>
                        Traveling
                    </span>
                    <br/>
                    <span className="favThings">
                    <CheckBoxIcon className="checkbox"/>
                        Hiking
                    </span>
                </p>
            </div>
            <img src={coder} className="coder"/>
        </div>
    )
}