import React, {Component} from 'react';
import Toolbar from '../Toolbar/Toolbar'
// import  {BrowserRouter as Router, Link } from 'react-router-dom'
import SlideDrawer from '../SlideDrawer/SlideDrawer';
import Backdrop from '../Backdrop/Backdrop'
import {Link} from 'react-router-dom'
import './MethodInfo.scss'
import aeroPressImg from '../../Images/aeropress (1).png'
import AeroPressPanel from './Panels/AeroPressPanel';

class AeroPress extends Component{
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
                            <img src={aeroPressImg} />
                        </div>
                        <div className="method_info_right">
                            <h1>AeroPress</h1>
                            <p>A small, two-tubed device, the AeroPress 
                                quickly brews a full-bodied coffee by allowing 
                                the user to push the water through the puck. 
                                Unlike pour over devices, it’s inspired by espresso 
                                machine technology – except electricity and levers 
                                are replaced by human pressure.</p>

                            <p>It also has similarities to the French press, 
                                although it’s become embraced by the specialty 
                                coffee industry in a way that the humble French 
                                press has yet to achieve. What’s more, the brew 
                                time (and recommended water temperature) is 
                                significantly shorter with the AeroPress.
                            </p>
                        </div>
                    </div>
                    <div className="methodStarting">
                        <div className="method_info_left">
                            <h1>What You'll Need</h1>
                            <AeroPressPanel /> 
                        </div>
                        <div className="method_info_right">
                            <h1>Before You Brew</h1>
                            <p>Make sure your AeroPress is clean and completely dry 
                                before using, or else the plunger tip may not be able 
                                to form a perfect seal inside the chamber.</p>

                            <p>For best results, we strongly recommend starting with whole 
                                    bean coffee and grinding with a burr grinder immediately 
                                    before brewing. If you grind your coffee too soon, it will 
                                    quickly lose many of the compounds that give it such delightful 
                                    aromas and flavors.</p>

                        </div>
                    </div>
                    <div className="methodButton">
                       
                            <h1>Start Brewing</h1>
                            <button><Link className="method_link" to="/AeroPressTimer">Brew AeroPress</Link></button>
                    </div>
                    
                </div>
            </div>

        )
    }
}

export default AeroPress; 