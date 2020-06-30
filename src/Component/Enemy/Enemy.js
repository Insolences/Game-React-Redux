import React from "react";
import s from "./Enemy.module.css";
import { connect } from "react-redux";
import { actionIsInit, actionForDead } from "../../Config/Action";
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

  componentDidMount() {
    setInterval(() => this.enemyMovement(), 1000);
  }

  randomMoveSide() {
    let min = 1;
    let max = 4;
    let rand = min + Math.random() * (max + 1 - min);
    let res = Math.floor(rand);
    switch (res) {
      case 1:
        return "ENEMY_WEST";
        break;
      case 2:
        return "ENEMY_NORTH";
        break;
      case 3:
        return "ENEMY_EAST";
        break;
      case 4:
        return "ENEMY_SOUTH";
    }
  }

  enemySide() {
    const side = this.props.side;
    switch (side) {
      case "ENEMY_WEST":
        return ENEMY_MOVE_WEST;
      case "ENEMY_NORTH":
        return ENEMY_MOVE_NORTH;
      case "ENEMY_EAST":
        return ENEMY_MOVE_EAST;
      case "ENEMY_SOUTH":
        return ENEMY_MOVE_SOUTH;
    }
  }

  enemyMovement() {
    this.attackEnemy();
    let id = this.state.id;
    let side = this.randomMoveSide();
    this.props.movement(id, side);
  }

  attackEnemy() {
    const playerPosition = this.props.playerPosition;
    const enemyPosition = this.props.position;
    if (
      playerPosition[0] === enemyPosition[0] &&
      playerPosition[1] === enemyPosition[1]
    ) {
      this.props.eventForDeadPlayer(playerPosition, enemyPosition);
    }
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
            side={side}
            steps={steps}
            animation={animation}
            loop={true}
            autoplay={true}
          />
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    playerPosition: state.player.position
  }),
  dispatch => ({
    init: () => dispatch(actionIsInit()),
    eventForDeadPlayer: (playerPosition, enemyPosition) =>
      dispatch(actionForDead(playerPosition, enemyPosition))
  })
)(Enemy);
