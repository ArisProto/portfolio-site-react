import React, { Component } from 'react';
import './ProjectsShowcase.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class projectsShowcase extends Component {
    state = {
        projects: [{
            project1: [{ 
               name: 'Neighborhood Map',
               className: 'project1',
               github: 'https://github.com/misshu1/neighborhood-map-react',
               demo: 'https://andreinedelus.ro/neighborhood-map-react'
            }],
            project2: [{
                name: 'Restaurant Reviews',
                className: 'project2',
                github: 'https://github.com/misshu1/Restaurant-reviews-app',
                demo: 'https://andreinedelus.ro/restaurant-review'
            }],
            project3: [{
                name: 'Classic Arcade Game',
                className: 'project3',
                github: 'https://github.com/misshu1/arcade-game',
                demo: 'https://andreinedelus.ro/arcade-game'
            }],
            project4: [{
                name: 'Memory Game',
                className: 'project4',
                github: 'https://github.com/misshu1/card-game',
                demo: 'https://andreinedelus.ro/cardgame'
            }]
        }]
    };

    createProject = (create) => {
        let randomNum = (Math.random() * (0.2 - 0.1) + 0.1).toFixed(2);
        return create.map( project =>
            <div key={project.className} className={project.className} style={{animationDelay: randomNum + 's'}}>
                <div className="project-info">
                    <span className="project-name">{project.name}</span>
                    <div className="project-buttons">
                        <a href={project.demo} target="_blank" rel="external noopener noreferrer" ><FontAwesomeIcon icon="globe" size="sm" color="#000" className="button-icon"/>Demo</a>
                        <a href={project.github} target="_blank" rel="external noopener noreferrer" ><FontAwesomeIcon icon={['fab', 'github']} size="sm" color="#000" style={{background: '#e57354'}} />Code</a>
                    </div>
                </div>
            </div>);
        };

    render() {
        let { project1, project2, project3, project4 } = this.state.projects[0];

        // Add 'slide-to-top' animation to the first 4 projects on the home page
        if (this.props.scroll > 180) {
            for (let i = 1; i <= 4; i++) {
                document.getElementsByClassName( 'project' + i )[0].classList.add('slide-to-top');
            }
        };

        return (
            <section className="projects">
                <h2 className="projects-title">Projects</h2>
                <div className="projects-showcase-container">
                    <div className="projects-showcase-bg">
                        {this.createProject(project1)}
                        {this.createProject(project2)}
                        {this.createProject(project3)}
                        {this.createProject(project4)}
                    </div>
                </div>
            </section>
        )
    }
}

export default projectsShowcase;
