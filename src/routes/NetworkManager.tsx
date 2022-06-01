import React from "react";
import NetworkTest from "../components/NetworkTest";
import "./NetworkManager.scss";

const NetworkManager = () => {
  return (
    <section>
      <h4>Network Manager Code</h4>
      <p>
        This demonstrates the <b>@jackcom/NetworkLayer</b> library. Engine
        source files are in <b>/src/network</b>
      </p>
      <p>
        <code>NetworkLayer</code> has two properties:
      </p>

      <ol>
        <code>
          <b>METHODS</b>: a string-string dictionary of request types (GET,
          POST, DEL, etc)
        </code>
        <li>
          <b>APIConfig</b>: the object that uses your predefined endpoints
          ("routes") to make requests{" "}
        </li>
      </ol>

      <NetworkTest />
    </section>
  );
};

export default NetworkManager;
