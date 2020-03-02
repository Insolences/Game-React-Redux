import React from "react";
// import s from "./World_module.css"
import Player from "../Player/Player.container";
import { Map } from "../Map";


export class World extends React.Component {
    componentDidMount() {
        this.props.isInitEvent()
    }

    render() {
        return (
            <div
                // className={s.world}
                style={{
                width: 800,
                height: 600,
                margin: "20px auto",
                position: "relative"
           }}
            >
                <Map/>
                <Player/>
            </div>
        );
    }
}
