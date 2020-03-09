import {store} from "../index";


export function arrowMovement(Arrow) {
// if (store.getState().arrow.isInit){testArrow()}
    function testArrow() {
       let sideToMove =  store.getState().world.playerSideForShoot;
       console.log(sideToMove)
    }


    return Arrow
}

