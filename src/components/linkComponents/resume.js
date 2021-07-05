import React , {useState}  from "react"


import "./resume.css";
import CVbutton from "./cvbutton";
import WorkIcon from '@material-ui/icons/Work';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';


export default function Resume(){
    return(
        <div className="resumePageContainer">
            <CVbutton/>
            <div className="resumeContentContainer">
                <div className="experienceContainer">
                    <h2 className="headers"> <WorkIcon className="iconHeader"/> Work Experience</h2>
                    <p className="period"><CheckCircleRoundedIcon className="tickIcon"/>2017-current</p>
                    <p className="place"><span className="placeSpan">«EVOCABANK CJSC»</span> / Cashier - sales specialist</p>
                    <p className="period"><CheckCircleRoundedIcon className="tickIcon"/>2016-2017</p>
                    <p className="place"><span className="placeSpan">«Good Credit UCO CJSC»</span> / Cashier - Loan consultant</p>
                    <p className="period"><CheckCircleRoundedIcon className="tickIcon"/>2013-2015</p>
                    <p className="place"><span className="placeSpan">«Amberd Research Center»</span> / Researcher</p>
                    <p className="place">Based on the results of research we have published the
                    attached work:</p>
                    <p className="place">
                    <a 
                    href="https://asue.am/upload/files/amberd-ecology/Amberd_20.pdf" 
                    target="_blank" 
                    className="workLink">Work</a></p>
                </div>
                <div className="educationContainer">
                    <h2 className="headers"><CastForEducationIcon className="iconHeader"/>Education</h2>
                    <p className="period"><CheckCircleRoundedIcon className="tickIcon"/>2019-2020</p>
                    <p className="place"><span className="placeSpan">Armenian Code Academy</span> / Deep Javascript and React</p>
                    <p className="period"><CheckCircleRoundedIcon className="tickIcon"/>2019</p>
                    <p className="place">
                    <span className="placeSpan">IT Code</span> 
                    / Javascript Fundamentals
                    </p>
                    <p className="period"><CheckCircleRoundedIcon className="tickIcon"/>2013-2015</p>
                    <p className="place">
                    <span className="placeSpan">
                        Armenian State University of Economics
                    </span>
                    <br/>
                    Faculty of Regulation of Economy 
                    <br/>
                    and International Economic relations /master degree
                    </p>
                    <p className="period"><CheckCircleRoundedIcon className="tickIcon"/>2009-2013</p>
                    <p className="place">
                    <span className="placeSpan">
                        Armenian State University of Economics
                    </span>
                    <br/>
                    Faculty of Regulation of Economy 
                    <br/>
                    and International Economic relations /bachelor degree
                    </p>
                </div>
            </div>
            <div className="volunteerAndPublications">
                <div className="volunteerContainer">
                    <h2 className="headers"><EmojiPeopleIcon className="iconHeader"/>Volunteer Experience</h2>
                    <p className="period"><CheckCircleRoundedIcon className="tickIcon"/> 2014-2015</p>
                    <p className="place"><span className="placeSpan">«EVOCABANK CJSC» / previous «Prometey Bank LTD»</span>
                    <br/>
                    / Prometey Progress Training Program - trainee</p>
                    <p className="period"><CheckCircleRoundedIcon className="tickIcon"/> 2013-2014</p>
                    <p className="place"><span className="placeSpan">«Strategic business» educational and consulting 
                    <br/>
                    centre </span> /
                    Trainee</p>
                </div>
                <div className="publicationsContainer">
                    <h2 className="headers"><ImportContactsIcon className="iconHeader"/> Publications</h2> 
                    <p className="place"><CheckCircleRoundedIcon className="tickIcon"/>
                    The international experience of innovative way of using
                    <br/>
                    natural resources and the opportunities of its realizing 
                    <br/>
                    in Armenia                    
                    </p>
                    <a href="https://asue.am/upload/files/amberd-ecology/Amberd_20.pdf" className="workLink">https://asue.am/upload/files/amberd-ecology/Amberd_20.pdf</a>
                </div>
            </div>
            <div className="CVbtnContainer">
                <CVbutton/>
            </div>
        </div>
    )
}