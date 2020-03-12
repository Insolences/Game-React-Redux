import { createAction } from "redux-actions";

import {
  IS_INIT,
  IS_LIFE_ARROW,
  IS_STOP_LIFE_ARROW,
  IS_DEAD_ENEMY,
  IS_DEAD_PLAYER,
  MOVE_ENEMY
} from "./Type";

export const actionIsInit = createAction(IS_INIT);
export const actionIsMoveEnemy = createAction(MOVE_ENEMY);
export const actionIsLifeArrow = createAction(IS_LIFE_ARROW);
export const actionIsStopLifeArrow = createAction(IS_STOP_LIFE_ARROW);
export const actionIsDeadEnemy = createAction(IS_DEAD_ENEMY);
export const actionIsDeadPlayer = createAction(IS_DEAD_PLAYER);
