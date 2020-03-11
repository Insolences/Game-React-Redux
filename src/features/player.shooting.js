import { store } from "../index";
import { getNewAction } from "./player.action";

export function playerShooting() {
  window.addEventListener("keydown", e => {
    e.stopPropagation();
    e.preventDefault();
    if (
      e.code === "Space" &&
      !store.getState().player.shoot &&
      !e.repeat &&
      store.getState().player.stand
    )
      dispatchShoot();
  });

  function playerSideShooting() {
    let side = store.getState().player.side;
    switch (side) {
      case "WEST":
        return "SHOOT_WEST";
      case "EAST":
        return "SHOOT_EAST";
      case "NORTH":
        return "SHOOT_NORTH";
      case "SOUTH":
        return "SHOOT_SOUTH";
    }
  }

  function dispatchShoot() {
    let action = getNewAction(playerSideShooting());
    store.dispatch({
      type: "SHOOT_PLAYER",
      payload: {
        shoot: action.shoot,
        animation: playerSideShooting(),
        steps: action.steps
      }
    });
    setTimeout(() => {
      stopShoot();
    }, 1000);
  }

  function stopShoot() {
    if (store.getState().player.shoot) {
      store.dispatch({
        type: "STOP_SHOOT_PLAYER",
        payload: {
          shoot: false,
          steps: 0,
          animation: ""
        }
      });
    }
    return null;
  }
}
