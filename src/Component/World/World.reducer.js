import {
  IS_INIT,
  MOVE_PLAYER,
  MOVE_ENEMY,
  SHOOT_PLAYER,
  STOP_SHOOT_PLAYER,
  IS_STOP_LIFE_ARROW,
  IS_DEAD_PLAYER,
  IS_DEAD_ENEMY
} from "../../Config/Action";
import { enemyMovement } from "../../features/enemy.movement";

export const initState = {
  isInit: false,
  playerPositionForShoot: [0, 0],
  playerSideForShoot: "SOUTH",
  playerShoot: false,
  arrowInMap: [],
  enemyInMap: [
    {
      id: 1,
      name: "orc",
      life: true,
      position: [448, 192],
      stand: true,
      side: "ENEMY_SOUTH",
      animation: "",
      steps: 0
    },
    {
      id: 2,
      name: "orc",
      life: true,
      position: [384, 576],
      stand: true,
      side: "SOUTH",
      animation: "",
      steps: 0
    },
    {
      id: 3,
      name: "orc",
      life: true,
      position: [896, 320],
      stand: true,
      side: "SOUTH",
      animation: "",
      steps: 0
    }
  ]
};

export function WorldReducer(state = initState, action) {
  const { position, side, shoot, id, enemySide } = {
    ...action.payload
  };
  switch (action.type) {
    case IS_INIT: {
      return { ...state, isInit: true };
    }
    case MOVE_PLAYER: {
      return {
        ...state,
        playerPositionForShoot: position,
        playerSideForShoot: side
      };
    }
    case MOVE_ENEMY: {
      let tileMap = action.payload.tileMap;
      let enemy = state.enemyInMap.find(el => el.id === id);
      enemy.stand = false;
      enemy.side = enemySide;
      let newOptionsEnemy = enemyMovement(enemy, tileMap);
      enemy.position = newOptionsEnemy.position;
      enemy.steps = newOptionsEnemy.steps;
      enemy.animation = newOptionsEnemy.animation;
      enemy.stand = newOptionsEnemy.stand;
      return { ...state };
    }
    case IS_DEAD_ENEMY: {
      let newEnemyInMap = state.enemyInMap.slice();
      newEnemyInMap = newEnemyInMap.filter(el => el.id !== id);
      console.log(id);
      console.log("newEnemyInMap: ", newEnemyInMap);
      return {
        ...state,
        enemyInMap: newEnemyInMap
      };
    }
    case SHOOT_PLAYER: {
      let newArrowInMap = state.arrowInMap;
      newArrowInMap.push(1);
      return { ...state, arrowInMap: newArrowInMap, playerShoot: shoot };
    }
    case STOP_SHOOT_PLAYER: {
      return { ...state, playerShoot: shoot };
    }
    case IS_STOP_LIFE_ARROW: {
      let newArrowInMap = state.arrowInMap;
      newArrowInMap.shift();
      return { ...state, arrowInMap: newArrowInMap };
    }
  }
  return state;
}
