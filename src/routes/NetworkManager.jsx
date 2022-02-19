import React from "react";
import "./NetworkManager.scss";

const NetworkManager = () => {
  return (
    <section>
      <h4>Network Manager Code</h4>

      <p>
        <b>Real-talk:</b> I broke this library. It will take some time to fix.
      </p>
      <p>
        I am in the process of converting it into Typescript, with similar IDE
        code-suggestion functionality as{" "}
        <b>
          <i>raphsducks</i>
        </b>
        .
      </p>

      <p>Please be patient as magic 🌈 happens.</p>

      <hr />

      <pre>
        <code>/** </code>
        <code>* `NetworkLayer` has two properties: </code>
        <code>
          * -> `METHODS`: a string-string dictionary of request types (GET,
          POST, DEL, etc)
        </code>
        <code>
          * -> `APIConfig`: the object that uses your predefined endpoints
          ("routes") to make requests{" "}
        </code>
        <code>* </code>
        <code>
          * Export an instance of `APIConfig` that looks like the one below:{" "}
        </code>
        <code>
          * view a "service" file in this * directory to see it in action
        </code>
        <code>*/ </code>
        <code>import NetworkLayer from '@jackcom/app-network-layer';</code>
        <code>import Routes from './endpoints'; </code>
        <code>const Network = new APIConfig(Routes);</code>
        <code>export default Network;</code>
      </pre>

      {/* <button>Fetch latest Business registrations</button> */}
    </section>
  );
};

export default NetworkManager;
