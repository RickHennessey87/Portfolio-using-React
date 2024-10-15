import React from 'react';
import profilePic from '../assets/images/profilePic.jpg';

function AboutMe() {
    return (
        <section className='about-me'>
            <div className='container'>
                <h2>About Me</h2>
                <div className='about-me-content'>
                    <img src={profilePic} alt="Patrick Justus Hennessey" className='profile-photo' />
                    <div className='bio'>
                        <p>
                            Hello, I am Patrick Justus Hennessey, a Software Developer with a background in Philosophy, 
                            a passion for driving operational excellence, and a comprehensive foundation in computer science. 
                            I am eager to secure a position that leverages my skills in operational improvement, database development, 
                            web development, and programming (Python/JavaScript). I am a also an adept in critical thinking and effective in interpersonal 
                            communication. Additionally, I am a proficient writer in clear and concise prose due to my background in philosophy
                            as well as a musician (especially drumming). I am ready to contribute to team success through a proactive and detail-oriented approach.
                        </p>
                        <button className="work-button">View My Work</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;