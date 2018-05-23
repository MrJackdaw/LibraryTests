import React, { Component } from 'react';
// 
import State from '../state';


export default function SubscribeComponent(
    ComponentToWrap: typeof Component, 
    mapProps: Function, 
    state = State) {

    return class SubscriberComponent extends Component {

        constructor(props) {
            super(props);
            this.state = mapProps(state.getState());
            this.unsubscribe = state.subscribe(this.update);
        }

        componentWillUnmount() {
            return this.unsubscribe();
        }

        update = state => {
            const next = mapProps(state);
            if (Object.keys(next).every(key => this.state[key] === next[key])) return;
            this.setState(prev => next);
        }

        render() {
            const next = Object.assign({}, { ...this.props }, { ...this.state })
            return <ComponentToWrap {...next} />;
        }
    }
}