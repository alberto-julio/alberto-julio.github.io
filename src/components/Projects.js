import React from "react";
import './Projects.css';


function Projects () {
    const projectList = [
        {
            title: "Vapor Tunes",
            description: "Created an end-to-end Spotify mood-based playlist generator",
            link: "https://github.com/alberto-julio/vaportunes",
            internal: false
        },
        {
            title: "Sza-Merch Bot",
            description: "Long-term startup/passion project, creating video games with my co-founder",
            link: "https://github.com/alberto-julio/szamerchbot",
            internal: true
        },
        {
            title: "Elections Dataset Analysis",
            description: "Analyzed an elections dataset to predict candidate outcomes based on endorsements",
            link: "https://github.com/alberto-julio/Elections-Analysis",
            internal: false
        },
        {
            title: "Spam and Ham",
            description: "Built a spam email classifier using NLP techniques",
            link: "/broken",
            internal: true
        },
        {
            title: "Housing Model",
            description: "Created a regression model to predict housing prices within Cook County",
            link: "/broken",
            internal: true
        },
        {
            title: "Image Classifier",
            description: "Used assembly to build an image classifier on the MNIST dataset",
            link: "/broken",
            internal: true 
        },
        {
            title: "Kachow",
            description: "Used C to optimize matrix multiplication",
            link: "/broken",
            internal: true
        },
        {
            title: "Snake",
            description: "Implemented the classic Snake game in C",
            link: "/broken",
            interal: true
        },
        {
            title: "Scheme",
            description: "Built an interpreter in Python to tokenize and parse Scheme code",
            link: "/broken",
            internal: true,
        },
    ];

    // const projectsIntro = "Here is a list of projects that I'm most proud of, ranging from end-to-end full stack development to AI/ML and data science. I’ll be adding more over time.";

    return (
        <div className="projects-container">
            <h1>My Projects</h1>
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
