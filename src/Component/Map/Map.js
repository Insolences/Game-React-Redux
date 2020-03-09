import React from "react";
import s from "./Map.module.css"
import {connect} from "react-redux";
import {actionIsInit} from "../../Config/Action";
import {Tile} from "../Tile/Tile"
class Map extends React.PureComponent {

    render() {
        return (
            <div className={s.map}>
                {this.props.tileMap.map((el)=><div className={s.row}><Tile row={el}/></div>)}
            </div>
        );
    }
}

export default connect(
    state => ({
        isInit: state.map.isInit,
        tileMap: state.map.tileMap
    }),
    dispatch => ({
        init: () => dispatch(actionIsInit())
    }),
)(Map);
