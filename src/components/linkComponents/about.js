import React from "react"
import "./about.css"

import coder from "../../assets/coderr.png";
import CheckBoxIcon from '@material-ui/icons/CheckBox';

export default function About(){
    return(
        <div className="aboutComponentContainer">
            <div className="aboutMe">
                <h1 className="aboutMeHeader">WHO AM I</h1>
                <div>
                    <p className="pAbout">I am <span className="spanName">Louise</span> from Armenia! Junior <span className="spanName"> JS / React</span> developer. </p>
                    <p className="pAbout">My first specialization was in economics, but after many searches I decided to try my forces in the field of programming.</p>
                </div>
                <p className="pAbout">I hope my expectations will be satisfied</p>
                <p className="pAbout">I am also interested in</p>
                <p className="pAbout">
                    <CheckBoxIcon className="checkbox"/>
                    Reading
                    <br/>
                    <CheckBoxIcon className="checkbox"/>
                    Traveling
                    <br/>
                    <CheckBoxIcon className="checkbox"/>
                    Hiking
                </p>
            </div>
            <img src={coder} className="coder"/>
        </div>
    )
}