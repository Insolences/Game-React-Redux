import { createAction } from "redux-actions";

import {
    IS_INIT,
    MOVE_PLAYER,
} from "./Type"

export const actionIsInit = createAction(IS_INIT);
export const actionToMove = createAction(MOVE_PLAYER);
