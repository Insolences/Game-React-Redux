import React from "react";
import s from "./Enemy.module.css";
// import { connect } from "react-redux";
// import { actionIsInit } from "../../Config/Action";
// import { playerAction } from "../../features/player.action";
import { SpriteAnimation } from "../../otherComponents/SpriteAnimation";
import {
  ENEMY_MOVE_EAST,
  ENEMY_MOVE_NORTH,
  ENEMY_MOVE_SOUTH,
  ENEMY_MOVE_WEST
} from "../../constants/Animation.sprite";

export class Enemy extends React.PureComponent {
  componentDidMount() {
    this.props.init();
  }

  enemySide() {
    const side = this.props.side;
    switch (side) {
      case "WEST":
        return ENEMY_MOVE_WEST;
      case "NORTH":
        return ENEMY_MOVE_NORTH;
      case "EAST":
        return ENEMY_MOVE_EAST;
      case "SOUTH":
        return ENEMY_MOVE_SOUTH;
    }
  }

  render() {
    return (
      <div
        className={s.player}
        style={{
          // left: this.props.position[0],
          // top: this.props.position[1],
          transition: "1s linear all"
        }}
      >
        {this.props.stand && !this.props.shoot ? (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: `url(${this.playerSide()})`
            }}
          />
        ) : (
          <SpriteAnimation
            side={this.props.side}
            steps={this.props.steps}
            animation={this.props.animation}
          />
        )}
      </div>
    );
  }
}

// export default connect(
//   state => ({
//     isInit: state.player.isInit,
//     position: state.player.position,
//     side: state.player.side,
//     steps: state.player.steps,
//     stand: state.player.stand,
//     shoot: state.player.shoot,
//     animation: state.player.animation
//   }),
//   dispatch => ({
//     init: () => dispatch(actionIsInit())
//   })
// )(playerAction(Enemy));
