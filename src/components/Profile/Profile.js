import React, {Component} from 'react';
import jwt_decode from 'jwt-decode';
import SlideDrawer from '../SlideDrawer/SlideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import Toolbar from '../Toolbar/Toolbar';
import  {BrowserRouter as Router, Link } from 'react-router-dom'
import {register} from '../UserFunctions'
import axios from 'axios'
import './Profile.scss'
import ProfilePanel from './ProfilePanel'


class Profile extends Component{
    constructor(){
        super()
        this.state ={
                slideDrawerOpen: false,
        }
    }

    drawerToggleClickHandler () {
        this.setState((PrevState) => {
            return {slideDrawerOpen: !PrevState.slideDrawerOpen}
        })
    }

    backdropClickHandler = () => {
        this.setState({slideDrawerOpen: false});
    }

    render(){
        let backdrop;
        if(this.state.slideDrawerOpen){
            backdrop = < Backdrop click={this.backdropClickHandler} />;
        }
        return(
            <div className="page">
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SlideDrawer show={this.state.slideDrawerOpen} />
                {backdrop}
                <div className="profilePage">
                    <div className="profileTitle">
                        <h1>Settings</h1>
                    </div>
                    <div className="profileNav">
                        <ProfilePanel />   
                    </div>
                </div> 
            </div>
        )
    }
}

export default Profile;