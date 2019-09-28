import React, {Component} from 'react';
import Toolbar from '../Toolbar/Toolbar'
// import  {BrowserRouter as Router, Link } from 'react-router-dom'
import SlideDrawer from '../SlideDrawer/SlideDrawer';
import Backdrop from '../Backdrop/Backdrop'
import {Link} from 'react-router-dom'
import './MethodInfo.scss'
import turkishImg from '../../Images/turkish1.png'
import TurkishPanel from './Panels/TurkishPanel';


class Turkish extends Component{
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
                            <img src={turkishImg} />
                        </div>
                        <div className="method_info_right">
                                <h1>Turkish Coffee</h1>
                                <p>Mainly enjoyed throughout the Middle East, it is made in a cezve, a typical long-handled pot made from copper or brass.
                                    Very finely ground coffee is needed to make it.
                                    Traditionally a brass grinder is used, in order to obtain a powder as fine as caster sugar.
                                    It is drunk from small cups, once the powder has completely settled at the bottom.</p>

                                    <p></p>
                        </div>
                    </div>
                    <div className="methodStarting">
                        <div className="method_info_left">
                            <h1>What You'll Need</h1>
                            <TurkishPanel/>
                        </div>
                        <div className="method_info_right">
                            <h1>Before You Brew</h1>
                            <p>Many enjoy their Turkish coffee flavored 
                                with spices like cardamom and cinnamon. 
                                Simply add finely ground spices to taste.</p>

                                <p></p>

                        </div>
                    </div>
                    <div className="methodButton">
                       
                            <h1>Start Brewing</h1>
                            <button>Brew Turkish Coffee</button>
                    </div>
                    
                </div>
            </div>

        )
    }
}

export default Turkish; 