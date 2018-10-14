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
                <div className="about-text slide-to-right">
                <h2><FontAwesomeIcon icon="address-card" size="sm" /> Ceva aici</h2>
                <p>Prima interactiune cu programarea a inceput in 2009, cand am creat primul meu website, pe atunci nu eram foarte atras de programare si nu mi-am dat seama ca pot sa traiesc din asta.
                    Recent am vazut un anunt despre un scholarship pentru a invata Web Development.
                    
                    
                    
                    
                    
                    
                    
                    My first interaction with code was in 2009 when I created my first website, back then I was not thinking that I can do my living from it.

                Recently I saw an ad on Facebook about a scholarship program to learn web development. I read some information about that and I registered for the scholarship. One month passed and they announced the people selected for this program -- 60,000 out of the 200,000 registered.

                The funny part of this is that I received an email telling me that I was not selected for this program, and I felt so bad in that day. But the very next day they send me a second email telling me that the first email was a mistake and I was selected.

                The scholarship start date came and, after a few weeks I’ve learned so much and was so motivated to learn more about programing, that I completed the 3 month scholarship program in only 1 month. The course was so well put together and the community always there to help when I got stuck in some quizzes.

                When the scholarship was over, the next step was to announce the recipients of a 6 months nanodegree program. That day was the longest day of my life. The email came telling me that I was one of the 10% of 60,000 people who moved on to phase 2 of the scholarship -- 6 months of learning Front-End Web Development. It was the best thing that happened to me, and for this I want to thank Udacity for showing me a path to follow, that I had not seen before, and did not know existed.</p></div>
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
