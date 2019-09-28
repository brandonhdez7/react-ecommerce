import React, { Component } from 'react';
import Toolbar from '../Toolbar/Toolbar'
// import  {BrowserRouter as Router, Link } from 'react-router-dom'
import SlideDrawer from '../SlideDrawer/SlideDrawer';
import Backdrop from '../Backdrop/Backdrop'
import DarkModeToggle from '../LightMode/DarkModeToggle';
import chat from '../../Images/chat.png';
import aboutBanner from '../../Images/shoot_illustration.png'
import './About.scss'


class About extends Component {
    state = {
        slideDrawerOpen: false
    }

    drawerToggleClickHandler = () => {
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
        return (
            <div className="page">
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SlideDrawer show={this.state.slideDrawerOpen}/> 
                {backdrop}
                <div className="aboutPage">
                    {/* <DarkModeToggle /> */}
                    <div className="aboutBanner">
                        <div className="about_banner_left">
                            <img src={aboutBanner} />
                        </div>
                        <div className="about_banner_right">
                            <h1>Get to know Black Bird</h1>

                            <p>Lorem Ipsum is a multidisciplinary firm specializing 
                                in the planning, design, and production of experiences. 
                                Our work includes museums, exhibits, immersive shows, 
                                visitor attractions, as well as all types of filmed and interactive media.</p>

                            <p>Founded in 2000, the company is headquartered in 
                                New York, with offices in London and Moscow. 
                                Our global team of over forty professionals 
                                includes writers, filmmakers, designers, architects,
                                 technologists, and researchers.</p> 
                        </div>
                    </div>
                    {/* <div className="team">
                        <h1>Meet The Team</h1>
                        <div className="members">
                            <div className="teamMember">
                            </div>
                            <div className="teamMember">
                            </div>
                            <div className="teamMember">
                            </div>
                            <div className="teamMember">
                            </div>
                        </div>
                    </div> */}
                    <div className="contact_form">
                        <div>
                            <form>
                                <h1>Reach Out To Us</h1>
                                <label>
                                    Name:
                                    <input type="text" name="name" />
                                </label>
                                <label>
                                    Email:
                                    <input type="email" name="email" />
                                </label>
                                <label>
                                    Message:
                                    <input type="textarea" name="message" />
                                </label>
                                <input className="contact_button" type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>


                    <div className="about_description">
                        <div className="about_description_left">
                            <div className="icons_locations">
                                <div className="about_icons">
                                    <i class="fa fa-phone"></i>
                                    <i class="fa fa-envelope"></i>
                                    <i class="fa fa-map-pin"></i>
                                </div>
                                <div className="about_locations">
                                    <h4>(678)-773-7241</h4>
                                    <h4>blackbird@gmail.com</h4>
                                    <h4>Atlanta, GA</h4>
                                </div>
                            </div>
                            <p>We believe coffee is more than just careful farming, 
                                intentional processing and expert roasting. Coffee 
                                is an opportunity to do good, and doing good means 
                                we get to help people and champion dignity.
                            </p>
                        </div>
                        <div className="about_description_right">
                            <img src={chat} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;