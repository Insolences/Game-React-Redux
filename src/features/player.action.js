import { playerMovement } from "./player.movement";
import { playerShooting } from "./player.shooting";

export function getNewAction(direction) {
    switch (direction) {
        case "WALK_WEST": return {side: "WEST", steps: 7, animation: "WALK_WEST" };
        case "WALK_EAST": return {side: "EAST", steps: 7, animation: "WALK_EAST"};
        case "WALK_NORTH": return {side: "NORTH", steps: 7, animation: "WALK_NORTH"};
        case "WALK_SOUTH": return {side: "SOUTH", steps: 7, animation: "WALK_SOUTH"};
        case "SHOOT_WEST": return {side: "WEST", steps: 13, animation: "SHOOT_WEST", shoot: true};
        case "SHOOT_EAST": return {side: "EAST", steps: 13, animation: "SHOOT_EAST", shoot: true};
        case "SHOOT_NORTH": return {side: "NORTH", steps: 13, animation: "SHOOT_NORTH", shoot: true};
        case "SHOOT_SOUTH": return {side: "SOUTH", steps: 13, animation: "SHOOT_SOUTH", shoot: true};
    }
}


export function playerAction(player) {
    playerMovement();
    playerShooting();
    return player;
}