import APIConfig, { METHODS } from "@jackcom/app-network-layer";

/**
 * This file demonstrates a very simple "service" or specialized data handler. In
 * particular, it is a service that fetches json data from Oregon State's public APIs.
 * No caching has been implemented in this example.
 *
 * To create a new Oregon API endpoint, a maintainer of this app would:
 * 1. Add the new endpoint/route definition to ./network/routes
 * 2. Add a method for accessing that endpoint here.
 */
const endpoints = {
  recentlyRegisteredOregonBusinesses: {
    url: () => `https://data.oregon.gov/resource/qajw-6p2c.json`,
    method: METHODS.GET,
  },
};

export default endpoints;
