import React,{Component} from 'react'
import './Panels.scss'

class TurkishPanel extends Component {
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
                        <li>Add water to the cezve (ibrik), about 50 milliliters (1.7 oz) per cup of coffee desired</li>
                        <li>Add sugar to taste, stirring to blend it</li>
                        <li>Bring to a boil, remove from heat and add a teaspoon of coffee per cup</li>
                        <li>Boil coffee.</li>
                        <li>Remove the cevze from heat immediately after bringing to a first boil, discarding the accumulated foam, and mix well.</li>
                        <li>The coffee is boiled twice in succession, taking care to remove the cezve from the heat between one boiling and the next. The foam can either be discarded or kept before stirring it well</li>
                        <li>Allow remaining powder to settle before serving.  You can add a tablespoon of cold water to the pot after boiling twice to accelerate the process.</li>
                    </ul>
                </div>
                <div className={`collapsible ${this.state.current === 2 ? 'open ': ''}`}>
                    <ul>
                        <li>Add water to the cezve (ibrik), about 50 milliliters (1.7 oz) per cup of coffee desired</li>
                        <li>Add sugar to taste, stirring to blend it</li>
                        <li>Bring to a boil, remove from heat and add a teaspoon of coffee per cup</li>
                        <li>Boil coffee.</li>
                        <li>Remove the cevze from heat immediately after bringing to a first boil, discarding the accumulated foam, and mix well.</li>
                        <li>The coffee is boiled twice in succession, taking care to remove the cezve from the heat between one boiling and the next. The foam can either be discarded or kept before stirring it well</li>
                        <li>Allow remaining powder to settle before serving.  You can add a tablespoon of cold water to the pot after boiling twice to accelerate the process.</li>
                    </ul>
                </div>
                <div className={`collapsible ${this.state.current === 3 ? 'open ': ''}`}>
                    <ul>
                        <li>Add water to the cezve (ibrik), about 50 milliliters (1.7 oz) per cup of coffee desired</li>
                        <li>Add sugar to taste, stirring to blend it</li>
                        <li>Bring to a boil, remove from heat and add a teaspoon of coffee per cup</li>
                        <li>Boil coffee.</li>
                        <li>Remove the cevze from heat immediately after bringing to a first boil, discarding the accumulated foam, and mix well.</li>
                        <li>The coffee is boiled twice in succession, taking care to remove the cezve from the heat between one boiling and the next. The foam can either be discarded or kept before stirring it well</li>
                        <li>Allow remaining powder to settle before serving.  You can add a tablespoon of cold water to the pot after boiling twice to accelerate the process.</li>
                    </ul>
                </div>
            </div>
        </div>
      );
    }
  }

  export default TurkishPanel;