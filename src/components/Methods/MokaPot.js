import React, {Component} from 'react';
import Toolbar from '../Toolbar/Toolbar'
// import  {BrowserRouter as Router, Link } from 'react-router-dom'
import SlideDrawer from '../SlideDrawer/SlideDrawer';
import Backdrop from '../Backdrop/Backdrop'
import {Link} from 'react-router-dom'
import './MethodInfo.scss'
import MokaPotImg from '../../Images/moka.png'
import MokaPotPanel from './Panels/MokaPotPanel';


class MokaPot extends Component{
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
                            <img src={MokaPotImg} />
                        </div>
                        <div className="method_info_right">
                                <h1>Moka Pot</h1>
                                <p>In Italy a Caffè Moka is quite different from, say, 
                                    calling for a Mocha coffee in America. To sound 
                                    alike is not to taste alike, coffee-style. 
                                    For making moka, the chocolate syrup is nowhere in sight.</p>

                                    <p>Small, two-chambered moka pots sit on many Italian stovetops, 
                                        easy to use and producing a full-bodied coffee, rich in aroma. 
                                        Many have an hourglass shape, but you can find moka pots in a 
                                        variety of styles, all based on the same operating principle. 
                                        Water is heated in a lower chamber. Vapor pressure approaching 
                                        two atmospheres pushes the water up through ground coffee in a 
                                        filter, which collects in the upper chamber as liquid coffee.</p>
                        </div>
                    </div>
                    <div className="methodStarting">
                        <div className="method_info_left">
                            <h1>What You'll Need</h1>
                            <MokaPotPanel/>
                        </div>
                        <div className="method_info_right">
                            <h1>Before You Brew</h1>
                            <p>Moka pots were invented in 1930s Italy. The name 
                                refers to the city of Mocha, Yemen, for many 
                                centuries a center of coffee excellence.</p>

                                <p>Every moka pot consists of a cylinder 
                                    (bottom chamber), a filter funnel, a 
                                    collector (top chamber) with a second 
                                    removable filter, held in place by a rubber gasket. 
                                    The seal and removable filter should be changed periodically.</p>

                        </div>
                    </div>
                    <div className="methodButton">
                       
                            <h1>Start Brewing</h1>
                            <button>Brew Moka Pot</button>
                    </div>
                    
                </div>
            </div>

        )
    }
}

export default MokaPot; 