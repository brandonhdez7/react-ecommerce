import React, {Component} from 'react';
import Toolbar from './Toolbar/Toolbar'
import  {BrowserRouter as Router, Link } from 'react-router-dom'
import SlideDrawer from './SlideDrawer/SlideDrawer';
import Backdrop from './Backdrop/Backdrop'
import { login } from './UserFunctions'
import logo from '../Images/Origami_bird-512.png'
// import userIcon from '../Images/images.png'
import emailIcon from '../Images/584856a0e0bb315b0f7675a9.png'
import passwordIcon from '../Images/locked-outline.png'

class Login extends Component{
    constructor(){
        super()
        this.state = {
            slideDrawerOpen: false,
            email: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
                this.props.history.push(`/profile`)
        })
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
            <div className="loginPage">
                {/* <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/> */}
                <SlideDrawer show={this.state.slideDrawerOpen}/>
                {backdrop}
                <div className="linkHomepage">
                    <Link to="/" className="backHomepage"><i class="fa fa-arrow-left"></i> Go Back To Homepage</Link>
                </div>
                <div className="loginForm">
                <img className="loginImage" src={logo} alt=""/>
                    <form noValidate onSubmit={this.onSubmit}>
                        <label>
                            <input name="email" type="email" value={this.state.email} onChange={this.onChange} required />
                            <img className="label-text" src={emailIcon} alt=""/>
                        </label>
                        <label>
                            <input name="password" type="password" value={this.state.password} onChange={this.onChange} required />
                            <img className="label-text" src={passwordIcon} alt="" />
                        </label>
                            <button type="submit">Login</button>
                    </form>
                        <Link className="links1" to="/#">Forgot Password?</Link>
                        <h3>Don't have an account? <Link to="/Register" className="links">SignUp</Link> </h3>
                </div>
            </div>
        )
    }
}
export default Login;