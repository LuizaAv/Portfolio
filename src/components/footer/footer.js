import React from "react"
import "./footer.css" 

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import CopyrightIcon from '@material-ui/icons/Copyright';

export default function Footer(){
    return(
        <div className="footerContainer">
            <footer className="footer">
                <div>
                    <p className="pTagFooter">Developed and Designed by Louise Avetisyan</p>
                </div>
                <div>
                    <p className="pTagFooter">Copyright  <CopyrightIcon className="imgFooter"/> 2021</p>
                </div>
                <div className="socialPagesIconContainer">
                    <a href="https://github.com/luizaAv" className="socialPagesIcon">
                        <GitHubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/luiza-avetisyan-7038aa17b/" className="socialPagesIcon">
                        <LinkedInIcon />
                    </a>
                    <a href="https://www.instagram.com/louisa_avetisyan/" className="socialPagesIcon">
                        <InstagramIcon />
                    </a>
                    <a href="https://www.facebook.com/luiza.avetisyan" className="socialPagesIcon">
                        <FacebookIcon/>
                    </a>
                </div>
            </footer>
        </div>
    )
}