import React from "react"
import "./cvbutton.css"

import curriculumVitae  from "../../assets/CurriculumVitae.pdf";

export default function CVbutton(){
    return(
        <div>
            <button  className="resumeBtn">
                <a href={curriculumVitae} target="_blank" className="linkResume">Open the Resume</a>
            </button>
        </div>
    )
}

