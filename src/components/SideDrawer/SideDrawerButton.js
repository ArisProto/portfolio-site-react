import React from 'react';
import './SideDrawerButton.css';

const sideDrawerButton = props => (
    <button className="menu-button" onClick={props.click}>
        <div className="button-line" />
        <div className="button-line" />
        <div className="button-line" />
    </button>
)

export default sideDrawerButton;
