// var cap;
// function setup() {
//   createCanvas(400, 400);
//   cap = createCapture(VIDEO);
//   cap.hide();
//   rectMode(CENTER);
//   noStroke();
// }
// function draw() {
//   background(50);
//   fill(255);
//   cap.loadPixels();
//   for (var cy = 0; cy < cap.height; cy += 10) {
//     for (var cx = 0; cx < cap.width; cx += 20) {
//       var offset = ((cy*cap.width)+cx)*4;
//       var xpos = (cx / cap.width) * width;
//       var ypos = (cy / cap.height) * height;
//       rect(xpos, ypos, 10,
//         10 * (cap.pixels[offset+1]/255));
//     }
//   }
// }

function setup() {
  createCanvas(720, 400);
  background(200);
  fill(204, 101, 192, 127);
  stroke(127, 63, 120);
  rect(40, 120, 120, 40);
  }
}
