import {store} from "../index";
import {MAP_HEIGHT, MAP_WIDTH, SPRITE_SIZE} from "../Constants/constants"
import { getNewAction } from "../features/player.action"
export function playerMovement() {

    let stopMovement = function () {
        if (!store.getState().player.stand){
            store.dispatch({
                type: "STOP_PLAYER",
                payload: {
                    stand: true,
                }
            });
        } return null;
    };

     function checkButton(e){
        if (e.code === 'ArrowUp' || e.code === 'ArrowDown' || e.code === 'ArrowLeft' || e.code === 'ArrowRight') return true;
    }

    window.addEventListener("keydown", (e)=>{
        e.stopPropagation();
        e.preventDefault();
        if (checkButton(e) && store.getState().player.stand && !store.getState().player.shoot){
            handleMovement(e);
        }
    });

    function handleMovement(e){
        e.preventDefault();
        e.stopPropagation();
        switch (e.keyCode) {
            case 37: return checkMove("WALK_WEST");
            case 38: return checkMove("WALK_NORTH");
            case 39: return checkMove("WALK_EAST");
            case 40: return checkMove("WALK_SOUTH");
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
                animation: action.animation,
                stand: false,
            }
        });
        setTimeout(()=>{
            stopMovement();
        },1000)
    }

    function checkMove(direction) {
        const oldPos = store.getState().player.position;
        const newPos = getNewPosition(direction);
        if (permittedBorderMovement(oldPos, newPos) && permittedPlayerMovement(newPos)){
            dispatchMove(direction, newPos)
        }
        return oldPos;
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
            case "WALK_WEST": return [oldPos[0] - SPRITE_SIZE, oldPos[1]];
            case "WALK_EAST": return [oldPos[0] + SPRITE_SIZE, oldPos[1]];
            case "WALK_NORTH": return [oldPos[0], oldPos[1] - SPRITE_SIZE];
            case "WALK_SOUTH": return [oldPos[0], oldPos[1] + SPRITE_SIZE];
        }
    }


}

