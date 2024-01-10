import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App"; // Import App without curly braces

// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/waterbot-app">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// "homepage": "https://AnastasiiaKrtsk.github.io/waterbot-app/",
