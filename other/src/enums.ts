enum Direction {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

function doSomething(param: Direction) {
  console.log(param);
}

doSomething(Direction.Up);
