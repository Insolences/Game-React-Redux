import { IS_LIFE_ARROW } from "../../Config/Action";
export const initState = {
    life: false,
};

export function ArrowReducer(state = initState, action) {
    switch (action.type) {
        case IS_LIFE_ARROW: {
            return {...state, life: true};
        }
    }

    return state;
}
