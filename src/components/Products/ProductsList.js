import React, { Component } from 'react';
import {BrowserRouter as Router, Link } from 'react-router-dom'
import Shirt from '../../Images/65ad411c_2a6b.png'
import Cap from '../../Images/db34425bef206108a68ebf71cf97cfe1.png'
import Mug from '../../Images/MUG715-adventure-begins-mug (1).png'
import './Products.scss'

    class ProductList extends Component{
    
    render(){
            return(
            <div className="productsContainer">
                <h2>Black Bird Merch</h2>
                <div className="productRow">
                    <Link to="/Sweater" className="product" >
                        <img src={Shirt} />
                        <i>Sweat Shirt</i>
                        <i>$20.00</i>            
                    </Link>
                    <Link to="/Payments" className='product'>
                        <img src={Cap} />
                        <i>Baseball Cap</i>
                        <i>$10.00</i>                 
                    </Link>
                    <Link to="/Payments" className='product'>
                        <img src={Mug} />
                        <i>Ceramic Mug</i>
                        <i>$7.00</i>
                    </Link>
                </div>
            </div>
        )
    }
}
        

export default ProductList

