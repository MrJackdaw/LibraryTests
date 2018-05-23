import React, { PureComponent } from 'react';
// 
import { suppress } from '../../utils';
// 
import './Counter.css';

/**
 * A view that displays a numeric value and (+,-) controls to modify it
 */
export default class Counter extends PureComponent {

    decrement = suppress(() => this.props.decrement(this.props.value))

    increment = suppress(() => this.props.increment(this.props.value))

    render() {
        return (
            <section className="counter counter__wrapper">
                <span className="counter__label">{this.props.label}</span>
                <span className="counter__value">{this.props.value || 0}</span>
                <div className="counter__buttons button-group">
                    <a
                        className="counter__button button"
                        role="button"
                        onClick={this.decrement}>
                        Decrement
                    </a>

                    <a
                        className="counter__button button"
                        role="button"
                        onClick={this.increment}>
                        Increment
                    </a>
                </div>
            </section>
        );
    }
}
