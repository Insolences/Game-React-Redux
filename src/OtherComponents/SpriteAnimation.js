import React from "react";
import Spritesheet from "react-responsive-spritesheet";
import {PLAYER_MOVE_WEST, PLAYER_MOVE_NORTH, PLAYER_MOVE_EAST, PLAYER_MOVE_SOUTH} from "../Constants/Animation.sprite"

export class SpriteAnimation extends React.Component{

    renderImageAnimation(side){
        switch (side) {
            case "MOVE_WEST": return PLAYER_MOVE_WEST;
            case "MOVE_NORTH": return PLAYER_MOVE_NORTH;
            case "MOVE_EAST": return PLAYER_MOVE_EAST;
            case "MOVE_SOUTH": return PLAYER_MOVE_SOUTH;
        }
    }

    render() {
    const { side, steps } = this.props;
        return(
            <Spritesheet heightFrame={64} steps={steps} fps={12} image={this.renderImageAnimation(side)} widthFrame={64}/>
        )
    }
}
