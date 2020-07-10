import {
  CLOSE_START_MODAL,
  IS_INIT,
  SHOW_DEAD_ENEMY_MODAL,
  SHOW_DEAD_PLAYER_MODAL,
  SHOW_START_MODAL
} from "../Action";

const initState = {
  isInit: false,
  modal: false
};

export function RootReducer(state = initState, action) {
  switch (action.type) {
    case IS_INIT: {
      return { ...state, isInit: true };
    }
    case SHOW_START_MODAL || SHOW_DEAD_ENEMY_MODAL || SHOW_DEAD_PLAYER_MODAL: {
      return { ...state, modal: true };
    }
    case CLOSE_START_MODAL: {
      return { ...state, modal: false };
    }
  }
  return state;
}
