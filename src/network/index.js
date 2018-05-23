/**
 * `NetworkLayer` has two properties: 
 * -> `METHODS`: a string-string dictionary of request types (GET, POST, DEL, etc)
 * -> `APIConfig`: the object that uses your predefined endpoints ("routes") to make requests
 * 
 * Export an instance of `APIConfig` that looks like the one below: view a "service" file in this 
 * directory to see it in action
 */

import NetworkLayer from '@jackcom/app-network-layer';
// 
import Routes from './routes';
// 
const { APIConfig } = NetworkLayer;

const Network = new APIConfig(Routes);

export default Network;