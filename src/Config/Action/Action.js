import { createAction } from "redux-actions";

import {
  IS_INIT,
  IS_LIFE_ARROW,
  IS_STOP_LIFE_ARROW,
  IS_DEAD_ENEMY,
  IS_DEAD_PLAYER,
  MOVE_ENEMY,
  SHOW_START_MODAL,
  SHOW_DEAD_PLAYER_MODAL,
  SHOW_DEAD_ENEMY_MODAL,
  CLOSE_START_MODAL
} from "./Type";

export const actionIsMoveEnemy = (id, enemySide, tileMap) => {
  return {
    type: MOVE_ENEMY,
    payload: { id, enemySide, tileMap }
  };
};

export const actionForDead = (playerPosition, enemyPosition) => {
  return {
    type: IS_DEAD_PLAYER,
    payload: { playerPosition, enemyPosition }
  };
};

export const actionForDeadEnemy = id => {
  return {
    type: IS_DEAD_ENEMY,
    payload: { id }
  };
};

export const actionIsInit = createAction(IS_INIT);
export const actionIsLifeArrow = createAction(IS_LIFE_ARROW);
export const actionIsStopLifeArrow = createAction(IS_STOP_LIFE_ARROW);
export const actionIsDeadEnemy = createAction(IS_DEAD_ENEMY);
export const actionIsDeadPlayer = createAction(IS_DEAD_PLAYER);
export const actionShowStartModal = createAction(SHOW_START_MODAL);
export const actionCloseStartModal = createAction(CLOSE_START_MODAL);
export const actionShowDeadPlayerModal = createAction(SHOW_DEAD_PLAYER_MODAL);
export const actionShowDeadEnemyModal = createAction(SHOW_DEAD_ENEMY_MODAL);
