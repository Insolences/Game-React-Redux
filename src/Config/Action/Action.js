import { createAction } from "redux-actions";

import {
    IS_INIT,
    IS_LIFE_ARROW
} from "./Type"

export const actionIsInit = createAction(IS_INIT);
export const actionIsLifeArrow = createAction(IS_LIFE_ARROW);