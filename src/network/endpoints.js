import NetworkLayer from '@jackcom/app-network-layer'; 

const { METHODS } = NetworkLayer;

export default {
    recentlyRegisteredOregonBusinesses: {
        // This url doesn't need params, so just returns a string
        url: params => `https://data.oregon.gov/resource/qajw-6p2c.json`,
        method: METHODS.GET,
    }
}