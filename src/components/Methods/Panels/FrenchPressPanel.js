import React,{Component} from 'react'
import './Panels.scss'

class FrenchPressPanel extends Component {
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
                        <li>French press</li>
                        <li>Craft Coffee beans (17 grams (2-3 tbsp))</li>
                        <li>275 mL, plus additional for pre-heating</li>
                        <li>Stirring utensil</li>
                        <li>Pouring Kettle (gooseneck preferred)</li>
                        <li>Burr grinder (recommended)</li>
                        <li>Scale (recommended)</li>
                    </ul>
                </div>
                <div className={`collapsible ${this.state.current === 2 ? 'open ': ''}`}>
                    <ul>
                        <li>French press</li>
                        <li>Craft Coffee beans (17 grams (2-3 tbsp))</li>
                        <li>275 mL, plus additional for pre-heating</li>
                        <li>Stirring utensil</li>
                        <li>Pouring Kettle (gooseneck preferred)</li>
                        <li>Burr grinder (recommended)</li>
                        <li>Scale (recommended)</li>
                    </ul>
                </div>
                <div className={`collapsible ${this.state.current === 3 ? 'open ': ''}`}>
                    <ul>
                        <li>French press</li>
                        <li>Craft Coffee beans (17 grams (2-3 tbsp))</li>
                        <li>275 mL, plus additional for pre-heating</li>
                        <li>Stirring utensil</li>
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

  export default FrenchPressPanel;