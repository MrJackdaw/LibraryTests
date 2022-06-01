import { useEffect, useState } from "react";
import AppState from "../state";

export default function useGlobalSubscriber(keys: string[]) {
  const global = AppState.getState();
  const initial: Partial<typeof global> = keys.reduce((agg, k) => {
    //   @ts-ignore
    agg[k] = global[k];
    return agg;
  }, {});
  const [local, setLocal] = useState(initial);
  const onUpdate = (state: Partial<typeof initial>) =>
    setLocal((prev: any) => ({ ...prev, ...state }));

  useEffect(() => AppState.subscribeToKeys(onUpdate, keys), []);

  return { ...local };
}
