export function randomTimeToMove() {
  let min = 1;
  let max = 4;
  let rand = min + Math.random() * (max + 1 - min);
  let res = Math.floor(rand);
  return res;
}
