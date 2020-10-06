import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Bio } from "./Bio";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Bio name="Joe" dob={1203}>
ssssssssssssssss          He likes to play with trains
        </Bio>
      </header>
    </div>
  );
}

export default App;
