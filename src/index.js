// This is for the fake API. Do not delete!
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./App.css";
import { render } from 'react-dom';
import Character from "./components/Character";
import { worker } from "./mocks/browser";
worker.start();

ReactDOM.render(<App />, document.getElementById("root"));
