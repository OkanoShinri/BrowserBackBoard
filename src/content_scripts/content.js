console.log("content.js");

var ongoingTouches = [];

let width = 200;
let height = 100;
const board = document.createElement("div");
board.id = "BrowserBackBoard";
board.style.backgroundColor = "red";
board.style.width = `${width}px`;
board.style.height = `${height}px`;
board.style.position = "fixed";
board.style.bottom = "0px";
board.style.right = "0px";
board.style.zIndex = "99999";

board.addEventListener("touchstart", handleStart, false);
board.addEventListener("touchend", handleEnd, false);
board.addEventListener("touchcancel", handleCancel, false);
board.addEventListener("touchmove", handleMove, false);

const bar = document.createElement("div");
bar.id = "BrowserBackBoard";
bar.style.backgroundColor = "blue";
bar.style.width = `${width}px`;
bar.style.height = "20px";
bar.style.position = "fixed";
bar.style.bottom = `${height}px`;
bar.style.right = "0px";
bar.style.zIndex = "99999";

const BrowserBackBoard = document.createElement("div");
BrowserBackBoard.appendChild(bar)
BrowserBackBoard.appendChild(board)

let body = document.getElementsByTagName("body");
if (body.length === 0) {
  let html = document.getElementsByTagName("html");
  html[0].appendChild(BrowserBackBoard);
} else {
  body[0].appendChild(BrowserBackBoard);
}

function handleStart(evt) {
  evt.preventDefault();
  console.log("touchstart.");
  
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    ongoingTouches.push(copyTouch(touches[i]));
    console.log(`x:${touches[i].pageX}, y:${touches[i].pageY}`)

  }
}
