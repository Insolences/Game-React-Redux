import {store} from "../../index";
import {SPRITE_SIZE} from "../Constants/constants"

export function playerMovement(player) {

    let allowed = true;

    window.addEventListener("keydown", (e)=>{
        if (e.repeat != undefined) {
            allowed = !e.repeat;
        }
        if (!allowed) return;
        allowed = false;
        handleMovement(e)
    });

    function handleMovement(e){
        switch (e.keyCode) {
            case 37: return dispatchMove("WEST");
            case 38: return dispatchMove("NORTH");
            case 39: return dispatchMove("EAST");
            case 40: return dispatchMove("SOUTH");
        }
    }

    function dispatchMove(direction){
        store.dispatch({
            type: "MOVE_PLAYER",
            payload: {
                position: getNewPosition(direction),
                side: getNewSide(direction)
            }
        })
    }

    function getNewPosition(direction) {
        const oldPos = store.getState().player.position;
        switch (direction) {
            case "WEST": return [oldPos[0] - SPRITE_SIZE, oldPos[1]];
            case "EAST": return [oldPos[0] + SPRITE_SIZE, oldPos[1]];
            case "NORTH": return [oldPos[0], oldPos[1] - SPRITE_SIZE];
            case "SOUTH": return [oldPos[0], oldPos[1] + SPRITE_SIZE];
        }
    }

    function getNewSide(direction) {
        switch (direction) {
            case "WEST": return "WEST";
            case "EAST": return "EAST";
            case "NORTH": return "NORTH";
            case "SOUTH": return "SOUTH";
        }
    }
    return player
}

