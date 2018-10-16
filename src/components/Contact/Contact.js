import React, { Component } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class contact extends Component {
    render() {
        return (
            <section className="contact-page">
                <div className="contact-container">
                    <div className="contact-container-left">
                        <div className="contact-container-info">
                            <div className="contact-box">


                                <div className="contact-text-info">
                                    <h2>Contact</h2>
                                    <p>Cateva chestii inutile aici</p>
                                    <p><FontAwesomeIcon icon="at" color="#d6d8de" className="fa-sm" style={{paddingRight: '.5rem'}} /> nedelusandrei@gmail.com</p>
                                    <p><FontAwesomeIcon icon="phone" color="#d6d8de" className="fa-sm" style={{paddingRight: '.5rem'}} /> +40 213 213 213</p>
                                    <p><FontAwesomeIcon icon="map-marker-alt" color="#d6d8de" className="fa-sm" style={{paddingRight: '.5rem'}} /> Romania</p>
                                </div>


                                <div className="contact-icons">
                                    <a href="https://github.com/misshu1" target="_blank" rel="external noopener noreferrer" ><FontAwesomeIcon icon={['fab', 'github-square']} size="lg" /></a>

                                    <a href="https://www.linkedin.com/in/andreinedelus/" target="_blank" rel="external noopener noreferrer" ><FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" /></a>

                                    <a href="https://www.facebook.com/AndreiNedelus.ro/" target="_blank" rel="external noopener noreferrer" ><FontAwesomeIcon icon={['fab', 'facebook-square']} size="lg" /></a>

                                    <a href="https://www.instagram.com/andreinedelus.ro/" target="_blank" rel="external noopener noreferrer" ><FontAwesomeIcon icon={['fab', 'instagram']} size="lg" /></a>
                                </div>


                            </div>
                        </div>
                    </div>


                    <div className="contact-container-right">
                        <div className="contact-form-box">
                            <h2>Lasa un mesaj</h2>
                            <form>
                                <p>
                                    <input type="text" placeholder="Nume*" required />
                                </p>

                                <p>
                                    <input type="email" placeholder="Email*" required />
                                </p>

                                <p>
                                    <textarea type="message" placeholder="Mesaj*" rows="4" required ></textarea>
                                </p>

                                <button className="contact-button">Trimite</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
};

export default contact;
