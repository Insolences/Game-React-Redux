import { MAP_HEIGHT, MAP_WIDTH, SPRITE_SIZE } from "../constants/constants";
import { getNewAction } from "./enemy.action";

export function enemyMovement(enemy, tileMap) {
  let direction = enemy.side;
  let newPosEnemy = checkMove(direction);
  function checkMove(direction) {
    const oldPos = enemy.position;
    const newPos = getNewPosition(direction);
    if (
      permittedBorderMovement(oldPos, newPos) &&
      permittedEnemyMovement(newPos, tileMap)
    ) {
      return dispatchMove(direction, newPos);
    }
    return {
      position: oldPos,
      stand: true,
      steps: 0,
      animation: "",
      side: enemy.side
    };
  }

  function dispatchMove(direction, newPos) {
    let action = getNewAction(direction);
    return {
      position: newPos,
      side: action.side,
      steps: action.steps,
      animation: action.animation,
      stand: false
    };
    // store.dispatch({
    //   type: "MOVE_ENEMY",
    //   payload: {
    //     position: newPos,
    //     side: action.side,
    //     steps: action.steps,
    //     animation: action.animation,
    //     stand: false
    //   }
    // });
  }

  // let stopMovement = function() {
  //   if (!store.getState().player.stand) {
  //     store.dispatch({
  //       type: "STOP_PLAYER",
  //       payload: {
  //         stand: true,
  //         animation: "",
  //         steps: 0
  //       }
  //     });
  //   }
  //   return null;
  // };

  function permittedBorderMovement(oldPos, newPos) {
    return (
      newPos[0] >= 0 &&
      newPos[0] <= MAP_WIDTH - SPRITE_SIZE &&
      newPos[1] >= 0 &&
      newPos[1] <= MAP_HEIGHT - SPRITE_SIZE
    );
  }

  function permittedEnemyMovement(newEnemyPos, tileMap) {
    let newTileForEnemy;
    const map = tileMap;
    const x = newEnemyPos[0] / SPRITE_SIZE;
    const y = newEnemyPos[1] / SPRITE_SIZE;
    newTileForEnemy = map[y][x];
    if (newTileForEnemy > 0) {
      return false;
    }
    return true;
  }

  function getNewPosition(direction) {
    const oldPos = enemy.position;
    switch (direction) {
      case "ENEMY_WEST":
        return [oldPos[0] - SPRITE_SIZE, oldPos[1]];
      case "ENEMY_EAST":
        return [oldPos[0] + SPRITE_SIZE, oldPos[1]];
      case "ENEMY_NORTH":
        return [oldPos[0], oldPos[1] - SPRITE_SIZE];
      case "ENEMY_SOUTH":
        return [oldPos[0], oldPos[1] + SPRITE_SIZE];
    }
  }
  // setTimeout(() => {
  //   newPosEnemy.stand = true;
  // }, 1000);
  return newPosEnemy;
}
