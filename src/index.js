import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Components
import App from "./App";
import Invoice from "./Invoice/Invoice";

import reportWebVitals from "./reportWebVitals";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/invoice" component={Invoice} />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
