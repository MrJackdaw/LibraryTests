// Application State
import createState from "@jackcom/raphsducks";
//
const initialState = {
  /** Current counter value */
  counterValue: 0,
  /** Number of counter-views on screen */
  counterViewCount: 0,
};
const AppState = createState(initialState);
export const AltState = createState(initialState);

export default AppState;
