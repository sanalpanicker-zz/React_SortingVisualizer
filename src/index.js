import React from "react";
import ReactDOM from "react-dom";
import SortingVisualizer from "./SortingVisualizer";
import "./styles.css";

function App() {
  return <SortingVisualizer />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
