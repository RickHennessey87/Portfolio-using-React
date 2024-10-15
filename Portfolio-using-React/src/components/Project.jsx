import React from 'react';

function Project({ title, imageUrl, link, githubLink}) {
    return (
        <div className='project'>
            <img src={imageUrl} alt={`${title}`} className='project-image' />
            <h3 className='project-title'>{title}</h3>
            <div className='project-links'>
                <a href={link} target='_blank' rel='noopener noreferrer'>
                    Live Site
                </a>
                {' | '}
                <a href={githubLink} target='_blank' rel='noopener noreferrer'>
                    Github Repository
                </a>
            </div>
        </div>
    )
}

export default Project;

