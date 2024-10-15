import React from 'react';
import Project from '../components/Project';
import GTNBRGScreenshot from '../assets/images/GTNBRGScreenshot.png';
import findYourFurBabyScreenshot from '../assets/images/findYourFurBabyScreenshot.png';
import MVCTechBlogScreenshot from '../assets/images/MVCTechBlogScreenshot.jpg';
import WeatherAppScreenshot from '../assets/images/WeatherAppScreenshot.png';
import taskBoardScreenshot from '../assets/images/TaskBoardScreenshot.jpg';
import personalBlogScreenshot from '../assets/images/personalBlogScreenshot.jpg';

function Portfolio() {
    const projects = [
        {
            title: 'GTNBRG',
            imageUrl: GTNBRGScreenshot,
            link: 'https://gtnbrg.onrender.com/',
            githubLink: 'https://github.com/Team-we-dont-know-yet/Bookclub'
        },
        {
            title: 'Find Your Fur Baby',
            imageUrl: findYourFurBabyScreenshot,
            link: 'https://pawsitive-connections.github.io/find-your-fur-baby/',
            githubLink: 'https://github.com/Pawsitive-Connections/find-your-fur-baby?tab=readme-ov-file'
        },
        {
            title: 'MVC Tech Blog',
            imageUrl: MVCTechBlogScreenshot,
            link: 'https://my-mvc-tech-blog.onrender.com/dashboard',
            githubLink: 'https://github.com/RickHennessey87/my-mvc-tech-blog'
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