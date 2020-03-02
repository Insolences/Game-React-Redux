import {IS_INIT} from "../../Config/Action";

export const initState = {
    isInit: false,
    position: [0,0]
};

export function PlayerReducer(state = initState, action) {
    switch (action.type) {
        case IS_INIT: {
            return {...state, isInit: true};
        }
    }
    return state;
}
