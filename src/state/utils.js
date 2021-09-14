// Helper functions for modifying state
import AppState, { AltState } from ".";

// Global AppState dispatchers
export function incrementCounterValue() {
  const { counterValue } = AppState.getState();
  return AppState.counterValue(counterValue + 1);
}

export function decrementCounterValue() {
  const { counterValue } = AppState.getState();
  return AppState.counterValue(counterValue - 1);
}

// "AltState" (unique state instance) dispatchers
export function incrementAltCounterValue() {
  const { counterValue } = AltState.getState();
  return AltState.counterValue(counterValue + 1);
}

export function decrementAltCounterValue() {
  const { counterValue } = AltState.getState();
  return AltState.counterValue(counterValue - 1);
}
