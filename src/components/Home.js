import React from 'react';
import './Home.css';
import me from '../Me.png';
import { faPython, faReact, faJava, faJs} from '@fortawesome/free-brands-svg-icons';

function Home() {
  const aboutIntro = "I'm a Berkeley Data Science graduate from Orange County, CA. I have a strong passion for all things data and software. I am currently seeking opportunities to apply my skills and contribute to the world of technology.";
  const name = "Alberto Julio";
  const aspire = 'Aspiring Software Engineer';
  const aboutMeHeader = "About Me";
  const experience = "I previously worked at a small startup called Pagefelt, and have worked on many different projects ranging from full stack development to AI/ML and data science. Please feel free to check them out!";
  // const freeTime = "In my free time, I enjoy hiking, playing guitar, and skateboarding.";
  const skills = "Skills";

  return (
    <div className="home">
      <div className="left-section">
        <img src={me} alt="Profile" className="profile-img" />
        <div className="name-container">
          <h1>{name}</h1>
          <h2>{aspire}</h2>
        </div>
      </div>

      <div className="right-section">
        <h2 className="about-header">{aboutMeHeader}</h2>
        <p>{aboutIntro}</p>
        <p>{experience}</p>
        {/* <p>{freeTime}</p> */}
      </div>

      <div className='skills-card'>

      </div>

    </div>
  );
}

export default Home;