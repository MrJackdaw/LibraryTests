import { Store } from "@jackcom/raphsducks/lib/types";
import { useEffect, useMemo, useState } from "react";
import AppState, { State } from "../state";

export default function useGlobalCounter(
  keys: string[],
  state: Store<State> = AppState
) {
  const global = state.getState();
  const initial: any = keys.reduce((agg, key) => {
    // @ts-ignore
    agg[key] = global[key];
    return agg;
  }, {});
  const [local, setLocal] = useState(initial);
  const onUpdate = (state: Partial<typeof initial>) =>
    setLocal((prev: any) => ({ ...prev, ...state }));
  const counterValue = useMemo(
    () => local.counterValue || 0,
    [local.counterValue]
  );
  const counterViewCount = useMemo(
    () => local.counterViewCount || 0,
    [local.counterViewCount]
  );

  useEffect(() => state.subscribeToKeys(onUpdate, keys), []);

  return {
    ...local,
    increment: () => state.counterValue(counterValue + 1),
    decrement: () => state.counterValue(counterValue - 1),
  };
}
