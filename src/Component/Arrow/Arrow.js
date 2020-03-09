import React from "react";
import {connect} from "react-redux";
import { actionIsLifeArrow } from "../../Config/Action";
import { SPRITE_SIZE }from "../../constants/constants"
import {store} from "../../index";
// import {
//     ARROW_MOVE_EAST,
//     ARROW_MOVE_NORTH,
//     ARROW_MOVE_SOUTH,
//     ARROW_MOVE_WEST
// } from "../../constants/Animation.sprite";


class Arrow extends React.PureComponent {

    state = {
      isLife: true
    };

    componentDidMount() {
        // this.props.isLife();
        this.testArrow()
    }

    testArrow() {
        let sideToMove =  store.getState().world.playerSideForShoot;
        console.log(sideToMove)
        // function checkMove(direction) {
        //     const oldPos = store.getState().player.position;
        //     const newPos = getNewPosition(direction);
        //     if (permittedBorderMovement(oldPos, newPos) && permittedPlayerMovement(newPos)){
        //         dispatchMove(direction, newPos)
        //     }
        //     return oldPos;
        // }
    }

    // spriteToMoveArrow(playerSide){
    //     switch (playerSide) {
    //         case "WEST" : return ARROW_MOVE_WEST;
    //         case "NORTH" : return ARROW_MOVE_NORTH;
    //         case "EAST" : return ARROW_MOVE_EAST;
    //         case "SOUTH" : return ARROW_MOVE_SOUTH;
    //     }
    // }

    sideToStartPosition(playerPositionForShoot, playerSideForShoot){
        switch (playerSideForShoot) {
            case "WEST": return [
                playerPositionForShoot[0] - SPRITE_SIZE,
                playerPositionForShoot[1]
            ];
            case "NORTH": return [
                playerPositionForShoot[0] ,
                playerPositionForShoot[1] - SPRITE_SIZE
            ];
            case "EAST": return [
                playerPositionForShoot[0] + SPRITE_SIZE ,
                playerPositionForShoot[1]
            ];
            case "SOUTH": return [
                playerPositionForShoot[0] ,
                playerPositionForShoot[1] + SPRITE_SIZE
            ]
        }
    }



    render() {
        return (
            <div style={{
                "background-color": "black",
                width: 64,
                height: 64,
                position: "absolute",
                left: this.sideToStartPosition(this.props.playerPositionForShoot, this.props.playerSideForShoot)[0],
                top: this.sideToStartPosition(this.props.playerPositionForShoot, this.props.playerSideForShoot)[1]
            }}>
                {this.testArrow()}
                arrow
            </div>
        );
    }
}

export default connect(
    state => ({
        life: state.arrow.life,
    }),
    dispatch => ({
        isLife: () => dispatch(actionIsLifeArrow())
    }),
)(Arrow);
