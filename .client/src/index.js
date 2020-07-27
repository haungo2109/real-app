import React from "react";
//import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import configerStore from "./redux/configureStore";
import { BrowserRouter as Router } from "react-router-dom";

render(
  <Provider store={configerStore()}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
