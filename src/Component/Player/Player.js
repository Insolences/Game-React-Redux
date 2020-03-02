import React from "react";
import s from "./Player.module.css";

export class Player extends React.Component {

    componentDidMount() {
        this.props.isInitEvent();
    }

    render() {
        return (
            <div className={s.player}>
                Player
            </div>
        );
    }
}
