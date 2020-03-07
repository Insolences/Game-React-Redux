import {IS_INIT, MOVE_PLAYER, SHOOT_PLAYER, STOP_PLAYER} from "../../Config/Action";

export const initState = {
    isInit: false,
    position: [0,0],
    side: 'SOUTH',
    animation: '',
    steps: 0,
    stand: true,
    shoot: false
};


export function PlayerReducer(state = initState, action) {
    switch (action.type) {
        case IS_INIT: {
            return {...state, isInit: true};
        }
        case MOVE_PLAYER: {
            return {...state, ...action.payload}
        }
        case STOP_PLAYER:{
            return {...state, ...action.payload}
        }
        case SHOOT_PLAYER:{
            return {...state, ...action.payload}
        }
    }
    return state;
}

