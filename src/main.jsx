import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App"; // Import App without curly braces
import store from "./redux/store";
import "./index.css";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/waterbot-app">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
