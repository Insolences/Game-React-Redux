import React from "react";
import Spritesheet from "react-responsive-spritesheet";
import {PLAYER_MOVE_WEST, PLAYER_MOVE_NORTH, PLAYER_MOVE_EAST, PLAYER_MOVE_SOUTH} from "../Constants/Animation.sprite"

export class SpriteAnimation extends React.PureComponent{

    renderImageAnimation(side){
        switch (side) {
            case "WEST": return PLAYER_MOVE_WEST;
            case "NORTH": return PLAYER_MOVE_NORTH;
            case "EAST": return PLAYER_MOVE_EAST;
            case "SOUTH": return PLAYER_MOVE_SOUTH;
        }
    }

    render() {
    const { side, steps } = this.props;
        return(
            <Spritesheet heightFrame={64} steps={steps} fps={16} image={this.renderImageAnimation(side)} widthFrame={64} loop={true} autoplay={true} />
        )
    }
}
