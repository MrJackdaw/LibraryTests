// Dispatchers: individual functions that dispatch `actions` to modify state
import State, { ALT_STATE } from '.';
import { setCounterValue, setCounterViewCount } from './actions';
// Global State dispatchers
export function incrementCounterValue(counterValue: number) {
    return setStateCounterValue(getCounterValue(State) + 1);
}

export function decrementCounterValue(counterValue: number) {
    return setStateCounterValue(getCounterValue(State) - 1);
}

export function updateCounterViewCount(val: number) {
    const viewCount = Math.max(val, 0);
    return State.dispatch(setCounterViewCount(viewCount));
}

function setStateCounterValue(val: number) {
    const counterValue = Math.max(val, 0);
    return State.dispatch(setCounterValue(counterValue));
}

// "ALT_STATE" (unique state instance) dispatchers
export function incrementAltCounterValue(counterValue: number) {
    return setAltCounterValue(getCounterValue(ALT_STATE) + 1);
}

export function decrementAltCounterValue(counterValue: number) {
    return setAltCounterValue(getCounterValue(ALT_STATE) - 1);
}

export function updateAltCounterViewCount(val: number) {
    const viewCount = Math.max(val, 0);
    return ALT_STATE.dispatch(setCounterViewCount(viewCount));
}

function setAltCounterValue(val: number) {
    const counterValue = Math.max(val, 0);
    return ALT_STATE.dispatch(setCounterValue(counterValue));
}

// Helpers
function getCounterValue(state) {
    return state.getState().counterValue || 0
}