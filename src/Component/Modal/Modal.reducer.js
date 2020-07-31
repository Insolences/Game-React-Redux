import {
  CLOSE_START_MODAL,
  IS_INIT,
  SHOW_DEAD_ENEMY_MODAL,
  SHOW_DEAD_PLAYER_MODAL,
  SHOW_START_MODAL
} from "../../Config/Action";

const initState = {
  isInit: false,
  value: null,
  modalForStart: false,
  deadPlayerModal: false,
  modalForEnd: false
};

export function ModalReducer(state = initState, action) {
  switch (action.type) {
    case IS_INIT: {
      return { ...state, isInit: true };
    }
    case SHOW_START_MODAL: {
      return { ...state, value: action.type, modalForStart: true };
    }
    case SHOW_DEAD_ENEMY_MODAL: {
      return { ...state, value: action.type, modalForEnd: true };
    }
    case SHOW_DEAD_PLAYER_MODAL: {
      return { ...state, value: action.type, deadPlayerModal: true };
    }
    case CLOSE_START_MODAL: {
      return { ...state, value: action.type, modalForStart: false };
    }
  }
  return state;
}
