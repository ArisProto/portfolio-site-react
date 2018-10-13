import React, { Component } from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class about extends Component {
    state = {
        achievements: [{
            achievement1: [{
                name: 'Google Developer Challenge Scholarship',
                src: require('./img/achievement1.png'),
                date: 'Noiembrie 2017',
                description: 'In decursul a 3 luni am invatat HTML CSS si JavaScript',
                className: 'achievement1'
            }],
            achievement2: [{
                name: 'Front-End Web Developer Nanodegree',
                src: require('./img/achievement2.png'),
                date: 'August 2018',
                description: 'Doar 10% din 60.000 persoane au fost selectate pentru acest curs.',
                className: 'achievement2'
            }],
            achievement3: [{
                name: 'Bertelsmann Data Science Challenge Scholarship',
                src: require('./img/achievement3.png'),
                date: 'Mai 2018',
                description: 'Bazele Statisticii.',
                className: 'achievement3'
            }]
        }]
    };

    createAchievement = (create) => {
        return create.map( achievement =>
            <div key={achievement.name} className={`achievements-box ${achievement.className}`}>
                <div className="achievements-img">
                    <img width="100px" height="100px" src={achievement.src} alt={achievement.name} />
                </div>

                <div className="achievements-info">
                    <h3>{achievement.name}</h3>
                    <p>{achievement.description}</p>
                    <div className="achievements-date-pos"><p className="achievements-date">{achievement.date}</p></div>
                </div>
            </div>);
        };

    render() {
        let { achievement1, achievement2 , achievement3 } = this.state.achievements[0];

        return (
                <section className="contact-page">
                    <div className="achievements-container">
                        <h2><FontAwesomeIcon icon="medal" size="sm" className="fa-flip-vertical" /> Realizari</h2>
                        <div className="achievements">
                            {this.createAchievement(achievement1)}
                            {this.createAchievement(achievement2)}
                            {this.createAchievement(achievement3)}
                        </div>
                    </div>
                </section>
            );
    };
};

export default about;
