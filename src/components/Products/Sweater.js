import React, { Component } from 'react';
import Toolbar from '../Toolbar/Toolbar'
// import  {BrowserRouter as Router, Link } from 'react-router-dom'
import SlideDrawer from '../SlideDrawer/SlideDrawer';
import Backdrop from '../Backdrop/Backdrop'
import styled from 'styled-components';
import Slider from 'react-slick';
import SweaterImg from '../../Images/65ad411c_2a6b.png'
import { connect } from 'react-redux'
import { addToCart } from '../../actions/cartActions'

const Wrapper = styled.div`
    width: 85%;    
`

class Sweater extends Component {
        state = {
          slideDrawerOpen: false,
      }
    

    handleClick = (id)=>{
        this.props.addToCart(id); 
    }


    drawerToggleClickHandler = () => {
        this.setState((PrevState) => {
            return {slideDrawerOpen: !PrevState.slideDrawerOpen}
        })
    }

    backdropClickHandler = () => {
        this.setState({slideDrawerOpen: false});
    }
 
        //   // Send order
        //   axios.post(`http://localhost:3000/api/shop/order`, {order, source: token.id})
        //   .then(() => {
        //     this.setState({fetching: false})
        //     alert(`Thank you for your purchase!`)
        //   })
        //   .catch(error => {
        //     this.setState({fetching: false})
        //     console.log(error)
        //   })
        // }).catch(error => {
        //   this.setState({fetching: false})
        //   console.log(error)


    render(){
        let settings = {
            centerMode: true,
            centerPadding: '0px',
            arrows: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            dots: true,
            autoplaySpeed: 3000,
            responsive: [
              {
                breakpoint: 1280,
                settings: { 
                    centerMode: true,
                    centerPadding: '0px',
                    dots: true,
                    arrows: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                 }
              },
              {
                breakpoint: 768,
                settings: { 
                    centerMode: true,
                    centerPadding: '0px',
                    
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                 }
              },
              {
                breakpoint: 480,
                settings: { 
                    centerMode: true,
                    centerPadding: '0px',
                    
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                 }
              },
            ]
          }; 

        let backdrop;
        if(this.state.slideDrawerOpen){
            backdrop = < Backdrop click={this.backdropClickHandler} />;
        }
        let itemList = this.props.items.map(item=>{
            return(
                <button className="productDetailsButton" onClick={()=>{this.handleClick(item.id)}}>Add To Cart</button>
            )
        })
        return (
            <div className="page">
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SlideDrawer show={this.state.slideDrawerOpen}/> 
                {backdrop}
                <div className="productPage">
                    <div className="productPage_left">
                        <h2>Black Bird Sweater</h2>
                        <Wrapper>
                            <Slider {...settings}>
                                <img className='sweaterImg' src={SweaterImg} />
                                <img className='sweaterImg' src={SweaterImg}/>
                                <img className='sweaterImg' src={SweaterImg}/>
                            </Slider>
                        </Wrapper>
                    </div>
                    <div className="productPage_right">
                        <div className="productCart">
                            <div className="productDetailsTitle">
                                <h3>BlackBird Sweater</h3>
                                <p>$20.00</p>
                            </div>
                            <div className="productDetails">
                                <p>BlackBird's first season is here! Black sleeve cotton fleece oversized 
                                   classic hooded pullover sweater. </p>
                                <p>100% cotton</p>
                                <p>season 1</p>
                                <p>--</p>
                                <p>*Ships within 2-3 days</p>
                            </div>
                            <div className="productDetailsCart">
                                <div>
                                    <p>Size</p>
                                    <select>
                                        <option value="Small">S</option>
                                        <option value="Medium">M</option>
                                        <option value="Large">L</option>
                                    </select>
                                </div>
                                <div>
                                    <div>
                                        <p>Quanity</p>
                                        <div>
                                            <button className="quantity" name="sweater">+</button>
                                            <button className="quantity" name="sweater">-</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {itemList}
                            {/* <button className="productDetailsButton" onClick={()=>{this.handleClick(items.id)}}>Add To Cart</button> */}
                        </div>
                        
                    </div>

                </div>
                
            </div>
        );
    
    }
}

const mapStateToProps = (state)=>{
    return {
        items: state.items
    }
}
const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Sweater);