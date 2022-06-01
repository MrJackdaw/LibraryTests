/**
 * `NetworkLayer` has two main properties:
 * -> `METHODS`: a string-string dictionary of request types (GET, POST, DEL, etc)
 * -> `APIConfig`: the function that turns your predefined endpoints ("routes") into a request-making machine
 *
 * Export an instance of `APIConfig` that looks like the one below: view a "service" file in this
 * directory to see it in action
 */

import APIConfig from "@jackcom/app-network-layer";
import endpoints from "./endpoints";
//

const API = APIConfig(endpoints);
export default API;
