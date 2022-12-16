import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.scss";

//redux
import { Provider } from "react-redux";
import { store } from "./app/store";

//index.js
const container = document.getElementById("root");
const root = createRoot(container);

export const containerMQ = (theme) => ({
  [theme.breakpoints.up("md")]: {
    height: "100vh",
  },
  [theme.breakpoints.down("md")]: {
    height: "auto",
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
