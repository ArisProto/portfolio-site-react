import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const footer = () => (
    <section className="footer">
        <div className="footer-container">
            <div className="copyright"><p>Copyright © 2018 <a href="/"> AndreiNedelus.ro</a> | All rights reserved.</p></div>
            <div className="social">

                <a href="https://github.com/misshu1" target="_blank" rel="external noopener noreferrer" ><FontAwesomeIcon icon={['fab', 'github-square']} size="2x" /></a>

                <a href="https://www.linkedin.com/in/andreinedelus/" target="_blank" rel="external noopener noreferrer" ><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" /></a>

                <a href="https://www.facebook.com/AndreiNedelus.ro/" target="_blank" rel="external noopener noreferrer" ><FontAwesomeIcon icon={['fab', 'facebook-square']} size="2x" /></a>

                <a href="https://www.instagram.com/andreinedelus.ro/" target="_blank" rel="external noopener noreferrer" ><FontAwesomeIcon icon={['fab', 'instagram']} size="2x" /></a>

            </div>
        </div>
    </section>
);


export default footer;
