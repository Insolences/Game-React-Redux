import { combineReducers } from "redux";
import { RootReducer } from "../Reducer/RootReducer";

export default combineReducers({
    app: RootReducer,
})

