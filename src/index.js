import React from "react";
import ReactDOM from "react-dom";
import { App } from "./Component/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import  reducer  from "./Config/Reducer/index";

export const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

