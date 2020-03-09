import React from "react";
import {connect} from "react-redux";
import { actionIsLifeArrow } from "../../Config/Action";
import {MAP_HEIGHT, MAP_WIDTH, SPRITE_SIZE} from "../../constants/constants"
import {store} from "../../index";
import {
    ARROW_MOVE_EAST,
    ARROW_MOVE_NORTH,
    ARROW_MOVE_SOUTH,
    ARROW_MOVE_WEST
} from "../../constants/Animation.sprite";


class Arrow extends React.PureComponent {

    state = {
      isLife: true,
      // positionLeft: this.sideToStartPosition(this.props.playerPositionForShoot, this.props.playerSideForShoot)[0],
      // positionTop: this.sideToStartPosition(this.props.playerPositionForShoot, this.props.playerSideForShoot)[1],
    };

    componentDidMount() {
        // this.props.isLife();
        this.testArrow()
    }

    testArrow() {
        // let sideToMove =  store.getState().world.playerSideForShoot;
        // console.log(sideToMove)
        // function checkMove(direction) {
        //     const oldPos = store.getState().player.position;
        //     const newPos = getNewPosition(direction);
        //     if (permittedBorderMovement(oldPos, newPos) && permittedPlayerMovement(newPos)){
        //         dispatchMove(direction, newPos)
        //     }
        //     return oldPos;
        // }
    }

    spriteToMoveArrow(playerSide){
        switch (playerSide) {
            case "WEST" : return ARROW_MOVE_WEST;
            case "NORTH" : return ARROW_MOVE_NORTH;
            case "EAST" : return ARROW_MOVE_EAST;
            case "SOUTH" : return ARROW_MOVE_SOUTH;
        }
    }

    sideToStartPosition(playerPositionForShoot, playerSideForShoot){
        let newPos;
        let oldPos = playerPositionForShoot;
        switch (playerSideForShoot) {
            case "WEST": newPos =  [
                oldPos[0] - SPRITE_SIZE,
                oldPos[1]
            ];
            case "NORTH": newPos =  [
                oldPos[0] ,
                oldPos[1] - SPRITE_SIZE
            ];
            case "EAST": newPos =  [
                oldPos[0] + SPRITE_SIZE ,
                oldPos[1]
            ];
            case "SOUTH":
                newPos = [
                    oldPos[0] ,
                    oldPos[1] + SPRITE_SIZE
            ];

        }
        this.movementArrow(oldPos, newPos, playerSideForShoot)
    }

    movementArrow(oldPos, newPos, playerSideForShoot){
        if (this.permittedBorderMovement(oldPos, newPos) && this.permittedArrowMovement(newPos)){
            this.sideToStartPosition(newPos, playerSideForShoot)
        }
        console.log('isLife: false');
        this.setState({
            isLife: false
        });
    }

    permittedBorderMovement(oldPos, newPos) {
        return  (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE) &&
          (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)
    }
    //
    permittedArrowMovement(newArrowPos) {
        let newTileForArrow;
        const tileMap = store.getState().map.tileMap;
        const x = newArrowPos[0] / SPRITE_SIZE;
        const y = newArrowPos[1] / SPRITE_SIZE;
        newTileForArrow = tileMap[y][x];
        if (newTileForArrow > 0){
            return false
        }
        return true
    }

    renderArrow(){
        return (
          <div style={{
              background: this.spriteToMoveArrow(this.props.playerSideForShoot),
              "background-position": "center",
              width: 64,
              height: 64,
              transition: "4s linear all",
              position: "absolute",
              left: this.sideToStartPosition(this.props.playerPositionForShoot, this.props.playerSideForShoot)[0],
              top: this.sideToStartPosition(this.props.playerPositionForShoot, this.props.playerSideForShoot)[1]
          }}>
              arrow
          </div>
        )
    }


    render() {
        return (
            <>
                {this.state.isLife ? this.renderArrow() : null}
            </>
        )
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
