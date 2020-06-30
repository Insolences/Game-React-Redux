import { IS_DEAD_ENEMY } from "../../Config/Action";

export const initState = {
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
//
export function EnemyReducer(state = initState, action) {
  switch (action.type) {
    case IS_DEAD_ENEMY: {
      return { ...state };
    }
  }

  return state;
}
