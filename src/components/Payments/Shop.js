import React, {Component} from 'react'
import {CardElement, injectStripe } from 'react-stripe-elements'
import PropTypes from 'prop-types'
import axios from 'axios'
import Toolbar from '../Toolbar/Toolbar'
// import  {BrowserRouter as Router, Link } from 'react-router-dom'
import SlideDrawer from '../SlideDrawer/SlideDrawer';
import Backdrop from '../Backdrop/Backdrop'
// import qs from 'query-string-object'
import sweater from '../../Images/65ad411c_2a6b.png'
import hat from '../../Images/db34425bef206108a68ebf71cf97cfe1.png'
import mug from '../../Images/MUG715-adventure-begins-mug (1).png'

const prices = {
    sweater: 2000,
    hat: 1200,
    mug: 600
  }

const skus = {
    sweater: 1,
    hat: 2,
    mug: 3
} 

// const stripeAuthHeader = {
//   'Content-Type': 'application/x-www-form-urlencoded',
//   'Authorization': `charges rk_test_I8JQcGyVRKhDjMEscjoWb3tW00i5H2NiLT`
// }

class Shop extends Component{
    constructor(props) {
        super(props)
        this.state = {
          slideDrawerOpen: false,
          fetching: false,
          cart: {
            sweater: 0,
            hat: 0,
            mug: 0,
          },
          coupon: '',
          email: '',
          name: '',
          address : {
          line1: '',
          city: '',
          state: '',
          country: '',
          postal_code: ''
        }
      }
      this.handleCartChange = this.handleCartChange.bind(this)
      this.handleCartReset = this.handleCartReset.bind(this)
      this.handleAddressChange = this.handleAddressChange.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      }


      drawerToggleClickHandler = () => {
        this.setState((PrevState) => {
            return {slideDrawerOpen: !PrevState.slideDrawerOpen}
        })
      }

      backdropClickHandler = () => {
        this.setState({slideDrawerOpen: false});
      }



      handleChange(evt) {
        evt.preventDefault()
        this.setState({[evt.target.name]: evt.target.value})
      }
    
      handleAddressChange(evt) {
        evt.preventDefault()
        const address = this.state.address
        address[evt.target.name] = evt.target.value
        this.setState({address})
      }


      handleCartChange(evt) {
        evt.preventDefault()
        const cart = this.state.cart
        cart[evt.target.name]+= parseInt(evt.target.value)
        this.setState({cart})
      }
    
      handleCartReset(evt) {
        evt.preventDefault()
        this.setState({cart:{sweater: 0, hat: 0, mug: 0}})
      }
    

      handleSubmit(evt) {
        evt.preventDefault()
        this.setState({fetching: true})
        const state = this.state
        const cart = state.cart
        
        this.props.stripe.createToken({name: state.name}).then(({token}) => {
          // Create order
          const order = {
            currency: 'usd',
            items: Object.keys(cart).filter((name) => cart[name] > 0 ? true : false).map(name => {
              return {
                type: 'sku',
                parent: skus[name],
                quantity: cart[name]
              }
            }),
            email: state.email,
            shipping: {
              name: state.name,
              address: state.address
            }
          }
          // Add coupon if given
          if (state.coupon) {
            order.coupon = state.coupon
          }
          // Send order
          axios.post(`http://localhost:3000/api/shop/order`, {order, source: token.id})
          .then(() => {
            this.setState({fetching: false})
            alert(`Thank you for your purchase!`)
          })
          .catch(error => {
            this.setState({fetching: false})
            console.log(error)
          })
        }).catch(error => {
          this.setState({fetching: false})
          console.log(error)
        })
      }
      

      render () {
        let backdrop;
        if(this.state.slideDrawerOpen){
            backdrop = < Backdrop click={this.backdropClickHandler} />;
        }

        const state = this.state
        const fetching = state.fetching
        const cart = state.cart
        const address = state.address
        const submittable = (cart.sweater !== 0 || cart.hat !== 0 || cart.mug !== 0 ) && state.email && state.name && address.line1 && address.city && address.state && address.country && address.postal_code
        return (
          <div className="page">
              <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
              <SlideDrawer show={this.state.slideDrawerOpen}/>
              {backdrop}
              <div className="checkoutPage">
                <form onSubmit={this.handleSubmit} className="checkout_left">
                    <div><h3>Name:</h3> <input type="text" name="name" onChange={this.handleChange}/></div>
                    <div><h3>Email:</h3> <input  type="text" name="email" onChange={this.handleChange}/></div>
                    <div><h3>Address Line:</h3> <input  type="text" name="line1" onChange={this.handleAddressChange}/></div>
                    <div><h3>City:</h3> <input  type="text" name="city" onChange={this.handleAddressChange}/></div>
                    <div><h3>State:</h3> <input  type="text" name="state" onChange={this.handleAddressChange}/></div>
                    <div><h3>Country:</h3> <input  type="text" name="country" onChange={this.handleAddressChange}/></div>
                    <div><h3>Postal Code:</h3> <input  type="text" name="postal_code" onChange={this.handleAddressChange}/></div>
                    <div><h3>Coupon Code:</h3> <input  type="text" name="coupon" onChange={this.handleChange}/></div>

                    <div className="cardInput">
                        <CardElement style={{base: {fontSize: '18px'}}}/>
                    </div>
                    {!fetching
                    ? <button className="purchase" type="submit" disabled={!submittable}>Purchase</button>
                    : 'Purchasing...'}
                    Price: {((cart.sweater * prices.sweater + cart.hat * prices.hat + cart.mug * prices.mug) / 100).toLocaleString('en-US', {style: 'currency', currency: 'usd'})}
                </form>

                <form onSubmit={this.handleSubmit} className="checkout_right">
                    <div className="checkout_right_box">
                        <img src={sweater} />
                        <h3>Sweater</h3> {(prices.sweater / 100).toLocaleString('en-US', {style: 'currency', currency: 'usd'})}:
                        <div>
                            <button className="quantity" name="sweater" value={1} onClick={this.handleCartChange}>+</button>
                            <button  className="quantity"name="sweater" value={-1} onClick={this.handleCartChange} disabled={cart.sweater <= 0}>-</button>
                            {cart.sweater}
                        </div>
                    </div>

                    <div className="checkout_right_box">
                        <img src={hat} />
                        <h3>Hat</h3> {(prices.hat / 100).toLocaleString('en-US', {style: 'currency', currency: 'usd'})}:
                        <div>
                            <button className="quantity" name="hat" value={1} onClick={this.handleCartChange}>+</button>
                            <button className="quantity" name="hat" value={-1} onClick={this.handleCartChange} disabled={cart.hat <= 0}>-</button>
                            {cart.hat}
                        </div>
                    </div>

                    <div className="checkout_right_box">
                        <img src={mug} />
                        <h3>Mug</h3> {(prices.mug / 100).toLocaleString('en-US', {style: 'currency', currency: 'usd'})}:
                        <div>
                            <button className="quantity" name="mug" value={1} onClick={this.handleCartChange}>+</button>
                            <button className="quantity" name="mug" value={-1} onClick={this.handleCartChange} disabled={cart.mug <= 0}>-</button>
                            {cart.mug}
                        </div>
                    </div>
                    <button className="purchase" onClick={this.handleCartReset}>Reset Cart</button>

                </form>
              </div>
          </div>
        )
    }
}

Shop.propTypes = {
  stripe: PropTypes.shape({
    createToken: PropTypes.func.isRequired
  }).isRequired
}


export default injectStripe(Shop)
    