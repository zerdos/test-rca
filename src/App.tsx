import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Bio } from "./Bio";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Bio name="Zoltan" dob={1984}>
          He loves software updates
        </Bio>
      </header>
    </div>
  );
}

export default App;
