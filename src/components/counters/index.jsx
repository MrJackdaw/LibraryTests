import React, { PureComponent } from "react";
//
import "./Counter.css";
import Counter from "./Counter";
import SubscribeComponent from "../Subscriber";
import {
  incrementAltCounterValue,
  decrementAltCounterValue,
  incrementCounterValue,
  decrementCounterValue,
} from "../../state/utils";
import AppState, { AltState } from "../../state";

export default class CounterSection extends PureComponent {
  render() {
    const {
      counterValue = 1,
      numViews = 0,
      title,
      updateNumCounters,
    } = this.props;
    const add = () => updateNumCounters(numViews + 1);
    const sub = () => updateNumCounters(Math.max(numViews - 1, 0));
    const padding = { padding: `0 5px` };

    return (
      <section className="section section--column half no-shrink no-grow">
        <section className="section section--centered">
          <div className="button-group" style={{ margin: `0 5px 0 0` }}>
            <button style={padding} onClick={sub} className="button">
              ( - ) Remove
            </button>
            <button style={padding} onClick={add} className="button">
              ( + ) Add
            </button>
          </div>

          <p className="section__title">
            {title} ({numViews || "none"})
          </p>
        </section>

        <section
          style={{ flexWrap: "wrap" }}
          className="section section--centered"
        >
          {numViews && makeCounterViews(numViews, counterValue)}
        </section>
      </section>
    );
  }
}

const mapProps = ({ counterValue: value }) => ({ value });
const LinkedCounter = SubscribeComponent(Counter, mapProps, AppState);
const AltLinkedCounter = SubscribeComponent(Counter, mapProps, AltState);

//  Helpers
function makeCounterViews(howMany, currCounterValue) {
  if (!howMany) return [];

  const counterViews = [];
  for (let i = 0; i < howMany; i++) {
    counterViews.push(
      <LinkedCounter
        key={`o-${i}`}
        label="State A"
        increment={incrementCounterValue}
        decrement={decrementCounterValue}
      />,

      <AltLinkedCounter
        key={i}
        label="State B"
        increment={incrementAltCounterValue}
        decrement={decrementAltCounterValue}
      />
    );
  }

  return counterViews;
}
