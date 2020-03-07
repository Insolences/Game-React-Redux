import { IS_INIT } from "../../Config/Action";
import { tileMap } from "../../data/Map/level_1"
export const initState = {
    isInit: false,
    tileMap: tileMap
};

export function MapReducer(state = initState, action) {
    switch (action.type) {
        case IS_INIT: {
            return {...state, isInit: true};
        }
    }
    return state;
}
