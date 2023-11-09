import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {store} from  "./ReduxStore/Store.jsx"
import { BrowserRouter } from "react-router-dom";
import Approutes from "./Approutes.jsx";
import { Provider } from "react-redux";


ReactDOM.createRoot(document.getElementById("root")).render(
<BrowserRouter>
    <Provider store={store}>
      <Approutes />
    </Provider>
  </BrowserRouter>
);
