import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import "./index.css";

import cinemaVerseStore from "./store/index";

ReactDOM.render(
  <Provider store={cinemaVerseStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
