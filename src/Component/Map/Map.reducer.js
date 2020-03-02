import { IS_INIT } from "../../Config/Action";

export const initState = {
    isInit: false
};

export function MapReducer(state = initState, action) {
    switch (action.type) {
        case IS_INIT: {
            return {...state, isInit: true};
        }
    }
    return state;
}
