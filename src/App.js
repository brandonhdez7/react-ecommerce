import React, { Component } from 'react';
// import './styles.scss';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile/Profile'
import Chemex from './components/Methods/Chemex';
import Methods from './components/Methods/Methods'
import AeroPress from './components/Methods/AeroPress'
import V60 from './components/Methods/V60'
import FrenchPress from './components/Methods/FrenchPress'
import Turkish from './components/Methods/Turkish'
import Espresso from './components/Methods/Espresso'
import MokaPot from './components/Methods/MokaPot'
import ColdBrew from './components/Methods/ColdBrew'
import ChemexTimer from './components/Methods/Timer/ChemexTimer'
import AeroPressTimer from './components/Methods/Timer/AeroPressTimer'
import V60Timer from './components/Methods/Timer/V60Timer'
import EspressoTimer from './components/Methods/Timer/EspressoTimer'
// import Payments from './components/Payments/Payments'
import Sweater from './components/Products/Sweater'
import Cart from './components/Products/Cart'
import Recipe from './components/Payments/Recipe';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/Login" component={Login}></Route>
                    <Route exact path="/Register" component={Register}></Route>
                    <Route exact path="/Profile" component={Profile}></Route>
                    <Route exact path="/About" component={About}></Route>
                    <Route exact path="/Contact" component={Contact}></Route>
                    <Route exact path="/Chemex" component={Chemex}></Route>
                    <Route exact path="/Methods" component={Methods}></Route>
                    <Route exact path="/AeroPress" component={AeroPress}></Route>
                    <Route exact path="/V60" component={V60}></Route>
                    <Route exact path="/FrenchPress" component={FrenchPress}></Route>
                    <Route exact path="/Turkish" component={Turkish}></Route>
                    <Route exact path="/Espresso" component={Espresso}></Route>
                    <Route exact path="/MokaPot" component={MokaPot}></Route>
                    <Route exact path="/ColdBrew" component={ColdBrew}></Route>
                    <Route exact path="/ChemexTimer" component={ChemexTimer}></Route>
                    <Route exact path="/AeroPressTimer" component={AeroPressTimer}></Route>
                    <Route exact path="/V60Timer" component={V60Timer}></Route>
                    <Route exact path="/EspressoTimer" component={EspressoTimer}></Route>
                    {/* <Route exact path="/Payments" component={Payments}></Route> */}
                    <Route exact path="/Sweater" component={Sweater}></Route>
                    <Route exact path="/Cart" component={Cart}></Route>
                    <Route exact path="/Recipe" component={Recipe}></Route>
                </div>   
            </Router>
        );
    }
}

export default App;

