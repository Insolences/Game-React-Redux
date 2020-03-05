import {store} from "../index";
import {MAP_HEIGHT, MAP_WIDTH, SPRITE_SIZE} from "../Constants/constants"
import { timer } from "./timer";

export function playerMovement(player) {

    window.addEventListener("keydown", (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if (store.getState().player.stand){
            timer(1, function () {
                handleMovement(e)
            }, function () {
                store.dispatch({
                    type: "STOP_PLAYER",
                    payload: {
                        stand: true,
                    }
                });
            });
        }
    });

    function handleMovement(e){
        e.preventDefault();
        e.stopPropagation();
        switch (e.keyCode) {
            case 37: return checkMove("WEST");
            case 38: return checkMove("NORTH");
            case 39: return checkMove("EAST");
            case 40: return checkMove("SOUTH");
        }
    }

    function dispatchMove(direction, newPos){
        let action = getNewAction(direction);
        store.dispatch({
            type: "MOVE_PLAYER",
            payload: {
                position: newPos,
                side: action.side,
                steps: action.steps,
                stand: false
            }
        })
    }

    function checkMove(direction) {
        const oldPos = store.getState().player.position;
        const newPos = getNewPosition(direction);
        if (permittedBorderMovement(oldPos, newPos) && permittedPlayerMovement(newPos)){
            dispatchMove(direction, newPos)
        } return oldPos;
    }
    
    function permittedBorderMovement(oldPos, newPos) {
        return  (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE) &&
                (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)
    }

    function permittedPlayerMovement(newPlayerPos) {
        let newTileForPlayer;
        const tileMap = store.getState().map.tileMap;
        const x = newPlayerPos[0] / SPRITE_SIZE;
        const y = newPlayerPos[1] / SPRITE_SIZE;
        newTileForPlayer = tileMap[y][x];
        if (newTileForPlayer > 0){
            return false
        }
        return true
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

    function getNewAction(direction) {
        switch (direction) {
            case "WEST": return {side: "WEST", steps: 7};
            case "EAST": return {side: "EAST", steps: 7};
            case "NORTH": return {side: "NORTH", steps: 7};
            case "SOUTH": return {side: "SOUTH", steps: 7};
        }
    }
    return player
}

