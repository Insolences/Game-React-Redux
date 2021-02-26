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

export const actionIsInit = () => {
  return {
    type: IS_INIT
  };
};

export const actionIsDeadPlayer = () => {
  return {
    type: IS_DEAD_PLAYER
  };
};

export const actionShowStartModal = () => {
  return {
    type: SHOW_START_MODAL
  };
};

export const actionCloseStartModal = () => {
  return {
    type: CLOSE_START_MODAL
  };
};

export const actionShowDeadPlayerModal = () => {
  return {
    type: SHOW_DEAD_PLAYER_MODAL
  };
};

export const actionShowDeadEnemyModal = () => {
  return {
    type: SHOW_DEAD_ENEMY_MODAL
  };
};

export const actionIsLifeArrow = () => {
  return {
    type: IS_LIFE_ARROW
  };
};

export const actionIsStopLifeArrow = () => {
  return {
    type: IS_STOP_LIFE_ARROW
  };
};

export const actionIsDeadEnemy = () => {
  return {
    type: IS_DEAD_ENEMY
  };
};
