import React, {Component} from 'react';
import Toolbar from '../Toolbar/Toolbar'
// import  {BrowserRouter as Router, Link } from 'react-router-dom'
import SlideDrawer from '../SlideDrawer/SlideDrawer';
import Backdrop from '../Backdrop/Backdrop'
import {Link} from 'react-router-dom'
import './MethodInfo.scss'
import chemexImg from '../../Images/chemex1.png'
import ChemexPanel from './Panels/ChemexPanel'


class Chemex extends Component{
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
                            <img src={chemexImg} />
                        </div>
                        <div className="method_info_right">
                                <h1>Chemex</h1>
                                <p>The Chemex Coffeemaker was invented in 1941 by Dr. 
                                    Peter Schlumbohm PhD. Made simply from non-porous, 
                                    borosilicate glass, it brews coffee without imparting any 
                                    flavors of its own. On permanent display at MOMA New York 
                                    and other fine museums, it is truly a work of art.</p>

                                    <p>The Chemex consists of an narrow-waist glass flask and 
                                        uses proprietary paper filters, made of chemically 
                                        bonded paper (of thicker-gauge paper than the standard 
                                        paper filters for a drip-method coffeemaker).</p>
                        </div>
                    </div>
                    <div className="methodStarting">
                        <div className="method_info_left">
                            <h1>What You'll Need</h1>
                            < ChemexPanel />
                            
                        </div>
                        <div className="method_info_right">
                            <h1>Before You Brew</h1>
                            <p>For best results, we strongly recommend starting with whole 
                                bean coffee and grinding with a burr grinder immediately 
                                before brewing. If you grind your coffee too soon, it will 
                                quickly lose many of the compounds that give it such delightful 
                                aromas and flavors.</p>

                                <p>While it may seem complicated, we think using a scale actually 
                                    makes brewing easier by taking any guesswork out of the equation.</p>

                        </div>
                    </div>
                    <div className="methodButton">
                        <h1>Start Brewing</h1>
                        <button><Link className="method_link" to="/ChemexTimer">Brew Chemex</Link></button>
                    </div>
                    
                </div>
            </div>

        )
    }
}

export default Chemex; 
