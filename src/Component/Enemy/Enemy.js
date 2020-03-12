import React from "react";
import s from "./Enemy.module.css";
import { connect } from "react-redux";
import { actionIsInit } from "../../Config/Action";
import { SpriteAnimation } from "../../otherComponents/SpriteAnimation";
import {
  ENEMY_MOVE_EAST,
  ENEMY_MOVE_NORTH,
  ENEMY_MOVE_SOUTH,
  ENEMY_MOVE_WEST
} from "../../constants/Animation.sprite";

export class Enemy extends React.PureComponent {
  state = {
    id: this.props.id,
    life: this.props.life,
    position: this.props.position,
    name: this.props.name,
    stand: this.props.stand,
    side: this.props.side,
    animation: this.props.animation,
    steps: this.props.steps
  };

  enemySide() {
    this.enemyMovement();
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

  enemyMovement() {
    console.log("here");
    let id = this.props.id;
    this.props.movement(id);
  }

  render() {
    const {
      life,
      position,
      id,
      name,
      stand,
      side,
      animation,
      steps
    } = this.props;
    return (
      <div
        className={s.enemy}
        style={{
          left: position[0],
          top: position[1],
          transition: "1s linear all"
        }}
      >
        {stand ? (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: `url(${this.enemySide()})`
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

export default connect(
  state => ({
    isInit: state.player.isInit,
    position: state.player.position,
    side: state.player.side,
    steps: state.player.steps,
    stand: state.player.stand,
    shoot: state.player.shoot,
    animation: state.player.animation
  }),
  dispatch => ({
    init: () => dispatch(actionIsInit())
  })
)(Enemy);
