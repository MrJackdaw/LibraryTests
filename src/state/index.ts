// Application State
import createState from "@jackcom/raphsducks";
//
export type State = {
  /** Current counter value */
  counterValue: number;
  /** Number of counter-views on screen */
  counterViewCount: number;
};
export const initialState: State = Object.freeze({
  /** Current counter value */
  counterValue: 0,
  /** Number of counter-views on screen */
  counterViewCount: 0,
});

const AppState = createState(initialState);
export default AppState;

export const AltState = createState(initialState);
