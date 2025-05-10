import React from "react";
import './Projects.css';
import me from '../Me.png';
import peace from '../peace.jpeg';
import power from '../power.jpeg';
import minato from '../test.png';
import gradPhoto from '../grad.jpg';

function Projects () {

    const projectList = [
        {
            title: "Vapor Tunes",
            description: "Created an end to end Spotify Mood Based playlist generator",
            image: minato,
            link: "https://github.com/username/project1",
        },
        {
            title: "ZipTie",
            description: "Long term startup/passion projct, creating video games with my co-founder",
            image: minato,
            link: "https://github.com/username/project2",
        },
        {
            title: "Solitaire",
            description: "Small passion project i used to create in a spider solitaire game",
            image: minato,
            link: "https://github.com/username/project1",
        },
        {
            title: "Elections Dataset Analysis",
            description: "Analyzedan elections dataset to predict the likelihood of a candidate winning their elections based on endorsements from certain political figures",
            image: minato,
            link: "https://github.com/username/project2",
        },
        {
            title: "Neural Network",
            description: "Created a very basic neural network",
            image: minato,
            link: "https://github.com/username/project1",
        },
        {
            title: "Pacman",
            description: "Implemented AI principles such as minimax, alpha beta pruning and more in a pacman game",
            image: minato,
            link: "https://github.com/username/project2",
        },
        {
            title: "Bayes Net",
            description: "Implemented a bayes net and other AI principles into a pacman game",
            image: minato,
            link: "https://github.com/username/project1",
        },
        {
            title: "Spam and Ham",
            description: "Created a spam email classifier",
            image: minato,
            link: "https://github.com/username/project2",
        },
        {
            title: "Housing Model",
            description: "Created a model to predict housing prices within cooke county",
            image: minato,
            link: "https://github.com/username/project1",
        },
        {
            title: "Image Classifier",
            description: "Used assembly to create an image classifier using the MNIST dataset",
            image: minato,
            link: "https://github.com/username/project2",
        },
        {
            title: "Kachow",
            description: "Utilized C to optiimize matrix multiplication.",
            image: minato,
            link: "https://github.com/username/project1",
        },
        {
            title: "Snake",
            description: "Implemented the game Snake in C.",
            image: minato,
            link: "https://github.com/username/project2",
        },
        {
            title: "Build Your Own World",
            description: "Created a 2d textile based game in Java.",
            image: minato,
            link: "https://github.com/username/project1",
        },
        {
            title: "Word Net",
            description: "Built a wordnet similar to the one used in the IBM watson using Java.",
            image: minato,
            link: "https://github.com/username/project2",
        },
        {
            title: "Scheme",
            description: "Built an interpreter to tokenize Scheme code using python.",
            image: minato,
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