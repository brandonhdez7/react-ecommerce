import React, {Component} from 'react';
import Toolbar from '../Toolbar/Toolbar'
// import  {BrowserRouter as Router, Link } from 'react-router-dom'
import SlideDrawer from '../SlideDrawer/SlideDrawer';
import Backdrop from '../Backdrop/Backdrop'
import {Link} from 'react-router-dom'
import './MethodInfo.scss'
import Favorite from './Favorites/Favorite'
import coffeeBeanImg from '../../Images/roast-spectrum-942x1059-1-3.png'
import aeroPressImg from '../../Images/aeropress (1).png'
import chemexImg from '../../Images/chemex1.png'
import coldBrewImg from '../../Images/coldbrew1.png'
import MokaPotImg from '../../Images/moka.png'
import turkishImg from '../../Images/turkish1.png'
import v60Img from '../../Images/v601.png'
import espressoImg from '../../Images/portafilter.png'
import frenchPressImg from '../../Images/frenchpress1.png'


class Methods extends Component{
    state = {
        slideDrawerOpen: false,
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
                        <div className="methodRoast">
                            <div className="roastImg">
                                <img src={coffeeBeanImg}/>
                            </div>
                            <div className="roastInfo">
                                <h2>Light Roast</h2>
                                <ul>
                                    <li>Roasting time 9 minutes</li>
                                    <li>High acidity</li>
                                    <li>Fruity smell</li>
                                </ul>
                                <h2>Medium Roast</h2>
                                <ul>
                                    <li>Roasting time 16 minutes</li>
                                    <li>Balanced flavor and acidity </li>
                                    <li>Slightly sweet taste</li>
                                </ul>
                                <h2>Dark Roast</h2>
                                <ul>
                                    <li>Roasting for 30 minutes</li>
                                    <li>Oilly surface</li>
                                    <li>Bitter, smoky taste</li>
                                </ul>

                            </div>
                    
                        </div>
                        <div className="methodList">
                            <div className="methodBox">
                                <div className="favorite">
                                    <Favorite />
                                </div>
                                <img className="methodBoxImg" src={chemexImg} />
                                <h3>Chemex</h3>
                                <p>Drip</p>
                                <p>Medium Grind</p>
                                <p>2-3 min</p>
                                <Link className="method_link" to="/Chemex">Brew Chemex</Link>
                            </div>
                            <div className="methodBox">
                                <div className="favorite">
                                    <Favorite />
                                </div>
                                <img className="methodBoxImg" src={aeroPressImg} />
                                <h3>AeroPress</h3>
                                <p>Pressure</p>
                                <p>Fine Grind</p>
                                <p>2-4 min</p>
                                <Link className="method_link" to="/AeroPress">Brew AeroPress</Link>
                            </div>
                            <div className="methodBox">
                                <div className="favorite">
                                    <Favorite />
                                </div>
                                <img className="methodBoxImg" src={v60Img} />
                                <h3>v60</h3>
                                <p>Drip</p>
                                <p>Medium Grind</p>
                                <p>2-3 min</p>
                                <Link className="method_link" to="/V60">Brew v60</Link>
                            </div>
                            <div className="methodBox">
                                <div className="favorite">
                                    <Favorite />
                                </div>
                                <img className="methodBoxImg" src={turkishImg} />
                                <h3>Turkish Coffee</h3>
                                <p>Drip</p>
                                <p>Medium Grind</p>
                                <p>2-4 min</p>
                                <Link className="method_link" to="/Turkish">Brew Turkish</Link>
                            </div>
                            <div className="methodBox">
                                <div className="favorite">
                                    <Favorite />
                                </div>
                                <img className="methodBoxImg" src={espressoImg} />
                                <h3>Espresso</h3>
                                <p>Pressure</p>
                                <p>fine Grind</p>
                                <p>20-30 sec</p>
                                <Link className="method_link" to="/Espresso">Brew Espresso</Link>
                            </div>
                            <div className="methodBox">
                                <div className="favorite">
                                    <Favorite />
                                </div>
                                <img className="methodBoxImg" src={coldBrewImg} />
                                <h3>Cold Brew</h3>
                                <p>Steep</p>
                                <p>medium Grind</p>
                                <p>12-24 h</p>
                                <Link className="method_link" to="/ColdBrew">Cool Brew</Link>
                            </div>
                            <div className="methodBox">
                                <div className="favorite">
                                    <Favorite />
                                </div>
                                <img className="methodBoxImg" src={frenchPressImg} />
                                <h3>FrenchPress</h3>
                                <p>Steep</p>
                                <p>Coarse Grind</p>
                                <p>3-5 min</p>
                                <Link className="method_link" to="/FrenchPress">Brew FrenchPress</Link>
                            </div>
                            <div className="methodBox">
                                <div className="favorite">
                                    <Favorite />
                                </div>
                                <img className="methodBoxImg" src={MokaPotImg} />
                                <h3>Moka Pot</h3>
                                <p>Pressure</p>
                                <p>fine Grind</p>
                                <p>2 min</p>
                                <Link className="method_link" to="/MokaPot">Brew Moka Pot</Link>
                            </div>
                        </div>  
                </div>
            </div>

        )
    }
}

export default Methods; 
