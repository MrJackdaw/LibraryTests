// Application State 
import createState from '@jackcom/raphsducks';
import * as Setters from './setters';
// 
const AppState = createState(Setters); // Global state
const AltState = createState(Setters, true); // unique state instance

export default AppState;
export {AltState as ALT_STATE};
