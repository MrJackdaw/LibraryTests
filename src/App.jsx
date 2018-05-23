import React, { Component, Fragment } from 'react';
// 
import { suppress } from './utils';
// 
import { ALT_STATE } from './state';
import { updateCounterViewCount, updateAltCounterViewCount } from './state/dispatchers';
// 
import './resources/styles/reset.css';
import './resources/styles/Buttons.css';
import './resources/styles/Flex.css';
import './resources/styles/Lists.css';
import './resources/styles/Sections.css';
import './resources/styles/App.css';
// 
import CounterSection from './components/counters';
import NetworkTest from './components/NetworkTest';
import SubscribeComponent from './components/Subscriber';

const VIEWS = { STATE: "state", NETWORK: "network" }; 

class App extends Component {

  state = {
    active: VIEWS.STATE
  }

  showState = suppress(() => this.setView(VIEWS.STATE))

  showNetwork = suppress(() => this.setView(VIEWS.NETWORK))

  setView = active => this.setState(prev => ({ active }))

  render() {

    const {
      altCounterValue = 1,
      altCounterViewCount = 0,
      counterValue = 1,
      counterViewCount = 0
    } = this.props;

    const { active } = this.state;

    return (
      <div className="App">
        <div className="button-group app-menu">
          <a 
            className={`button${active === VIEWS.STATE ? ' button--active' : ''}`}
            onClick={this.showState}>Counters ("Raphs Ducks")</a>
          <a 
            className={`button${active === VIEWS.NETWORK ? ' button--active' : ''}`}
            onClick={this.showNetwork}>Data (App-Network-Layer)</a>
        </div>

        {active === VIEWS.NETWORK && 
        <NetworkTest />}

        {active === VIEWS.STATE && 
        <Fragment>
          <p>This section demonstrates the "raphsducks" state manager. Engine source files are in <b>/src/state</b>.</p>
          <p>This application has two globally-accessible state instances (or "stores" in redux parlance). 
            The number of <b>Counters</b> in the left section are controlled by State "A", and
            the ones in the right by "B". 
          </p>
          <p>Click the (+,-) once to add two counters: one will be subscribed to State A, and the other to State B. Increment
            or decrement the counter values to see State subscribers get updated!
          </p>
          
          <section className="section">
            <CounterSection
              title="Counters (State A)"
              counterValue={counterValue}
              counterViewCount={counterViewCount}
              updateCounterViewCount={updateCounterViewCount}
            />
    
            <CounterSection
              title="Counters (State B)"
              counterValue={altCounterValue}
              counterViewCount={altCounterViewCount}
              updateCounterViewCount={updateAltCounterViewCount}
            />
          </section>
        </Fragment>}
      </div>
    );
  }
}

// Map State to Props for component
const mapProps = (state) => ({
  counterValue: state.counterValue || 0,
  counterViewCount: state.counterViewCount || 0
});
const mapAltProps = (state) => ({
  altCounterValue: state.counterValue || 0,
  altCounterViewCount: state.counterViewCount || 0
});

export default SubscribeComponent(
  SubscribeComponent(App, mapProps),
  mapAltProps,
  ALT_STATE
);