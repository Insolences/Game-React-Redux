import "../../css/tileMap.css"
import {SPRITE_SIZE} from "../../Constants/constants";
import React from "react";

export function Tile(props) {

    function getTileSprite(type){
        switch (type) {
            case 0: return 'green';
            case 11: return 'black1';
            case 12: return 'black2';
            case 13: return 'black3';
            case 21: return 'brown1';
            case 22: return 'brown2';
        }
    }

    return(
        props.row.map((tile)=>{
            return <div className={`${getTileSprite(tile)}`} style={{
                width: SPRITE_SIZE,
                height: SPRITE_SIZE
            }}/>
        })
    );
}