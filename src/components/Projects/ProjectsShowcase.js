import React, { Component } from 'react';
import './ProjectsShowcase.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class projectsShowcase extends Component {
    state = {
        projects: [{
            project1: [{ 
               name: 'Memory Game',
               className: 'project1',
               github: 'github/limk',
               demo: 'ceva'
            }],
            project2: [{
                name: 'Neighberhood map React',
                className: 'project2',
                github: 'github/limk',
                demo: 'ceva'
            }],
            project3: [{
                name: 'project3',
                className: 'project3',
                github: 'github/limk',
                demo: 'ceva'
            }],
            project4: [{
                name: 'project4',
                className: 'project4',
                github: 'github/limk',
                demo: 'ceva'
            }],
        }]
    };

    createProject = (create) => (
        create.map( project =>
        <div key={project.className} className={project.className}>
            <div className="project-info">
                <span className="project-name">{project.name}</span>
                <div className="project-buttons">
                    <Link to={project.github}><FontAwesomeIcon icon="globe" size="sm" color="#000" className="button-icon"/>Demo</Link>
                    <Link to={project.github}><FontAwesomeIcon icon={['fab', 'github']} size="sm" color="#000" style={{background: '#e57354'}} />Code</Link>
                </div>
            </div>
        </div>
        )
    );

    render() {
        let { project1, project2, project3 ,project4 } = this.state.projects[0];
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
