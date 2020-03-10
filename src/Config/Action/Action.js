import { createAction } from "redux-actions";

import {
    IS_INIT,
    IS_LIFE_ARROW,
    IS_STOP_LIFE_ARROW
} from "./Type"

export const actionIsInit = createAction(IS_INIT);
export const actionIsLifeArrow = createAction(IS_LIFE_ARROW);
export const actionIsStopLifeArrow = createAction(IS_STOP_LIFE_ARROW);