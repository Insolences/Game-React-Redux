import React from "react";
import Player from "../Player/Player";
import Map  from "../Map/Map";
import Arrow from "../Arrow/Arrow";
import {connect} from "react-redux";
import { actionIsInit } from "../../Config/Action";


class World extends React.PureComponent {

    componentDidMount() {
        this.props.init();
    }

    arrowFlight(){
        if ((this.props.arrowInMap).length > 0){
            return (
                this.props.arrowInMap.map((el)=>
                        <Arrow index={el}/>
                    )
            )
        }
        return null;
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
                {this.arrowFlight()}
            </div>
        );
    }
}


export default connect(
    state => ({
        isInit: state.world.isInit,
        shoot: state.player.shoot,
        arrowInMap: state.world.arrowInMap
    }),
    dispatch => ({
        init: () => dispatch(actionIsInit()),
        // isStopArrowLife: () => dispatch(actionIsStopLifeArrow)
    }),
)(World);
