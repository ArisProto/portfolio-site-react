import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Showcase from './components/Showcase/Showcase';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faHome, faAddressCard, faEnvelope, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

library.add( faTimes, faHome, faAddressCard, faEnvelope, faFolderOpen );

class App extends Component {
    state = {
        sideDrawerOpen: false
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
                <Toolbar drawerClickHandler={this.sideDrawerClickHandler} bgColor='#000' />
                <SideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler}/>  
                {backdrop}
                <Showcase />
                <p style={{textAlign: 'center'}}>*</p>
                <p style={{textAlign: 'center'}}>*</p>
                <p style={{textAlign: 'center'}}>*</p>
            </div>
        );
    }
}

export default App;
