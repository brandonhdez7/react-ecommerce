import React, {Component} from 'react';
import Toolbar from '../Toolbar/Toolbar'
// import  {BrowserRouter as Router, Link } from 'react-router-dom'
import SlideDrawer from '../SlideDrawer/SlideDrawer';
import Backdrop from '../Backdrop/Backdrop'
import {Link} from 'react-router-dom'
import './MethodInfo.scss'
import frenchPressImg from '../../Images/frenchpress1.png'
import FrenchPressPanel from './Panels/FrenchPressPanel';


class FrenchPress extends Component{
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

        return(
            <div className="homePage">
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SlideDrawer show={this.state.slideDrawerOpen}/> 
                {backdrop}
                <div className="methodMain">
                    <div className="methodInfo">
                        <div className="method_info_left">
                            <img src={frenchPressImg} />
                        </div>
                        <div className="method_info_right">
                                <h1>FrenchPress</h1>
                                <p>Easy to brew and super consistent, the French Press 
                                    is very reliable. Its classic and well-engineered 
                                    design hasn’t changed much since its invention in 
                                    1929, and it’s perfect for making multiple cups of 
                                    heavy-bodied coffee in 4 minutes.</p>

                                    <p>Before pressing the grounds to 
                                        extract every drop of delicious oil, you’ll 
                                        let the coffee steep in hot water to bring out 
                                        its full flavor. It’s easy to brew coffee in a 
                                        French press, but it takes a little bit of practice 
                                        to brew the perfect cup.</p>
                        </div>
                    </div>
                    <div className="methodStarting">
                        <div className="method_info_left">
                            <h1>What You'll Need</h1>
                            <FrenchPressPanel />
                        </div>
                        <div className="method_info_right">
                            <h1>Before You Brew</h1>
                            <p>Make sure your French press has been thoroughly
                                 cleaned since you last used it. Any old grounds
                                  stuck in the mesh filter will ruin your coffee 
                                  with bitter flavors.</p>

                                <p>For best results, we strongly recommend starting
                                     with whole bean coffee and grinding with a burr 
                                     grinder immediately before brewing. If you grind 
                                     your coffee too soon, it will quickly lose many 
                                     of the compounds that give it such delightful 
                                     aromas and flavors.</p>

                        </div>
                    </div>
                    <div className="methodButton">
                       
                            <h1>Start Brewing</h1>
                            <button>Brew v60</button>
                    </div>
                    
                </div>
            </div>

        )
    }
}

export default FrenchPress; 