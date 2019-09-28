import React,{Component} from 'react'
import jwt_decode from 'jwt-decode';
import ProfileImage from './ProfileImg';
import {register} from '../UserFunctions'

class ProfileTab extends Component {
    constructor(props){
        super(props)
        this.state ={
                name: '',
                email: '',
                password: '',
                errors: {}
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
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        register(user).then(res => {
            this.props.history.push(`/profile`)
        })
    }

    componentDidMount(){
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            name: decoded.name,
            email: decoded.email,
            password: decodeURI.password

        })
    }
    
    render() {
      return (
        <div className="tabs"> 
            <div className="profileForm">
                <div className="profileTitle">
                    <h1>Basic Info</h1>
                </div>
                <div className="ProfileInfo">
                    <div className="profile-image1"> 
                        <ProfileImage />
                        <h3>{this.state.name}</h3>
                    </div>
                    <form noValidate onSubmit={this.onSubmit} className="profile-form">
                        <label className="label">
                            Name:
                            <input className="profileInput" name="name" type="text" value={this.state.name} onChange={this.onChange} placeholder={this.state.name}/>
                        </label>
                        <label className="label">
                            Email:
                            <input className="profileInput" name="email" type="email" value={this.state.email} onChange={this.onChange} placeholder={this.state.email} />
                        </label >
                        <label className="label">
                            Password:
                            <input className="profileInput" name="password" type="password" value={this.state.password} onChange={this.onChange} placeholder={this.state.password}/>
                        </label>
                        <label className="label">
                            Favorite Coffee Shop:
                            <input className="profileInput" type="text" name="coffeeShop"/>
                        </label>
                        <label className="label">
                            Favorite coffee Drink:
                            <input className="profileInput" type='text' name="favoriteDrink"/>
                        </label> 
                        <div>
                            <input className="contact_button" type="submit" value="save" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
      );
    }
  }

  export default ProfileTab;