import { combineReducers } from "redux";
import { PlayerReducer } from "../../Component/Player/Player.reducer";
import { MapReducer } from "../../Component/Map/Map.reducer";
import { WorldReducer } from "../../Component/World/World.reducer";
import { ArrowReducer } from "../../Component/Arrow/Arrow.reducer";
import { EnemyReducer } from "../../Component/Enemy/Enemy.reducer";

export default combineReducers({
  world: WorldReducer,
  player: PlayerReducer,
  map: MapReducer,
  arrow: ArrowReducer,
  enemy: EnemyReducer
});
