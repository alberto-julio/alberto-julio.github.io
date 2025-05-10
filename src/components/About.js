import React from "react";
import './About.css';


function About () {

    const about_text = 'I WAS BORN, AND AFTER THAT IT WAS OVER FOR THE REST OF THE WORLD';
    const aboutIntro = "Hey there!, My name is Alberto Julio and I am a summer 2024 data science graduate from UC Berkeley. I am a community driven engineer with a passionate about creating software and Ai/ML please feel free to browese and look at my projects and more details about myself!";

    return (
        <div>
            <div className="About">
                <p>{about_text}</p>
                <p>{aboutIntro}</p>
                <a href='https://www.mrschang.com/2015period2/alberto.html' target='_blank' rel='noopener noreferrer'>Here is a link to my first website EVER,I made it when i was 12... ohh how times have changed</a>
            </div>
        </div>
    )
};
export default About;