import React from "react"

import WorkIcon from '@material-ui/icons/Work';
import "./projects.css"
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';


export default function Projects(){

    return(
        <div className="projectsContainer">
            <div>
                <h1 className="projectsHeader"><WorkIcon className="iconProjectHeader"/>My Projects</h1>
            </div>
            <div className="cardContainer">
                <div className="cards">
                    <Typography>
                        <a href="https://luizaav.github.io/aca-final-project-lge/#/"
                        target="_blank"
                        className="projectsLink"
                        >
                        Financial App
                        <Card className="aCard" id="finAppImage" ></Card>
                        </a>
                    </Typography>
                </div>
                <div className="cards">
                    <Typography>
                        <a href="https://github.com/LuizaAv/Todo-with-hooks"
                        target="_blank"
                        className="projectsLink"
                        >
                        Todo App With Hooks
                        <Card className="aCard" id="todoImage" ></Card>
                        </a>
                    </Typography>
                </div>
                <div className="cards">
                    <Typography>
                        <a href="https://github.com/LuizaAv/arnology"
                        target="_blank"
                        className="projectsLink"
                        >
                        Arnology Site Demo
                        <Card className="aCard" id="arnologyImage" ></Card>
                        </a>
                    </Typography>
                </div>
            </div>
            <div className="cardContainer">
                <div className="cards">
                    <Typography>
                        <a href="https://github.com/LuizaAv/searchcountry"
                        target="_blank"
                        className="projectsLink"
                        >
                        Country Search App
                        <Card className="aCard" id="searchAppImage" ></Card>
                        </a>
                    </Typography>
                </div>
                <div className="cards">
                    <Typography>
                        <a href="https://luizaav.github.io/Portfolio/"
                        target="_blank"
                        className="projectsLink"
                        >
                        Portfolio
                        <Card className="aCard" id="portfolioImage" ></Card>
                        </a>
                    </Typography>
                </div>
            </div>
        </div>
    )
}