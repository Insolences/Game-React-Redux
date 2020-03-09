import {IS_INIT, MOVE_PLAYER, SHOOT_PLAYER, STOP_PLAYER, STOP_SHOOT_PLAYER} from "../../Config/Action";

export const initState = {
    isInit: false,
    playerPositionForShoot: [0,0],
    playerSideForShoot: 'SOUTH',
    playerShoot: false,
    arrowInMap: []
};

export function WorldReducer(state = initState, action) {
    const { position, side, shoot } = {...action.payload};
    switch (action.type) {
        case IS_INIT: {
            return {...state, isInit: true};
        }
        case MOVE_PLAYER: {
            console.log(action.payload);
            return {...state, playerPositionForShoot: position, playerSideForShoot: side}
        }
        case SHOOT_PLAYER:{
            let newArrowInMap = state.arrowInMap;
            newArrowInMap.push(1);
            return {...state, arrowInMap: newArrowInMap, playerShoot: shoot}
        }
        case STOP_SHOOT_PLAYER:{
            return {...state, playerShoot: shoot}
        }
    }
    return state;
}
