import React from "react";
import s from "./Player.module.css";
import { connect } from 'react-redux';
import { actionIsInit } from "../../Config/Action";
import { playerMovement } from "../../features/player.movement";
import {SpriteAnimation} from "../../otherComponents/SpriteAnimation";
import {
    PLAYER_MOVE_EAST,
    PLAYER_MOVE_NORTH,
    PLAYER_MOVE_SOUTH,
    PLAYER_MOVE_WEST
} from "../../Constants/Animation.sprite";

class Player extends React.PureComponent {

    componentDidMount() {
        this.props.init();
    }

    playerSide(){
        const side = this.props.side;
        switch (side) {
            case "WEST": return PLAYER_MOVE_WEST;
            case "NORTH": return PLAYER_MOVE_NORTH;
            case "EAST": return PLAYER_MOVE_EAST;
            case "SOUTH": return PLAYER_MOVE_SOUTH;
        }
    }

    render() {
        return (
            <div className={s.player} style={
                {
                    left: this.props.position[0],
                    top: this.props.position[1],
                    transition: "1s linear all",
                }
            }
            >
                {this.props.stand?
                    <div style={{
                        width: '100%',
                        height: '100%',
                        background: `url(${this.playerSide()})`
                    }}/>
                    :
                    <SpriteAnimation
                        side={this.props.side}
                        steps={this.props.steps}
                    />
                }
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
        stand: state.player.stand
    }),
    dispatch => ({
        init: () => dispatch(actionIsInit()),
    }),
)(playerMovement(Player));
