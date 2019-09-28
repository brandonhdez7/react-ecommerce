import React from 'react';
import Auth from '../SlideDrawer/Auth'
import logo from '../../Images/Origami_bird-512.png'

import './Toolbar.scss'
import DrawerToggleButton from '../SlideDrawer/DrawerToggleButton';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle_button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo"><a href="/"><img src={logo} alt=""/></a></div>
            <h1>Black Bird</h1>
            <div className="toolbar_navigation_items">
                <ul>
                    <Auth />
                </ul>
            </div>
        </nav>
    </header>
)

export default toolbar