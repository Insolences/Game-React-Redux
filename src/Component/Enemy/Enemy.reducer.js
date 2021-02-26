import { IS_DEAD_ENEMY } from "../../Config/Action";
import { enemy } from "../../data/Enemy";

export const initState = {
  enemyInMap: enemy
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
