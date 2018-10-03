import React from 'react';
import { Link } from 'react-router-dom';
import './Toolbar.css';
import logo from './img/logo.svg';
import smallLogo from './img/small-logo.svg';
import '../SideDrawer/SideDrawerButton';
import SideDrawerButton from '../SideDrawer/SideDrawerButton';

const toolbar = props => (
    <header className="toolbar" style={{background: props.bgColor ? props.bgColor : null}}>
        <nav className="toolbar-nav">
            <div>
                <SideDrawerButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar-logo"><Link to="/"><img alt="Andrei Nedelus" src={logo} /></Link></div>
            <div className="toolbar-small-logo"><Link to="/"><img alt="Andrei Nedelus" src={smallLogo} /></Link></div>
            <div className="toolbar-links">
                <ul>
                    <li><Link to="/">Acasa</Link></li>
                    <li><Link to="/portofoliu">Portofoliu</Link></li>
                    <li><Link to="/despre">Despre</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;
