import React from "react";
import Player from "../Player/Player";
import  Map  from "../Map/Map";
import {connect} from "react-redux";
import {actionIsInit} from "../../Config/Action";


class World extends React.PureComponent {
    componentDidMount() {
        this.props.init()
    }

    render() {
        return (
            <div
                style={{
                width: 1300,
                height: 780,
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


export default connect(
    state => ({
        isInit: state.app.isInit,
    }),
    dispatch => ({
        init: () => dispatch(actionIsInit())
    }),
)(World);
