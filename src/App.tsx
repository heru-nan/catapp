import { useState, useRef } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { WebcamCapture } from "./Camera";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
        <h1>
          hello<span>{Array.from("|".repeat(count)).join("")}</span>world
        </h1>
        <button onClick={() => setCount(count + 1)}>spacing</button>
        <div className="camera">
         <WebcamCapture />
        </div>
    </>
  );
}

export default App;
