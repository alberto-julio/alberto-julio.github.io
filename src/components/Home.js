import React from 'react';
import './Home.css';
import me from '../Me.png';

function Home() {
  const aboutIntro = "I'm a Berkeley Data Science graduate from Orange County, CA. I have a strong passion for all things computing and software. I am currently seeking opportunities to apply my skills and contribute to the world of technology.";
  const name = "Alberto Julio";
  const aspire = 'Aspiring Software Engineer';
  const aboutMeHeader = "About Me";
  const experience = "I previously worked at a small startup called Pagefelt, and have worked on many different projects ranging from full stack development to AI/ML and data science. Please feel free to check them out!";
  const freeTime = "In my free time, I enjoy hiking, playing guitar, and skateboarding.";

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
        <h3 className="about-header">{aboutMeHeader}</h3>
        <p>{aboutIntro}</p>
        <p>{experience}</p>
        <p>{freeTime}</p>
      </div>
    </div>
  );
}

export default Home;


// import React from 'react';
// import './Home.css';
// import testImg from '../test.png';
// import gradPhoto from '../grad.jpg';
// import me from '../Me.png';

// function Home() {
//   const aboutIntro = "I'm a Berkeley Data Science graduate from Orange County, CA. I have a strong passion for all things computing and software. I am currently seeking opportunities to apply my skills and contribute to the world of technology.";
//   const name = "Alberto Julio";
//   const aspire = 'Aspiring software engineer';
//   const aboutMeHeader = "About Me";
//   const asdf = "I have previously worked at a small start up called Pagefelt, and have worked on many different projects ranging from full stack development to Ai/ML and data science. Please feel free to check them out! ";
//   const freeTime = "In my free time I enjoy hiking, playing guitar and skateboarding.";

//   return (
//     <div className="Home">
//       <div className="left-section">
//         <img src={me} alt="discord pfp" />
//         <div className="name-container">
//           <p>{name}</p>
//           <p>{aspire}</p>
//         </div>
//       </div>

//       <div className="right-section">
//         <div className="about-container">
//           <b>{aboutMeHeader}</b>
//         </div>
//         <div className="right-container">
//           <p>{aboutIntro}</p>
//           <p>{asdf}</p>
//           <p>{freeTime}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
