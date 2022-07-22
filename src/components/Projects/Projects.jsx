import { Button, Typography } from '@mui/material';
import React from 'react'
import "./Projects.css";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from '@mui/icons-material';
import { FaRegSmileWink } from 'react-icons/fa';



const ProjectCard = ({
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin = false,
}) => {
    return (
        <>
            <a href={url} className="projectCard" target="blank">
                <div>
                    <img src={projectImage} alt="Project" />
                    <Typography variant='h5'>{projectTitle} </Typography>
                </div>
                <div>
                    <Typography variant='h4'>About Project</Typography>
                    <Typography>{description} </Typography>
                    <Typography variant='h6'>Tech Stack:{technologies} </Typography>
                </div>
            </a>

            {
                isAdmin && (
                    <Button>
                        <Delete />
                    </Button>
                )
            }
        </>
    )
}





const Projects = () => {

    const projects = [1,2,3];
    return (
        <div className="projects">
            <Typography variant='h3'>Projects <AiOutlineProject /></Typography>



            <div className="projectWrapper">
                {projects.map((projects, index) => (
                    <ProjectCard
                        url=""
                        projectImage="https://images.unsplash.com/photo-1572666341285-c8cb9790ca50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        projectTitle="Sample Project"
                        description="This is a sample project "
                        technologies="Mongodb, React, NodeJs, Express"
                    />
                ))}
            </div>

            <Typography variant='h3' style={{font:"100 1.2em 'Ubuntu Mono' "}}>
                All The Projects Shown Are Made By Me <FaRegSmileWink/>
            </Typography>
        </div>
    )
}

export default Projects
