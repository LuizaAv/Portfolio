import React from "react"
import "./homepage.css"

import profpic from "../../assets/mee.jpg"

export default function Homepage(){
    return(
        <div className="homepageContainerDiv">
            <div >
                <img src={profpic} className="imgContainer"/>
            </div>
            <div className="homepageHeaderContainer">
                <h1 className="headerContent">Hello :) I'm Louise</h1>
                <hr/>
                <h2 className="headerContent">I'm  a  JS / React Developer</h2>
            </div>
        </div>
    )
}