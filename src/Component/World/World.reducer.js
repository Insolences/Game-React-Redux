import {
  IS_INIT,
  MOVE_PLAYER,
  MOVE_ENEMY,
  STOP_ENEMY,
  SHOOT_PLAYER,
  STOP_SHOOT_PLAYER,
  IS_STOP_LIFE_ARROW
} from "../../Config/Action";

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
      side: "SOUTH",
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
  const { position, side, shoot } = { ...action.payload };
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
      let id = action.payload.id;
      console.log(id);
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
