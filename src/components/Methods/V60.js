import React, {Component} from 'react';
import Toolbar from '../Toolbar/Toolbar'
// import  {BrowserRouter as Router, Link } from 'react-router-dom'
import SlideDrawer from '../SlideDrawer/SlideDrawer';
import Backdrop from '../Backdrop/Backdrop'
import {Link} from 'react-router-dom'
import './MethodInfo.scss'
import v60Img from '../../Images/v601.png'
import V60Panel from './Panels/V60Panel';


class V60 extends Component{
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
                            <img src={v60Img} />
                        </div>
                        <div className="method_info_right">
                                <h1>v60</h1>
                                <p>Nuanced and versatile, the Hario is an elegant brewer 
                                    for those who want to perfect the pour. It’s great for 
                                    folks who are looking for complete control over brewing 
                                    extraction. The key here is to pour slow. The entire brew 
                                    process for a 10oz mug takes about three minutes.</p>

                                    <p>Simple and elegant, the Hario V60 puts you in 
                                        complete control of the brewing process, makes 
                                        cleanup a breeze, and can easily be tossed into 
                                        your overnight bag. Follow this guide to brew the 
                                        perfect pour over.</p>
                        </div>
                    </div>
                    <div className="methodStarting">
                        <div className="method_info_left">
                            <h1>What You'll Need</h1>
                            <V60Panel />
                        </div>
                        <div className="method_info_right">
                            <h1>Before You Brew</h1>
                            <p>For best results, we strongly recommend 
                                starting with whole bean coffee and grinding 
                                with a burr grinder immediately before brewing. 
                                If you grind your coffee too soon, it will quickly 
                                lose many of the compounds that give it such 
                                delightful aromas and flavors.</p>

                                <p>While it may seem complicated, we think using 
                                    a scale actually makes brewing easier by 
                                    taking any guesswork out of the equation.</p>

                        </div>
                    </div>
                    <div className="methodButton">
                       
                            <h1>Start Brewing</h1>
                            <button><Link className="method_link" to="/V60Timer">Brew V60</Link></button>
                    </div>
                    
                </div>
            </div>

        )
    }
}

export default V60; 