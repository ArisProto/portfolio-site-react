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
                <section className="about-page">
                <div className="about-text slide-to-right">
                <h2><FontAwesomeIcon icon="address-card" size="sm" /> Despre mine</h2>
                <p>Prima interactiune cu programarea a inceput in 2009, cand am creat primul meu website, pe atunci nu eram foarte atras de programare. Recent am vazut un anunt pe internet legat de un curs creat de Udacity si Google, pentru a invata web development. La care s-au inscris 200.000 persoane.</p>
                <br />
                <p>Prima etapa a cursului a durat 3 luni de zile, unde am invatat HTML, CSS, JavaScript si jQuery. Aici doar 60.000 perosane au fost selectate, urmand ca 6.000 sa ajunga in etapa a doua. Cand prima etapa a luat sfarsit, urmatorul pas a fost sa anunte cine merge in etapa urmatoare, ziuea acea a fost cea mai lunga zi din viata mea.</p>
                <br />
                <p>Am primit un email mentionand ca sunt printre cei 10% din 60.000 persoane care ajung in etapa a doua, 6 luni pentru a invata Front-End Web Development. A fost cel mai frumos lucru care mi s-a intamplat, si pentru asta vreau sa le multumesc celor de la Udacity pentru ca mi-au aratat calea de urmat, care nu o vazusem inainte, si nu stiam ca exista.</p></div>
                    <div className="achievements-container slide-to-left">
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
