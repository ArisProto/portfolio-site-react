import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.css';
import logo from '../Toolbar/img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return(
        <section className={drawerClasses}>
            <div className="side-drawer-top">
                <div className="side-drawer-logo" onClick={props.click}><Link to="/"><img alt="Andrei Nedelus" src={logo} /></Link></div>
                <div className="spacer" />
                <div className="side-drawer-close" onClick={props.click}>
                <FontAwesomeIcon icon="times" size="2x" color="#fff" />
                </div>
            </div>
            <nav className="side-drawer-menu">
                <ul onClick={props.click}>
                    <Link to="/"><li><FontAwesomeIcon icon="home" color="#fff" /> Acasa</li></Link>
                    <Link to="/despre"><li><FontAwesomeIcon icon="address-card" color="#fff" /> Despre</li></Link>
                    <Link to="/contact"><li><FontAwesomeIcon icon="envelope" color="#fff" /> Contact</li></Link>
                </ul>
            </nav>
        </section>
    );
};

export default sideDrawer;
