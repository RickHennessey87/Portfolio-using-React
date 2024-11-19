import React from 'react';
import Project from '../components/Project';
import BrainBusterScreenShot from '../assets/images/bb2Screenshot.png';
import findYourFurBabyScreenshot from '../assets/images/findYourFurBabyScreenshot.png';
import MVCTechBlogScreenshot from '../assets/images/MVCTechBlogScreenshot.jpg';
import WeatherAppScreenshot from '../assets/images/WeatherAppScreenshot.png';
import taskBoardScreenshot from '../assets/images/TaskBoardScreenshot.jpg';
import personalBlogScreenshot from '../assets/images/personalBlogScreenshot.jpg';

function Portfolio() {
    const projects = [
        {
            title: 'BrainBuster',
            imageUrl: BrainBusterScreenShot,
            link: 'https://brainbuster-4543.onrender.com/',
            githubLink: 'https://github.com/p3t3-BrainBuster/BrainBuster'
        },
        {
            title: 'Find Your Fur Baby',
            imageUrl: findYourFurBabyScreenshot,
            link: 'https://pawsitive-connections.github.io/find-your-fur-baby/',
            githubLink: 'https://github.com/Pawsitive-Connections/find-your-fur-baby?tab=readme-ov-file'
        },
        {
            title: 'Weather App',
            imageUrl: WeatherAppScreenshot,
            link: 'https://rickhennessey87.github.io/Patrick-Hennessey-s-weather-app/',
            githubLink: 'https://github.com/RickHennessey87/Patrick-Hennessey-s-weather-app'
        },
        {
            title: 'Task Board',
            imageUrl: taskBoardScreenshot,
            link: 'https://rickhennessey87.github.io/Patrick-Hennessey-Task-Board/',
            githubLink: 'https://github.com/RickHennessey87/Patrick-Hennessey-Task-Board?tab=readme-ov-file'
        },
        {
            title: 'Personal Blog',
            imageUrl: personalBlogScreenshot,
            link: 'https://rickhennessey87.github.io/Patrick-Hennessey-personal-blog/',
            githubLink: 'https://github.com/RickHennessey87/Patrick-Hennessey-personal-blog'
        }
    ]

    return (
        <section className='portfolio'>
            <h2>Portfolio</h2>
            <div className='project-grid'>
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        imageUrl={project.imageUrl}
                        link={project.link}
                        githubLink={project.githubLink}
                    />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;