import React from "react";
import ReactDOM from "react-dom";
import Star from "./Star";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

function App() {
  return (
    <div className="App">
      <h2 className="heading--star">Star Components:</h2>
      <Star color="pink" isFilled />
      <Star color="magenta" />
      <Star color="indigo" isFilled />
      <h2 className="heading--rating">Rating Component (uses Stars):</h2>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
