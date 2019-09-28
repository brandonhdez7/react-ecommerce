import React, {Component} from 'react';
import Toolbar from '../../Toolbar/Toolbar'
// import  {BrowserRouter as Router, Link } from 'react-router-dom'
import SlideDrawer from '../../SlideDrawer/SlideDrawer';
import Backdrop from '../../Backdrop/Backdrop'
import {Link} from 'react-router-dom'
import './Timer.scss'
import AeroPressTime from '../../../Images/aeropress_icon.png'

class AeroPressTimer extends Component{
   constructor(props) {
        super(props);
        this.state = {
            slideDrawerOpen: false,
            timerStarted: false,
            timerStopped: true,
            hours: 0,
            minutes: 0,
            seconds: 0,
            captures: []
        }
   }


    handleTimerStart(e) {
        e.preventDefault();

        if(this.state.timerStopped) {
          this.timer = setInterval(() => {
              this.setState({timerStarted: true, timerStopped: false});
              if(this.state.timerStarted) {
                if(this.state.seconds >= 60) {
                  this.setState((prevState) => ({ minutes: prevState.minutes + 1, seconds: 0}));
                }
                if(this.state.minutes >= 60) {
                  this.setState((prevState) => ({ hours: prevState.hours + 1, minutes: 0, seconds: 0}));
      
                }
                this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
              }
      
          }, 1000);
        }
    }

    handleTimerStop() {
        this.setState({timerStarted: false, timerStopped: true});
        clearInterval(this.timer);
    }

    handleTimerReset() {
        this.setState({
          timerStarted: false,
          timerStopped: true,
          seconds: 0,
          minutes: 0,
          hours: 0,
          captures: []
        });
        clearInterval(this.timer);
    }


    handleTimerCapture() {
        this.setState(prevState => ({
          captures: [
            ...prevState.captures,
            this.state.hours + ":" + this.state.minutes + ":" + this.state.seconds
          ]
        }));
    }
    
    



    drawerToggleClickHandler = () => {
        this.setState((PrevState) => {
            return {slideDrawerOpen: !PrevState.slideDrawerOpen}
        })
    }

    backdropClickHandler = () => {
        this.setState({slideDrawerOpen: false});
    }

    render(props){
        let backdrop;
        if(this.state.slideDrawerOpen){
            backdrop = < Backdrop click={this.backdropClickHandler} />;
        }

        return(
            <div className="homePage">
                {/* <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SlideDrawer show={this.state.slideDrawerOpen}/>
                {backdrop} */}
                <div className="timerPage">
                <Link to="/Methods" className="backMethods"><i class="fa fa-arrow-left"></i> Go Back To Methods</Link>
                    <div className="container">
                        <img src={AeroPressTime} />
                    <h2 className="text-center">Timer</h2>
                    <div className="timer-container">
                    <div className="timer-captures">
                        { this.state.captures.map((time, index) => {
                            return <code>{ "Capture " + ( index + 1 ) + " -- " + time }</code>
                        })}
                    </div>
                        <div className="current-timer">
                            {this.state.hours + ":" + this.state.minutes + ":" + this.state.seconds}
                        </div>
                        <div className="timer-controls">
                        <button className="btn btn-success" onClick={this.handleTimerStart.bind(this)}>Start 
                        Timer</button>
                        <button className="btn btn-alert" onClick={this.handleTimerStop.bind(this)}>Stop 
                        Timer</button>
                        <button className="btn btn-info" onClick={this.handleTimerCapture.bind(this)}>Capture Time</button>
                        <button className="btn btn-danger" onClick={this.handleTimerReset.bind(this)}>Reset!</button>
                        </div>
                    </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default AeroPressTimer; 