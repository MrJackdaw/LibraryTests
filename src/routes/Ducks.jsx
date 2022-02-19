import { useState, useEffect, Fragment } from "react";
import CounterSection from "../components/counters";
import AppState, { AltState } from "../state";

const RaphsDucks = () => {
  const [appState, setAppState] = useState(AppState.getState());
  const [altState, setAltState] = useState(AltState.getState());

  useEffect(() => {
    const unsubApp = AppState.subscribe(setAppState);
    const unsubAlt = AltState.subscribe(setAltState);

    return function unsubscribeAll() {
      unsubApp();
      unsubAlt();
    };
  });


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
        Click the <b>(+ , -)</b> once to add two counters: one will be subscribed to
        State A, and the other to State B. Increment or decrement the counter
        values to see State subscribers get updated!
      </p>

      <section className="section">
        <CounterSection
          title="Counters (State A)"
          counterValue={appState.counterValue}
          numViews={appState.counterViewCount}
          updateNumCounters={c => AppState.counterViewCount(c)}
        />

        <CounterSection
          title="Counters (State B)"
          counterValue={altState.counterValue}
          numViews={altState.counterViewCount}
          updateNumCounters={c => AltState.counterViewCount(c)}
        />
      </section>
    </Fragment>
  );
};

export default RaphsDucks;
