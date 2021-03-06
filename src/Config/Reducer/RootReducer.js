import { IS_INIT } from "../Action";

const initState = {
  isInit: false
};

export function RootReducer(state = initState, action) {
  switch (action.type) {
    case IS_INIT: {
      return { ...state, isInit: true };
    }
  }
  return state;
}
