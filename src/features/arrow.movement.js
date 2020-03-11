import { store } from "../index";
import { MAP_HEIGHT, MAP_WIDTH, SPRITE_SIZE } from "../constants/constants";
import { getNewAction } from "./player.action";

export function arrowMovement(Arrow) {
  // if (store.getState().arrow.isInit){testArrow()}
  function testArrow() {
    let sideToMove = store.getState().world.playerSideForShoot;
    console.log(sideToMove);
  }
  function checkMove(direction) {
    const oldPos = store.getState().player.position;
    const newPos = getNewPosition(direction);
    if (
      permittedBorderMovement(oldPos, newPos) &&
      permittedArrowMovement(newPos)
    ) {
      dispatchMove(direction, newPos);
    }
    return oldPos;
  }

  function dispatchMove(direction, newPos) {
    let action = getNewAction(direction);
    store.dispatch({
      type: "MOVE_PLAYER",
      payload: {
        position: newPos,
        side: action.side,
        steps: action.steps,
        animation: action.animation,
        stand: false
      }
    });
    setTimeout(() => {
      stopMovement();
    }, 1000);
  }

  let stopMovement = function() {
    if (!store.getState().player.stand) {
      store.dispatch({
        type: "STOP_PLAYER",
        payload: {
          stand: true,
          animation: "",
          steps: 0
        }
      });
    }
    return null;
  };

  function permittedBorderMovement(oldPos, newPos) {
    return (
      newPos[0] >= 0 &&
      newPos[0] <= MAP_WIDTH - SPRITE_SIZE &&
      newPos[1] >= 0 &&
      newPos[1] <= MAP_HEIGHT - SPRITE_SIZE
    );
  }

  function permittedArrowMovement(newArrowPos) {
    let newTileForArrow;
    const tileMap = store.getState().map.tileMap;
    const x = newArrowPos[0] / SPRITE_SIZE;
    const y = newArrowPos[1] / SPRITE_SIZE;
    newTileForArrow = tileMap[y][x];
    if (newTileForArrow > 0) {
      return false;
    }
    return true;
  }

  function getNewPosition(direction) {
    const oldPos = store.getState().player.position;
    switch (direction) {
      case "WALK_WEST":
        return [oldPos[0] - SPRITE_SIZE, oldPos[1]];
      case "WALK_EAST":
        return [oldPos[0] + SPRITE_SIZE, oldPos[1]];
      case "WALK_NORTH":
        return [oldPos[0], oldPos[1] - SPRITE_SIZE];
      case "WALK_SOUTH":
        return [oldPos[0], oldPos[1] + SPRITE_SIZE];
    }
  }

  return Arrow;
}
