import { AltState } from "../../state";
import useGlobalCounter from "../../hooks/useGlobalCounter";
//
import "./Counter.css";

type CounterProps = {
  label: string;
  value: number;
  decrement: () => void;
  increment: () => void;
};

/**
 * A view that displays a numeric value and (+,-) controls to modify it
 */
export default function Counter(props: CounterProps) {
  const { label, value, increment, decrement } = props;

  return (
    <section className="counter counter__wrapper">
      <span className="counter__label">{label}</span>
      <span className="counter__value">{value || 0}</span>
      <div className="counter__buttons button-group">
        <a className="counter__button button" role="button" onClick={decrement}>
          Decrement
        </a>

        <a className="counter__button button" role="button" onClick={increment}>
          Increment
        </a>
      </div>
    </section>
  );
}

const keys = ["counterValue"];

export const AltLinkedCounter = () => {
  const { increment, decrement, counterValue } = useGlobalCounter(
    keys,
    AltState
  );

  return (
    <Counter
      label="State B"
      value={counterValue}
      decrement={decrement}
      increment={increment}
    />
  );
};

export const LinkedCounter = () => {
  const { increment, decrement, counterValue } = useGlobalCounter(keys);

  return (
    <Counter
      label="State A"
      value={counterValue}
      decrement={decrement}
      increment={increment}
    />
  );
};
