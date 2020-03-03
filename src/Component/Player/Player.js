import React from "react";
import s from "./Player.module.css";
import { connect } from 'react-redux';
import { actionIsInit } from "../../Config/Action";
import { playerMovement } from "../features/Player.movement";

class Player extends React.Component {

    componentDidMount() {
        this.props.init();
    }
    render() {
        return (
            <div className={s.player} style={
                {
                    left: this.props.position[0],
                    top: this.props.position[1],
                    transition: "1s ease all"
                }
            }
            >
                Player
            </div>
        );
    }
}

export default connect(
    state => ({
        isInit: state.player.isInit,
        position: state.player.position,
    }),
    dispatch => ({
        init: () => dispatch(actionIsInit()),
    }),
)(playerMovement(Player));

