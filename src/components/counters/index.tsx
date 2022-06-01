import "./Counter.css";
import { AltLinkedCounter, LinkedCounter } from "./Counter";
import useGlobalCounter from "../../hooks/useGlobalCounter";

type CounterSectionProps = {
  title: string;
  counterValue: number;
  numViews: number;
  updateNumCounters: (n: number) => void;
};

export default function CounterSection(props: CounterSectionProps) {
  const { title, updateNumCounters, numViews, counterValue } = props;
  const add = () => updateNumCounters(numViews + 1);
  const sub = () => updateNumCounters(Math.max(numViews - 1, 0));
  const padding = { padding: `0 5px` };

  return (
    <section className="section section--column half no-shrink no-grow">
      <section className="section section--centered">
        <div className="button-group" style={{ margin: `0 5px 0 0` }}>
          <button style={padding} onClick={sub} className="button">
            ( - ) Remove
          </button>
          <button style={padding} onClick={add} className="button">
            ( + ) Add
          </button>
        </div>

        <p className="section__title">
          {title} ({numViews || "none"})
        </p>
      </section>

      <section
        style={{ flexWrap: "wrap" }}
        className="section section--centered"
      >
        {numViews && makeCounterViews(numViews, counterValue)}
      </section>
    </section>
  );
}

//  Helpers
function makeCounterViews(howMany: number, currCounterValue: number) {
  const counterViews: JSX.Element[] = [];
  if (!howMany) return counterViews;

  for (let i = 0; i < howMany; i++) {
    counterViews.push(
      <LinkedCounter key={`o-${i}`} />,
      <AltLinkedCounter key={i} />
    );
  }

  return counterViews;
}
