import { IS_INIT } from "../../Action";

export const initState = {
    isInit: false,
    test: "Simple test"
};

export function RootReducer(state = initState, action) {
    switch (action.type) {
        case IS_INIT: {
            return {...state, isInit: true};
        }
    }
    return state;
}
