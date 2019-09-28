import React,{Component} from 'react'
import './Panels.scss'

class ChemexPanel extends Component {
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
      );
    }
  }

  export default ChemexPanel;