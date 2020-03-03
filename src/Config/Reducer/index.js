import { combineReducers } from "redux";
import {PlayerReducer} from "../../Component/Player/Player.reducer";
import { MapReducer } from "../../Component/Map/Map.reducer"
import {WorldReducer} from "../../Component/World/World.reducer";

export default combineReducers({
    app: WorldReducer,
    player: PlayerReducer,
    map: MapReducer
})

