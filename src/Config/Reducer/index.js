import { combineReducers } from "redux";
import { PlayerReducer } from "../../Component/Player/Player.reducer";
import { MapReducer } from "../../Component/Map/Map.reducer";
import { WorldReducer } from "../../Component/World/World.reducer";
import { ArrowReducer } from "../../Component/Arrow/Arrow.reducer";
import { EnemyReducer } from "../../Component/Enemy/Enemy.reducer";
import { ModalReducer } from "../../Component/Modal/Modal.reducer";
import { RootReducer } from "./RootReducer";

export default combineReducers({
  app: RootReducer,
  world: WorldReducer,
  player: PlayerReducer,
  map: MapReducer,
  arrow: ArrowReducer,
  enemy: EnemyReducer,
  modal: ModalReducer
});
