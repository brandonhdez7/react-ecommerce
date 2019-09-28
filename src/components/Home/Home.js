import React, { Component } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import SlideDrawer from '../SlideDrawer/SlideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import barista from '../../Images/barista.png';
import styled from 'styled-components';
import Slider from 'react-slick';
import './Home.scss';
import {Link} from 'react-router-dom'
import ChemexImg from '../../Images/chemex1.png'
import MokaPotImg from '../../Images/moka.png'
import FrenchPressImg from '../../Images/frenchpress1.png'
import TurkishImg from '../../Images/turkish1.png'
import AeroPressImg from '../../Images/aeropress (1).png'
import Types from './Types/Types';
import ProductsList from '../Products/ProductsList'


const Wrapper = styled.div`
    width: 70%;
`
class Home extends Component{
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
        let settings = {
            centerMode: true,
            centerPadding: '40px',
            arrows: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true,
            responsive: [
              {
                breakpoint: 1024,
                settings: { 
                    centerMode: true,
                    centerPadding: '20px',
                    arrows: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    dots: true,
                 }
              },
              {
                breakpoint: 768,
                settings: { 
                    centerMode: true,
                    centerPadding: '20px',
                    arrows: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    dots: true,
                 }
              },
              {
                breakpoint: 480,
                settings: { 
                    centerMode: true,
                    centerPadding: '20px',
                    arrows: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    dots: true,
                 }
              },
            ]
          }; 


        let backdrop;
        if(this.state.slideDrawerOpen){
            backdrop = < Backdrop click={this.backdropClickHandler} />;
        }

        return(
            <div className="page">
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SlideDrawer show={this.state.slideDrawerOpen}/> 
                {backdrop}
                <div className="homeMain">
                    {/* < DarkModeToggle /> */}
                    <div className="banner">
                        <div className="banner_left">
                            <h3>We craft beautiful coffee, create purposeful work, 
                                and cultivate flourishing communities.</h3>

                            <h5>We believe coffee is more than just careful farming, 
                                intentional processing and expert roasting. Coffee 
                                is an opportunity to do good, and doing good means 
                                we get to help people and champion dignity.</h5>

                            <p>We aim to affect whole communities for positive change,
                            and pour redeeming goodness into every cup.</p>
                        </div>
                        <div className="banner_right">
                            <img src={barista} />
                        </div>
                    </div>
                    < ProductsList />
                    <Types />
                    <div className="store_description">
                    <div className="store_row1">
                    <h2>Lets Take A Coffee Break</h2>
                    <p>There is a wide acceptance that manual brewing 
                        methods allow for better quality control and a 
                        superior coffee experience. For many, it’s more 
                        fun and fascinating to have a hands-on approach 
                        with their brewing process rather than hitting a 
                        ‘brew’ button on a machine.</p>
                    <Wrapper>
                    <Slider {...settings}>
                        <div > 
                            <div className="store_box">
                                <img src={ChemexImg} />
                                <p>Coffee Maker</p>
                                <p>Chemex</p>
                               <Link className="method_link" to="/">Brew Chemex</Link>
                            </div>
                        </div>
                        <div>
                            <div className="store_box">
                                <img src={FrenchPressImg} />
                                <p>Coffee Maker</p>
                                <p>FrenchPress</p>
                                <Link className="method_link" to="/">Brew FrenchPress</Link>
                            </div>
                        </div>
                        <div >
                            <div className="store_box">
                                <img src={MokaPotImg} />
                                <p>Coffee Maker</p>
                                <p>Moka Pot</p>
                                <Link className="method_link" to="/">Brew Moka Pot</Link>
                            </div>
                        </div>
                        <div>
                            <div className="store_box">
                                <img src={AeroPressImg} />
                                <p>Coffee Maker</p>
                                <p>v60</p>
                                <Link className="method_link" to="/">Brew v60</Link>
                            </div>
                        </div>
                        <div>
                            <div className="store_box">
                                <img src={TurkishImg} />
                                <p>Coffee Maker</p>
                                <p>Espresso</p>
                                <Link className="method_link" to="/">Brew Espresso</Link>
                            </div>
                        </div>
                    </Slider>
                    </Wrapper>
                    </div>
                    <div className="store_row2">
                        <Link className="method_link" to="/">View All</Link>
                    </div>
                    </div>

                    {/*<Store/>
                    
                    <form className="homeSearchForm">
                        <img src={coffeeShop} />
                        <label className="homeSearch">
                            <h2>Find your next favorite coffee shop nearest to you or any location in the world</h2>
                            <input placeholder="Find Coffee Shop" type="text" required />
                            <img className="label-text1" src={search} alt="" />
                        </label>
                    </form>
                    <Description /> */}
                </div>
            </div>
        );
    }
}

export default Home;