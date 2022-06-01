import { lazy } from 'react';

/**
 * Application Routes here.
 */
const routes = [
  {
    path: "/",
    text: "Counters (RaphsDucks)",
    component: lazy(() => import("./Ducks")),
  },
  {
    path: "/network-manager",
    text: "App Network Layer",
    component: lazy(() => import("./NetworkManager")),
  },
];

export default routes;
