import "./App.css";
import React, { useState } from "react";
import Swith from "./components/Switch";
import Switch from "./components/Switch";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div className="container">
      <header></header>

      <main>
        <div>
          <Switch switchValue={switch1} setSwitch={setSwitch1} />
          <Switch switchValue={switch2} setSwitch={setSwitch2} />
          <Switch switchValue={switch3} setSwitch={setSwitch3} />
        </div>

        {/* <div className="switch1">
          <button
            onClick={() => {
              setSwitch1(true);
              console.log(switch1);
            }}
            style={{ background: switch1 === true ? "green" : "grey" }}
          >
            ON
          </button>
          <button
            onClick={() => {
              setSwitch1(false);
              console.log(switch1);
            }}
            style={{ background: switch1 === false ? "red" : "grey" }}
          >
            OFF
          </button>
        </div>

        <div className="switch2">
          <button
            onClick={() => {
              setSwitch2(true);
              console.log(switch1);
            }}
            style={{ background: switch2 === true ? "green" : "grey" }}
          >
            ON
          </button>
          <button
            onClick={() => {
              setSwitch2(false);
              console.log(switch1);
            }}
            style={{ background: switch2 === false ? "red" : "grey" }}
          >
            OFF
          </button>
        </div>

        <div className="switch3">
          <button
            onClick={() => {
              setSwitch3(true);
            }}
            style={{ background: switch3 === true ? "green" : "grey" }}
          >
            ON
          </button>
          <button
            onClick={() => {
              setSwitch3(false);
            }}
            style={{ background: switch3 === false ? "red" : "grey" }}
          >
            OFF
          </button>
        </div> */}
        {switch1 && switch2 && switch3 ? <h1>GO!</h1> : <h1>NO WAY!</h1>}
      </main>
    </div>
  );
}

export default App;
