import React from 'react';
import resume from '../assets/pdf/PatrickJustusHennesseyResume.pdf'

function Resume() {
    const proficiencies = [
        'HTML', 
        'CSS',
        'JavaScript',
        'Python',
        'jQuery',
        'Bootstrap',
        'React',
        'Responsive Design',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'SQL',
        'MySQL',
        'Sequelize',
        'GraphQL',
        'noSQL',
        'Git',
        'npm',
        'REST APIs',
        'AJAX',
        'Testing',
        'Database Theory',
        'Algorithms',
        'Data Structures',
        'Project Management',
        'AI'
    ]

    return (
        <section className='resume'>
            <h2>Resume</h2>
            <p>
                <a href={resume} download>
                    Download my resume
                </a>
            </p>
            <div className='proficiences'>
                <h3>Proficiences</h3>
                <ul>
                    {proficiencies.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Resume;