import React from "react";
import './Projects.css';
import me from '../Me.png';
import peace from '../peace.jpeg';
import power from '../power.jpeg';
import testImg from '../test.png';
import gradPhoto from '../grad.jpg';

function Projects () {

    const projectList = [
        {
            title: "Vapor Tunes",
            description: "NLP, Python, Next.js, FastAPI, Spotify API \t Created a Spotify Mood Based playlist generator",
            image: me,
            link: "https://github.com/username/project1",
        },
        {
            title: "ZipTie",
            description: "Long term startup/passion projct, creating video games with my co-founder \t C#, Unity, Blender",
            image: peace,
            link: "https://github.com/username/project2",
        },
        {
            title: "Solitaire",
            description: "Small passion project i used to create in a spider solitaire game | Java, Swing",
            image: power,
            link: "https://github.com/username/project1",
        },
        {
            title: "Elections Dataset Analysis",
            description: "Created a ",
            image: testImg,
            link: "https://github.com/username/project2",
        },
        {
            title: "Neural Network",
            description: "This is a brief description of Project 1.",
            image: gradPhoto,
            link: "https://github.com/username/project1",
        },
        {
            title: "Pacman",
            description: "This is a brief description of Project 2.",
            image: me,
            link: "https://github.com/username/project2",
        },
        {
            title: "Bayes Net",
            description: "This is a brief description of Project 1.",
            image: peace,
            link: "https://github.com/username/project1",
        },
        {
            title: "Spam and Ham",
            description: "This is a brief description of Project 2.",
            image: power,
            link: "https://github.com/username/project2",
        },
        {
            title: "Housing Model",
            description: "This is a brief description of Project 1.",
            image: testImg,
            link: "https://github.com/username/project1",
        },
        {
            title: "Image Classifier",
            description: "This is a brief description of Project 2.",
            image: gradPhoto,
            link: "https://github.com/username/project2",
        },
        {
            title: "Kachow",
            description: "Utilized C to optiimize matrix multiplication.",
            image: me,
            link: "https://github.com/username/project1",
        },
        {
            title: "Snake",
            description: "This is a brief description of Project 2.",
            image: peace,
            link: "https://github.com/username/project2",
        },
        {
            title: "Build Your Own World",
            description: "Created a 2d textile based game in Java.",
            image: power,
            link: "https://github.com/username/project1",
        },
        {
            title: "Word Net",
            description: "Built a wordnet similar to the one used in the IBM watson.",
            image: testImg,
            link: "https://github.com/username/project2",
        },
        {
            title: "Scheme",
            description: "Built an interpreter to tokenize Scheme code using python.",
            image: gradPhoto,
            link: "https://github.com/alberto-julio/Scheme",
        },
    ];

    const projectsIntro = "Here is a list of all the projects I've worked on over the years(It's a lot I know) please feel free to check out them out I worked really hard on them.";


    return (
        <div className="projects-container">
            <h1>My Projects :D</h1>
            <p>{projectsIntro}</p>
            <div className="projects-grid">
                {projectList.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )

}
export default Projects;