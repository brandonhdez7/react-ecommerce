import React, {Component} from 'react';
import Toolbar from '../../Toolbar/Toolbar'
// import  {BrowserRouter as Router, Link } from 'react-router-dom'
import SlideDrawer from '../../SlideDrawer/SlideDrawer';
import Backdrop from '../../Backdrop/Backdrop'
import {Link} from 'react-router-dom'
import './Timer.scss'
import kemex1 from '../../../Images/chemex_icon.png'
import styled from 'styled-components';
import Slider from 'react-slick';

const Wrapper = styled.div`
    width: 100%;
`

class ChemexTimer extends Component{
   constructor(props) {
        super(props);
        this.state = {
            current: 0, 
            slideDrawerOpen: false,
            timerStarted: false,
            timerStopped: true,
            hours: 0,
            minutes: 0,
            seconds: 0,
            captures: []
        }
   }

   toggle(index) {
    this.setState({
      current: index
    })
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
        let settings = {
            centerMode: true,
            centerPadding: '0px',
            
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
              {
                breakpoint: 1280,
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

        return(
            <div className="homePage">
                {/* <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SlideDrawer show={this.state.slideDrawerOpen}/>
                {backdrop} */}
                <div className="timerPage">
                <Link to="/Methods" className="backMethods"><i class="fa fa-arrow-left"></i> Go Back To Methods</Link>
                    <div className="container">
                        <div className='timerDetails'>
                            <div className="timerDetails1">
                                <h2>steps</h2>
                                <Wrapper>
                                <Slider {...settings}>
                                    <div className="timerSliders">                   
                                        <i>Prep:<br/>
                                            Heat your water to 205 degrees by bringing it to a 
                                            boil and letting it sit for 30 seconds.</i>
                                        <i>Unfold the Chemex filter and insert in the 
                                            top of the brewer, making sure the 3-layered side of 
                                            the filter is lined up with the pouring spout.</i>
                                            <br/>
                                            <br/>
                                        <i>Pour hot water around the inside of the filter for 
                                            about 5 seconds. Keeping the filter in place, discard 
                                            the rinse water. Rinsing the filter helps seal it inside 
                                            the dripper and also gets rid of any papery taste.</i>
                                        <i>Weigh out your whole bean coffee and grind it on a 
                                            setting slightly coarser than medium.</i>
                                            <br/>
                                            <br/>
                                        <i>Pour your ground coffee into the filter and gently 
                                            shake the brewer back and forth to settle the grounds</i>
                                    </div>
                                    <div className="timerSliders">
                                        <i>Time: 0:00-0:45<br/>
                                            Start your timer and slowly pour just enough water over 
                                            the grounds to wet them evenly (about 70 grams). Let it 
                                            sit until your timer reads 45 seconds. This step is called 
                                            the bloom. Hot water forces the coffee to release trapped gases, 
                                            leading to expansion of the coffee bed, bubbling at the surface, 
                                            and wonderful aromas for you to enjoy.</i>
                                    </div>
                                    <div className="timerSliders">
                                        <i>Time: 0:45-2:45<br/>
                                            Begin pouring continuously in a spiraling pattern. Try to avoid 
                                            pouring directly in the center or around the edges of the filter.
                                             If the water level nears the rim of the Chemex, pause for a moment 
                                             to let it drain before continuing. Stop pouring once your timer reads
                                              2:45 or your scale reads 600 grams.</i>
                                    </div>
                                    <div className="timerSliders">
                                        <i>Time: 2:45-3:30<br/>
                                            Allow all the water to drain through the filter. Remove the filter from 
                                            the dripper and discard the grounds. If your final time was longer than
                                             4:00, your grind was probably too fine. If your final time was shorter
                                              than 3:00, your grind was probably too coarse. Make a small adjustment 
                                              to the grind next time you brew - practice makes perfect!</i>
                                    </div>
                                </Slider>
                                </Wrapper>
                            </div>
                            <div className="timerDetails2">
                                <img src={kemex1} />
                            </div>
                            <div className="timerDetails3">
                                <div className="panel">
                                    <div className="panelButtons">
                                        <button className="panelButton" onClick={this.toggle.bind(this, 1)}>4 cups</button>
                                        <button className="panelButton" onClick={this.toggle.bind(this, 2)}>6 cups</button>
                                        <button className="panelButton" onClick={this.toggle.bind(this, 3)}>8 cups</button>
                                    </div>
                                    <div className="panelInfo">
                                        <div className={`collapsible ${this.state.current === 1 ? 'open ': ''}`}>
                                            <ul>
                                                <li>Chemex 4-cup brewer</li>
                                                <li>Square Chemex filter</li>
                                                <li>32 grams (5-7 tbsp) Craft Coffee beans</li>
                                                <li>600 mL water, plus additional for rinsing</li>
                                                <li>Pouring Kettle (gooseneck preferred)</li>
                                                <li>Burr grinder (recommended)</li>
                                                <li>Scale (recommended)</li>
                                            </ul>
                                        </div>
                                        <div className={`collapsible ${this.state.current === 2 ? 'open ': ''}`}>
                                            <ul>
                                                <li>Chemex 6-cup brewer</li>
                                                <li>Square Chemex filter</li>
                                                <li>50 grams (5-7 tbsp) Craft Coffee beans</li>
                                                <li>600 mL water, plus additional for rinsing</li>
                                                <li>Pouring Kettle (gooseneck preferred)</li>
                                                <li>Burr grinder (recommended)</li>
                                                <li>Scale (recommended)</li>
                                            </ul>
                                        </div>
                                        <div className={`collapsible ${this.state.current === 3 ? 'open ': ''}`}>
                                            <ul>
                                                <li>Chemex 8-cup brewer</li>
                                                <li>Square Chemex filter</li>
                                                <li>64 grams grams (5-7 tbsp) Craft Coffee beans</li>
                                                <li>600 mL water, plus additional for rinsing</li>
                                                <li>Pouring Kettle (gooseneck preferred)</li>
                                                <li>Burr grinder (recommended)</li>
                                                <li>Scale (recommended)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
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

export default ChemexTimer; 