import React from "react";
import { connect } from "react-redux";
import { MAP_HEIGHT, MAP_WIDTH, SPRITE_SIZE } from "../../constants/constants";
import { store } from "../../index";
import {
  ARROW_MOVE_EAST,
  ARROW_MOVE_NORTH,
  ARROW_MOVE_SOUTH,
  ARROW_MOVE_WEST
} from "../../constants/Animation.sprite";

class Arrow extends React.PureComponent {
  state = {
    position: [
      this.props.playerPositionForShoot[0],
      this.props.playerPositionForShoot[1]
    ]
  };

  componentDidMount() {
    this.sideToStartPosition(
      this.props.playerPositionForShoot,
      this.props.playerSideForShoot
    );
  }

  spriteToMoveArrow(playerSide) {
    switch (playerSide) {
      case "WEST":
        return ARROW_MOVE_WEST;
        break;
      case "NORTH":
        return ARROW_MOVE_NORTH;
        break;
      case "EAST":
        return ARROW_MOVE_EAST;
        break;
      case "SOUTH":
        return ARROW_MOVE_SOUTH;
    }
  }

  sideToStartPosition(playerPositionForShoot, playerSideForShoot) {
    let newPos;
    let oldPos = playerPositionForShoot;
    switch (playerSideForShoot) {
      case "WEST":
        newPos = [oldPos[0] - SPRITE_SIZE, oldPos[1]];
        break;
      case "EAST":
        newPos = [oldPos[0] + SPRITE_SIZE, oldPos[1]];
        break;
      case "NORTH":
        newPos = [oldPos[0], oldPos[1] - SPRITE_SIZE];
        break;
      case "SOUTH":
        newPos = [oldPos[0], oldPos[1] + SPRITE_SIZE];
    }
    this.movementArrow(oldPos, newPos, playerSideForShoot);
  }

  movementArrow(oldPos, newPos, playerSideForShoot) {
    if (
      this.permittedBorderMovement(oldPos, newPos) &&
      this.permittedArrowMovement(newPos)
    ) {
      this.setState({
        position: newPos
      });
      return setTimeout(
        () => this.sideToStartPosition(newPos, playerSideForShoot),
        20
      );
    }
    store.dispatch({
      type: "IS_STOP_LIFE_ARROW"
    });
  }

  permittedBorderMovement(oldPos, newPos) {
    return (
      newPos[0] >= 0 &&
      newPos[0] <= MAP_WIDTH - SPRITE_SIZE &&
      newPos[1] >= 0 &&
      newPos[1] <= MAP_HEIGHT - SPRITE_SIZE
    );
  }

  permittedArrowMovement(newArrowPos) {
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

  renderArrow() {
    return (
      <div
        style={{
          display: "flex",
          "align-items": "center",
          "justify-content": "center",
          width: 64,
          height: 64,
          position: "absolute",
          left: this.state.position[0],
          top: this.state.position[1]
          // transition: "1s linear all"
        }}
      >
        <img src={this.spriteToMoveArrow(this.props.playerSideForShoot)} />
      </div>
    );
  }

  render() {
    return <>{this.renderArrow()}</>;
  }
}

export default connect(
  state => ({
    life: state.arrow.life,
    playerPositionForShoot: state.player.position,
    playerSideForShoot: state.player.side
  }),
  null
)(Arrow);
