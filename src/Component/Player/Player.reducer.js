import {IS_INIT, MOVE_PLAYER} from "../../Config/Action";

export const initState = {
    isInit: false,
    position: [0,0]
};



export function PlayerReducer(state = initState, action) {
    switch (action.type) {
        case IS_INIT: {
            return {...state, isInit: true};
        }
        case MOVE_PLAYER: {
            return {...state, ...action.payload}
        }
    }
    return state;
}

