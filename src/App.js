import React from "react";
import "./App.css";
import { BASE_URL, API_KEY } from './constants'

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have hella fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      {console.log(`${BASE_URL}`)}
    </div>
  );
}

export default App;
