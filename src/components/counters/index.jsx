import React, { PureComponent } from 'react';
// 
import { suppress } from '../../utils';
import { ALT_STATE } from '../../state';
// 
import './Counter.css';
import Counter from './Counter';
import SubscribeComponent from '../Subscriber';
import { 
    incrementAltCounterValue, 
    decrementAltCounterValue, 
    incrementCounterValue, 
    decrementCounterValue 
} from '../../state/dispatchers';

export default class CounterSection extends PureComponent {
    
    addCounterView = suppress(() =>
        this.props.updateCounterViewCount(this.props.counterViewCount + 1))

    removeCounterView = suppress(() =>
        this.props.updateCounterViewCount(this.props.counterViewCount - 1))

    render() {

        const { counterValue = 1, counterViewCount = 0 } = this.props;
        const counterViews = makeCounterViews(counterViewCount, counterValue);

        return (
            <section className="section section--column half no-shrink no-grow">
                <section className="section section--centered">
                    <div className="button-group" style={{ margin: `0 5px 0 0` }}>
                        <a style={{ padding: `0 5px` }} onClick={this.addCounterView} className="button">+</a>
                        <a style={{ padding: `0 5px` }} onClick={this.removeCounterView} className="button">-</a>
                    </div>
                    <p className="section__title">{this.props.title} ({counterViewCount || "none"})</p>
                </section>

                <section style={{ flexWrap: "wrap" }} className="section section--centered">
                    {counterViewCount && counterViews}
                </section>
            </section>
        );
    }
}

const mapProps = (state) => ({ value: state.counterValue });

const LinkedCounter = SubscribeComponent(Counter, mapProps);

const AltLinkedCounter = SubscribeComponent(Counter, mapProps, ALT_STATE);

//  Helpers
function makeCounterViews(counterViewCount, currCounterValue) {
    const counterViews = [];
    if (!counterViewCount) return counterViews;
    for (let i = 0; i < counterViewCount; i++) {
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
        )
    }

    return counterViews;
}
