import "../../index.css"
import {SPRITE_SIZE} from "../../Constants/constants";
import React from "react";

export function Tile(props) {

    function getTileSprite(type){
        switch (type) {
            case 0: return 'green';
            case 1: return 'black';
            case 2: return 'brown';
        }
    }

    return(
        props.row.map((tile)=>{
            return <div className={`${getTileSprite(tile)}`} style={{
                width: SPRITE_SIZE,
                height: SPRITE_SIZE
            }}>{tile}</div>
        })
    );
}