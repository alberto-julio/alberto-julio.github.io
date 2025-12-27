import React from 'react';
import './Home.css';
import me from '../Me.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faReact, faJava, faJs, faGolang} from '@fortawesome/free-brands-svg-icons';

function Home() {
  const aboutIntro = "I'm a Berkeley Data Science graduate from Orange County, CA. I have a strong passion for all things data and software. I am currently seeking opportunities to apply my skills and contribute to the world of technology.";
  const name = "Alberto Julio";
  const aspire = 'Aspiring Software Engineer';
  const aboutMeHeader = "About Me";
  const Current = 'Currently I am working as an IT Technician for a group of Neurology Clincs known as TNG. Here I have been able to solve real world issues using the Athena One RESTFUL API.'
  const experience = "I previously worked at a small startup called Pagefelt, and have worked on many different projects ranging from full stack development to AI/ML and data science. Please feel free to check them out!";
  // const freeTime = "In my free time, I enjoy hiking, playing guitar, and skateboarding.";
  const skills = "Highlighted Skills";
  const projectList = [
    {
        title: "PokeSort",
        description: "A full stack project dedicated to teaching sort algorithms and data structures using an interactive pokemon demo",
    },
    {
        title: "ZipTie",
        description: "Long-term startup/passion project, creating video games with my co-founder",
    },
  ];

  return (
    <div className="home">
      <div className="left-section">
        <img src={me} alt="Profile" className="profile-img" />
        <div className="name-container">
          <h1>{name}</h1>
          <h2>{aspire}</h2>
          <div className='skills-card'>
            <h2 className='skills-header'>{skills}</h2>
            <div className='skills-row'>
              <div className="skill"><FontAwesomeIcon icon={faPython} size="2x" /> Python</div>
              <div className="skill"><FontAwesomeIcon icon={faJava} size="2x" /> Java</div>
              {/* <div className="skill"><FontAwesomeIcon icon={faJs} size="2x" /> JavaScript</div> */}
              <div className="skill"><FontAwesomeIcon icon={faReact} size="2x" /> React</div>
              <div className="skill"><FontAwesomeIcon icon={faGolang} size="2x" /> Go</div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-section">
        <h2 className="about-header">{aboutMeHeader}</h2>
        <p>{aboutIntro}</p>
        <p>{Current}</p>
        <p>{experience}</p>
        {/* <p>{freeTime}</p> */}
        <div className='current-projects'>
          <h2 className='projects-header'>Currently in Development</h2>
          <div className='projects-row'>
            {projectList.map((project, index) => (
              <div className="project-card" key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;