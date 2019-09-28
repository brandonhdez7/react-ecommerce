import React, {Component} from 'react';
// import 'whatwg-fetch';
import {StripeProvider,Elements} from 'react-stripe-elements'
import Shop from './Shop'
import './Payments.scss'

class Payments extends Component{
    render(){
        return(
            <div>
                <StripeProvider apiKey="pk_test_aKXRMP5TqkSAJGoKHG8Wa7lj00RAaY2s9a">
                    <Elements>
                        <Shop />
                    </Elements>
                </StripeProvider>
                
            </div>
        )
    }
}

export default Payments

