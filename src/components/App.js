import { useState } from "react";
import "../css/App.css";
import Bars from "./bars";
import bubble from "./bubbleSort";

function App() {
  console.log("rendered");
  let [arr, setArr] = useState(() => {
    return Array(10)
      .fill(0)
      .map((e) => parseInt(Math.random() * 80 + 20));
  });
  let rand = () => {
    setArr(() => {
      return Array(10)
        .fill(0)
        .map(() => parseInt(Math.random() * 80 + 20));
    });
  };
  let sort = () => {
    setArr(() => {
      let _arr = [...arr];
      return bubble(_arr);
    });
  };

  return (
    <div className="App">
      <div className="wrap">
        <Bars arr={arr} />
      </div>
      <button onClick={rand}>random</button>
      <button onClick={sort}>click</button>
    </div>
  );
}

export default App;
