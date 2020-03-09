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
    PLAYER_SHOOT_SOUTH
} from "../constants/Animation.sprite"

export class SpriteAnimation extends React.PureComponent{

    renderImageAnimation(animation){
        switch (animation) {
            case "WALK_WEST": return PLAYER_MOVE_WEST;
            case "WALK_NORTH": return PLAYER_MOVE_NORTH;
            case "WALK_EAST": return PLAYER_MOVE_EAST;
            case "WALK_SOUTH": return PLAYER_MOVE_SOUTH;
            case "SHOOT_WEST": return PLAYER_SHOOT_WEST;
            case "SHOOT_NORTH": return PLAYER_SHOOT_NORTH;
            case "SHOOT_EAST": return PLAYER_SHOOT_EAST;
            case "SHOOT_SOUTH": return PLAYER_SHOOT_SOUTH;
        }
    }

    render() {
    const { steps, animation } = this.props;
        return(
            <Spritesheet heightFrame={64}
                         steps={steps}
                         fps={16}
                         image={this.renderImageAnimation(animation)}
                         widthFrame={64} loop={true}
                         autoplay={true}
            />
        )
    }
}
