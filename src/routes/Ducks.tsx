import { useState, useEffect, Fragment } from "react";
import useGlobalCounter from "../hooks/useGlobalCounter";
import CounterSection from "../components/counters";
import AppState, { AltState, initialState } from "../state";

const RaphsDucks = () => {
  const keys = Object.keys(initialState);
  const { counterViewCount, counterValue } = useGlobalCounter(keys, AppState);
  const { counterValue: altValue, counterViewCount: altViewCount } =
    useGlobalCounter(keys, AltState);

  return (
    <Fragment>
      <p>
        This section demonstrates the "raphsducks" state manager. Engine source
        files are in <b>/src/state</b>.
      </p>
      <p>
        This application has two globally-accessible state instances (or
        "stores" in redux parlance). The number of <b>Counters</b> in the left
        section are controlled by State "A", and the ones in the right by "B".
      </p>
      <p>
        Click the <b>(+ , -)</b> once to add two counters: one will be
        subscribed to State A, and the other to State B. Increment or decrement
        the counter values to see State subscribers get updated!
      </p>

      <section className="section">
        <CounterSection
          title="Counters (State A)"
          counterValue={counterValue}
          numViews={counterViewCount}
          updateNumCounters={(c) => AppState.counterViewCount(c)}
        />

        <CounterSection
          title="Counters (State B)"
          counterValue={altValue}
          numViews={altViewCount}
          updateNumCounters={(c) => AltState.counterViewCount(c)}
        />
      </section>
    </Fragment>
  );
};

export default RaphsDucks;
