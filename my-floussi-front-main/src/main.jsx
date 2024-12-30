import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//eslint-disable-next-line react/no-deprecated
// ReactDOM.render(<App />, document.getElementById("root"));

//eslint-disable-next-line react/no-deprecated
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
