/**
 * This file demonstrates a very simple "service" or specialized data handler. In
 * particular, it is a service that fetches json data from Oregon State's public APIs.
 * No caching has been implemented in this example. 
 * 
 * To create a new Oregon API endpoint, a maintainer of this app would:
 * 1. Add the new endpoint/route definition to ./network/routes
 * 2. Add a method for accessing that endpoint here. 
 */

 import Network from '.';

 export function getRecentlyRegisteredBusinesses() {
     return Network
         //  "request" param should match route key
         .request("recentlyRegisteredOregonBusinesses")
         //  "with" params are used if your route's url needs variable interpolation
         .with()
         //  you can add additional error handling (.then, .catch) here, if the returned data
         // needs additional manipulation
         .then(businesses => {
             if (!businesses) return [];
             if (businesses.length > 50) return businesses.slice(0, 50);
             return businesses;
         })
 }

 /*
  Another example, assuming there was a corresponding route with a url of: 

  `https://data.oregon.gov/resource/abc.json?logitude=${longitude}&latitude={latitude}

 export function getSomeOtherOregonDataHere(params) {

    const { latitude, longitude } = params; 
     
    return Network
        .request("someOtherOregonEndpoint")
        .with({
            latitude, 
            longitude, 
        })
        .catch( ... )
        .then( ... )xwx
 } */