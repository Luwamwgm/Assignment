import { useState, useEffect } from "react";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    console.log("useEffect starting");
    let interval;
    if (running) {
      interval = setInterval(() => setCount((x) => x + 1), 3000);
    }
    return () => {
      if (interval) {
        console.log("interval", interval);
        clearInterval(interval);
      }
    };
  }, [running]);

  return (
    <>
      <div className="counter">{count}</div>
      <button onClick={() => setCount(0)}> Reset </button>
      <button disabled={running} onClick={() => setRunning(true)}>
        {" "}
        start{" "}
      </button>
      <button disabled={!running} onClick={() => setRunning(false)}>
        {" "}
        end
      </button>
    </>
  );
}

export default App;
