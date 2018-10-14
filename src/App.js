import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Showcase from './components/Showcase/Showcase';
import Tehnologies from './components/Tehnologies/Tehnologies';
import ProjectsShowcase from './components/Projects/ProjectsShowcase';
import { library } from '@fortawesome/fontawesome-svg-core';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

import { faTimes, faHome, faAddressCard, faEnvelope, faFolderOpen, faFileAlt, faWrench, faCode, faBookReader, faPaintBrush, faGlobe, faMedal } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faReact, faJs, faGithub, faLinkedin, faFacebookSquare, faGithubSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add( faTimes, faHome, faAddressCard, faEnvelope, faFolderOpen, faFileAlt, faWrench, faCode, faHtml5, faCss3Alt, faReact, faJs, faBookReader, faPaintBrush, faGlobe, faGithub, faLinkedin, faFacebookSquare, faGithubSquare, faInstagram, faMedal );

class App extends Component {
    state = {
        sideDrawerOpen: false,
        scroll: 0
    };

    componentWillMount() {
        window.addEventListener('scroll', this.handleScroll);
    };
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll = () => {
        this.setState({scroll: window.scrollY});
    };

    sideDrawerClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        });  
    };
    
    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };

    render() {
        let backdrop;

        if(this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler}/>
            document.querySelector('body').className = 'slide-open';
        } else {
            document.querySelector('body').className = 'slide-close';
        };

        return (
            <div style={{height: '100%'}}>

                <SideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler}/>  
                {backdrop}
                {this.state.scroll > 250 ? <Toolbar drawerClickHandler={this.sideDrawerClickHandler} bgColor='rgba(0, 0, 0, .5)' position='fixed' index='150' class='slide-to-bottom' /> : null}

                {/* Home Page */}
                <Route exact path="/" render={() => (
                    <React.Fragment>
                        <Toolbar drawerClickHandler={this.sideDrawerClickHandler} bgColor='#000' />
                        <Showcase />
                        <ProjectsShowcase scroll={this.state.scroll} />
                        <Tehnologies />
                        <Footer />
                    </React.Fragment>
                )}></Route>

                {/* Portfolio Page */}
                <Route path="/portofoliu" render={() => (
                    <p style={{textAlign: 'center'}}>portfolio page</p>

                )}></Route>

                {/* About Page */}
                <Route path="/despre" render={() => (
                    <React.Fragment>
                        <Toolbar drawerClickHandler={this.sideDrawerClickHandler} />
                        <About />
                        <Footer />
                    </React.Fragment>

                )}></Route>

                {/* Contact Page */}
                <Route path="/contact" render={() => (
                    <p style={{textAlign: 'center'}}>contact page</p>

                )}></Route>
            </div>
        );
    }
}

export default App;
