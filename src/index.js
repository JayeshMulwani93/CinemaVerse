import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoviesContextProvider } from "./store/movies-context";
import { UserContextProvider } from "./store/user-context";

ReactDOM.render(
  <UserContextProvider>
    <MoviesContextProvider>
      <App />
    </MoviesContextProvider>
  </UserContextProvider>,
  document.getElementById("root")
);