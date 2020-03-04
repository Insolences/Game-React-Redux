import React from "react";
import s from "./Player.module.css";
import { connect } from 'react-redux';
import { actionIsInit } from "../../Config/Action";
import { playerMovement } from "../../features/Player.movement";
import playerSprite from "../../dist/Sprite/Player/Player_move_south.png"
import Spritesheet from "react-responsive-spritesheet";
import {SpriteAnimation} from "../../OtherComponents/SpriteAnimation";

class Player extends React.Component {

    componentDidMount() {
        this.props.init();
    }

    playerAnimation(){
      let player = {
          side: this.props.side
      };

    }

    render() {
        return (
            <div className={s.player} style={
                {
                    left: this.props.position[0],
                    top: this.props.position[1],
                    transition: "1s ease all",
                    // backgroundImage: `url(${playerSprite})`,
                    // backgroundPosition: "0px, 715px"
                }
            }
            >
                {/*<SpriteAnimation*/}
                {/*    side={this.props.side}*/}
                {/*/>*/}
              <Spritesheet
                heightFrame={64}
                steps={9}
                fps={11}
                loop={true}
                backgroundSize={'cover'}
                image={playerSprite}
                widthFrame={64}
                autoplay={true}
              />
            </div>

        );
    }
}

export default connect(
    state => ({
        isInit: state.player.isInit,
        position: state.player.position,
        side: state.player.side
    }),
    dispatch => ({
        init: () => dispatch(actionIsInit()),
    }),
)(playerMovement(Player));

// const playerAnimation = (side) => {
//     let playerSide = this.props.side;
//     console.log(playerSide)
// };
//
// export  connect(
//   state => ({
//       isInit: state.player.isInit,
//       position: state.player.position,
//       side: state.player.side
//   }),
//   dispatch => ({
//       init: () => dispatch(actionIsInit()),
//   }),
// )(playerAnimation(Player));
