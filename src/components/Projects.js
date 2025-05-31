import React from "react";
import './Projects.css';

function Projects () {
    const projectList = [
        {
            title: "Vapor Tunes",
            description: "Created an end-to-end Spotify mood-based playlist generator",
            link: "https://github.com/alberto-julio/vaportunes",
        },
        {
            title: "ZipTie",
            description: "Long-term startup/passion project, creating video games with my co-founder",
            link: "https://github.com/alberto-julio/Zip-Tie",
        },
        {
            title: "Elections Dataset Analysis",
            description: "Analyzed an elections dataset to predict candidate outcomes based on endorsements",
            link: "https://github.com/alberto-julio/Elections-Analysis",
        },
        {
            title: "Spam and Ham",
            description: "Built a spam email classifier using NLP techniques",
            link: "https://github.com/alberto-julio/Spam-email-filter",
        },
        {
            title: "Housing Model",
            description: "Created a regression model to predict housing prices within Cook County",
            link: "https://github.com/alberto-julio/Housing-Model",
        },
        {
            title: "Image Classifier",
            description: "Used assembly to build an image classifier on the MNIST dataset",
            link: "https://github.com/alberto-julio/Classify",
        },
        {
            title: "Kachow",
            description: "Used C to optimize matrix multiplication",
            link: "https://github.com/alberto-julio/Kachow",
        },
        {
            title: "Snake",
            description: "Implemented the classic Snake game in C",
            link: "https://github.com/alberto-julio/Snek",
        },
        {
            title: "Scheme",
            description: "Built an interpreter in Python to tokenize and parse Scheme code",
            link: "https://github.com/alberto-julio/Scheme",
        },
    ];

    const projectsIntro = "Here is a list of projects that I'm most proud of, ranging from end-to-end full stack development to AI/ML and data science. I’ll be adding more over time.";

    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <p>{projectsIntro}</p>
            <div className="projects-grid">
                {projectList.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
