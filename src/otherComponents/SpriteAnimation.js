import React from "react";
import Spritesheet from "react-responsive-spritesheet";
import {
  PLAYER_MOVE_WEST,
  PLAYER_MOVE_NORTH,
  PLAYER_MOVE_EAST,
  PLAYER_MOVE_SOUTH,
  PLAYER_SHOOT_WEST,
  PLAYER_SHOOT_NORTH,
  PLAYER_SHOOT_EAST,
  PLAYER_SHOOT_SOUTH,
  ENEMY_MOVE_EAST,
  ENEMY_MOVE_NORTH,
  ENEMY_MOVE_SOUTH,
  ENEMY_MOVE_WEST,
  PLAYER_IS_DEAD,
  ENEMY_IS_DEAD
} from "../constants/Animation.sprite";

export class SpriteAnimation extends React.PureComponent {
  renderImageAnimation(animation) {
    switch (animation) {
      case "WALK_WEST":
        return PLAYER_MOVE_WEST;
      case "WALK_NORTH":
        return PLAYER_MOVE_NORTH;
      case "WALK_EAST":
        return PLAYER_MOVE_EAST;
      case "WALK_SOUTH":
        return PLAYER_MOVE_SOUTH;
      case "SHOOT_WEST":
        return PLAYER_SHOOT_WEST;
      case "SHOOT_NORTH":
        return PLAYER_SHOOT_NORTH;
      case "SHOOT_EAST":
        return PLAYER_SHOOT_EAST;
      case "SHOOT_SOUTH":
        return PLAYER_SHOOT_SOUTH;
      case "PLAYER_DEATH":
        return PLAYER_IS_DEAD;
      case "ENEMY_WEST":
        return ENEMY_MOVE_WEST;
      case "ENEMY_NORTH":
        return ENEMY_MOVE_NORTH;
      case "ENEMY_SOUTH":
        return ENEMY_MOVE_SOUTH;
      case "ENEMY_EAST":
        return ENEMY_MOVE_EAST;
      case "ENEMY_DEATH":
        return ENEMY_IS_DEAD;
    }
  }

  render() {
    const { steps, animation, loop, autoplay } = this.props;
    return (
      <Spritesheet
        heightFrame={64}
        steps={steps}
        fps={16}
        image={this.renderImageAnimation(animation)}
        widthFrame={64}
        loop={loop}
        autoplay={autoplay}
      />
    );
  }
}
