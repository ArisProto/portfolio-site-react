import React from 'react';
import './Tehnologies.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const tehnologies = props => (
    <div>
      <h2>Services and Tehnologies</h2>
      <p style={{textAlign: 'center'}}>
      <FontAwesomeIcon icon={['fab', 'html5']} />
      <FontAwesomeIcon icon={['fab', 'css3-alt']} />
      <FontAwesomeIcon icon={['fab', 'react']} />
      <FontAwesomeIcon icon={['fab', 'js']} />

          web development / Responsive Design / Website Maintenance
          sdsdfd
          </p>
    {/* Description:
        Responsive Design
        1-10 Pagini incluse 
        Suport tehnic asigurat 1 an
        Optimizare SEO
    */}
    </div>
);


export default tehnologies;
