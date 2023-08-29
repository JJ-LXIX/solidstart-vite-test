import { createSignal, onCleanup } from "solid-js";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  let timer = setInterval(() => setCount(count() + 1), 1000);
  // onCleanup(() => clearInterval(timer));
  console.log("rerender");
  return (
    <button class="increment" onClick={() => setCount(count() + 1)}>
      Clicks: {count()}
    </button>
  );
}
