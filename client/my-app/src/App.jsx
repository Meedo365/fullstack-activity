import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-color-500">
        <h1>To Do List</h1>
        <input type="text" placeholder="enter item to-do item" />
        <button type="button">delete</button>
        <ul>
          <li>
            <input type="checkbox" />
            Food<button type="button">delete</button>
          </li>
          <li>
            <input type="checkbox" />
            Food<button type="button">delete</button>
          </li>
          <li>
            <input type="checkbox" />
            Food<button type="button">delete</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
