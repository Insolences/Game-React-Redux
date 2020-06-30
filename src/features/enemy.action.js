export function getNewAction(direction) {
  switch (direction) {
    case "ENEMY_WEST":
      return { side: "WEST", steps: 7, animation: "ENEMY_WEST" };
    case "ENEMY_EAST":
      return { side: "EAST", steps: 7, animation: "ENEMY_EAST" };
    case "ENEMY_NORTH":
      return { side: "NORTH", steps: 7, animation: "ENEMY_NORTH" };
    case "ENEMY_SOUTH":
      return { side: "SOUTH", steps: 7, animation: "ENEMY_SOUTH" };
  }
}
