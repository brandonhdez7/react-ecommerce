import React,{Component} from 'react'
import ProfileTab from './ProfileTab';
import MethodTab from './MethodTab'
import ShopsTab from './ShopsTab';
import BillingTab from './BillingTab'

class ProfilePanel extends Component {
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
                <button className="panelButton" onClick={this.toggle.bind(this, 1)}>Profile</button>
                <button className="panelButton" onClick={this.toggle.bind(this, 2)}>Methods</button>
                <button className="panelButton" onClick={this.toggle.bind(this, 3)}>Places</button>
                <button className="panelButton" onClick={this.toggle.bind(this, 4)}>billing</button>
            </div>
            <div className="panelInfo">
                <div className={`collapsible ${this.state.current === 1 ? 'open': ''}`}>
                    <ProfileTab />
                </div>
                <div className={`collapsible ${this.state.current === 2 ? 'open ': ''}`}>
                    <MethodTab />
                </div>
                <div className={`collapsible ${this.state.current === 3 ? 'open ': ''}`}>
                   <ShopsTab />
                </div>
                <div className={`collapsible ${this.state.current === 4 ? 'open ': ''}`}>
                    <BillingTab />
                </div>
            </div>
        </div>
      );
    }
  }

  export default ProfilePanel;