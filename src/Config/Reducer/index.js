import { combineReducers } from "redux";
import { RootReducer } from "./RootReducer";
import {PlayerReducer} from "../../Component/Player/Player.reducer";
import { MapReducer } from "../../Component/Map/Map.reducer"

export default combineReducers({
    app: RootReducer,
    player: PlayerReducer,
    map: MapReducer
})

