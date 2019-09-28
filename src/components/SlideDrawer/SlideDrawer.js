import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import Auth from './Auth'

import './SlideDrawer.scss'

const slideDrawer = props => {
    
let drawerClasses = 'slide-drawer';
if(props.show){
    drawerClasses = 'slide-drawer open';
}
    
    return(
        <nav className={drawerClasses} >
            <ul>
                {/* <li><img src="Images/trips.png" alt=""/><a href="/">My Trips</a></li>
                <li><img src="Images/save.png" alt=""/><a href="/">Saved</a></li>
                <li><img src="Images/about.png" alt=""/><a href="/">About</a></li>
                <li><img src="Images/contact.png" alt=""/><a href="/">Contact</a></li>
                <li><img src="Images/setting.png" alt=""/><a href="/">Settings</a></li>
                <div className="LoginLink">
                    <li><img src="Images/lock.png" alt=""/><a href="/">Login</a></li>
                </div> */}
                <Auth />
            </ul>
        </nav>
    )
};

export default slideDrawer;