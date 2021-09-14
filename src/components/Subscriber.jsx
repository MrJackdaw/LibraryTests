import React, { Component } from "react";
import AppState from "../state";

export default function SubscribeComponent(
  ComponentToWrap: typeof Component,
  mapProps: Function,
  state = AppState
) {
  return class SubscriberComponent extends Component {
    constructor(props) {
      super(props);
      this.state = mapProps(state.getState());
      this.unsubscribe = state.subscribe(this.update);
    }

    componentWillUnmount() {
      return this.unsubscribe();
    }

    update = (state, updatedKeys) => {
      const next = mapProps(state);
      this.setState((prev) => next);
    };

    render() {
      const next = Object.assign({}, { ...this.props }, { ...this.state });
      return <ComponentToWrap {...next} />;
    }
  };
}
