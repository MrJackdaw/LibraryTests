import React from 'react';

/**
 * Application Routes here.
 */
const routes = [
  {
    path: "/",
    text: "Counters (RaphsDucks)",
    component: React.lazy(() => import("./Ducks")),
  },
  {
    path: "/network-manager",
    text: "App Network Layer",
    component: React.lazy(() => import("./NetworkManager")),
  },
];

export default routes;
