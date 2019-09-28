import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import './SlideDrawer.scss'
import cartImg from '../../Images/images (1).png'

class Auth extends Component{
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }
    

    render(){
       const loginRegLink = (
           <ul className="navbar-nav">
                <li className="nav=item">
                    <Link to="/login" className="nav-link">
                    Login
                    </Link>
                </li>
                <li className="nav=item">
                    <Link to="/register" className="nav-link1">
                    Register
                    </Link>
                </li>
           </ul>
       )
       const userLink = (
            <ul className="navbar-nav">
                {/* <div className="authLink"> */}
                    <li className="nav=item">
                        <Link to="/profile" className="nav-link">
                            User
                        </Link>
                    </li>
                    <li className="nav=item">
                        <Link className="nav-link1" to="/" onClick={this.logOut.bind(this)}>
                            Logout
                        </Link>
                    </li>
                {/* </div> */}
            </ul>
       )
       return (
           <nav>
               <div className="navigation">
                   <ul>
                       <li className="nav-link">
                           <Link className="navbar_links" to="/">
                            Home
                           </Link>
                           <Link className="navbar_links" to="/About">
                            About
                           </Link>
                           <Link className="navbar_links" to="/Methods">
                            Methods
                           </Link>
                           {/* <Link className="navbar_links" to="/GoogleMaps">
                            Shops
                           </Link> */}
                       </li>
                   </ul>
                <div>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
                    <Link to="/Cart" className="cartButton"><img className="cartImg" src={cartImg}/></Link>
               </div>
           </nav>
       )
    }

}
export default withRouter(Auth);