import "./App.css";
import "./App.css";
import React from "react";
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
