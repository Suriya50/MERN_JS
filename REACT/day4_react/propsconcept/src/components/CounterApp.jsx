import { useState } from "react";
import Counter from "./Counter";

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <Counter
      count={count}
      increment={() => setCount(count + 1)}
      decrement={() => setCount(count - 1)}
    />
  );
}

export default CounterApp;
