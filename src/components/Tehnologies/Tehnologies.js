import React from 'react';
import './Tehnologies.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import photoshopLogo from './img/photoshop.svg';

const tehnologies = props => (
    <section className="tehnologies-container">
        <div className="tehnologies-container-top">
        
            <div className="container-box">
                <div className="flex-vh-center"><FontAwesomeIcon className
                ="circle" icon="file-alt" size="lg" color="#333" /><h3 className="blue-color">Planificare</h3></div>
                <p>Primul pas esential pentru a afla scopul proiectului si de a folosi cele mai potrivite unelte.</p>
            </div>

            <div className="container-box">
                <div className="flex-vh-center"><FontAwesomeIcon className
                ="circle" icon="paint-brush" size="lg" color="#333" /><h3 className="blue-color">Responsive Design</h3></div>
                <p>Crearea de layout adaptat pentru mobil si desktop.</p>
            </div>

            <div className="container-box">
                <div className="flex-vh-center"><FontAwesomeIcon className
                ="circle" icon="code" size="lg" color="#333" /> <h3 className="blue-color">Development</h3></div>
                <p>Locul in care ideile prind viata.</p>                
            </div>

            <div className="container-box">
                <div className="flex-vh-center"><FontAwesomeIcon className
                ="circle" icon="wrench" size="lg" color="#333" /><h3 className="blue-color">Suport Tehnic</h3></div>
                <p>Suport tehnic asigurat dupa finalizarea proiectului.</p>                
            </div>

        </div>

        <div className="tehnologies-container-bot">
        <h3 className="blue-color">Folosind cele mai recente tehnologii</h3>
            <div className="tehnologies-icons">
                <FontAwesomeIcon icon={['fab', 'html5']} size="2x" color="#e34f26" title="HTML5" />

                <FontAwesomeIcon icon={['fab', 'css3-alt']} size="2x" color="#3366CC" title="CSS3" />

                <FontAwesomeIcon icon={['fab', 'js']} size="2x" color="#f7df1e" title="Javascript" />

                <FontAwesomeIcon icon={['fab', 'react']} size="2x" color="#00d8ff" title="React.Js" />

                <img height="30px" alt="Photoshop" src={photoshopLogo} title="Photoshop" /> 
            </div>
        </div>
        {/*
        <h2>Services and Tehnologies</h2>
        <p style={{textAlign: 'center'}}>

    
            web development / Responsive Design / Website Maintenance
            sdsdfd
            </p>
        Description:
            Responsive Design
            1-10 Pagini incluse 
            Suport tehnic asigurat 1 an
            Optimizare SEO
        */}
    </section>
);


export default tehnologies;
