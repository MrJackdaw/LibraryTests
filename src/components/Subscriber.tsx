import { useEffect, useState } from "react";
import AppState from "../state";

export default function SubscribeComponent(keys: string[]) {
  return <p></p>
  // const global = AppState.getState();
  // const initial = keys.reduce((agg, k) => {
  //   const key = k as keyof typeof global;
  //   agg[key] = global[key];
  //   return agg;
  // }, {} as Partial<typeof global>);
  // const [local, setLocal] = useState(initial);
  // const onUpdate = (state: Partial<typeof initial>) =>
  //   setLocal((prev: any) => ({ ...prev, ...state }));

  // useEffect(() => AppState.subscribeToKeys(onUpdate, keys), []);

  // return { ...local };
}
