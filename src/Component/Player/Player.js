import React from "react";
import s from "./Player.module.css";
import { connect } from 'react-redux';
import { actionIsInit } from "../../Config/Action";
import { playerMovement } from "../features/Player.movement";
import playerSprite from "../../dist/img/Player.png"
import Spritesheet from "react-responsive-spritesheet/src/js/Spritesheet";

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

            // <Spritesheet heightFrame={65} steps={10} fps={12} image={playerSprite} direction={`forward`} widthFrame={65} autoplay={true} backgroundPosition={"0px, 715px"}/>
            <div className={s.player} style={
                {
                    left: this.props.position[0],
                    top: this.props.position[1],
                    transition: "1s ease all",
                    backgroundImage: `url(${playerSprite})`,
                    backgroundPosition: "0px, 715px"
                }
            }
            />

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
