import React,{Component} from 'react'
import './Panels.scss'

class ColdBrewPanel extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        current: 0
      };
    }
    
    toggle(index) {
      this.setState({
        current: index
      })
    }
    
    render() {
      return (
        <div className="panel">
            <div className="panelButtons">
                <button className="panelButton" onClick={this.toggle.bind(this, 1)}>6 cups</button>
                <button className="panelButton" onClick={this.toggle.bind(this, 2)}>8 cups</button>
                <button className="panelButton" onClick={this.toggle.bind(this, 3)}>12 cups</button>
            </div>
            <div className="panelInfo">
                <div className={`collapsible ${this.state.current === 1 ? 'open': ''}`}>
                    <ul>
                        <li>Hario V60 dripper</li>
                        <li>V60 paper filter</li>
                        <li>21 grams (3-4 tbsp) Craft Coffee beans</li>
                        <li>300 mL water, plus additional for rinsing</li>
                        <li>Pouring Kettle (gooseneck preferred)</li>
                        <li>Burr grinder (recommended)</li>
                        <li>Scale (recommended)</li>
                    </ul>
                </div>
                <div className={`collapsible ${this.state.current === 2 ? 'open ': ''}`}>
                    <ul>
                        <li>Hario V60 dripper</li>
                        <li>V60 paper filter</li>
                        <li>21 grams (3-4 tbsp) Craft Coffee beans</li>
                        <li>300 mL water, plus additional for rinsing</li>
                        <li>Pouring Kettle (gooseneck preferred)</li>
                        <li>Burr grinder (recommended)</li>
                        <li>Scale (recommended)</li>
                    </ul>
                </div>
                <div className={`collapsible ${this.state.current === 3 ? 'open ': ''}`}>
                    <ul>
                        <li>Hario V60 dripper</li>
                        <li>V60 paper filter</li>
                        <li>21 grams (3-4 tbsp) Craft Coffee beans</li>
                        <li>300 mL water, plus additional for rinsing</li>
                        <li>Pouring Kettle (gooseneck preferred)</li>
                        <li>Burr grinder (recommended)</li>
                        <li>Scale (recommended)</li>
                    </ul>
                </div>
            </div>
        </div>
      );
    }
  }

  export default ColdBrewPanel;