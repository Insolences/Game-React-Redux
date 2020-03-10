import React from "react";
import ReactDOM from "react-dom";
import { App } from "./Component/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import  reducer  from "./Config/Reducer/index";
import thunk from "redux-thunk";

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

