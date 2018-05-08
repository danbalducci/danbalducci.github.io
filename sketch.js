
var cap;
var img;
var offset = 0;
var easing = 0.05;


function setup() {
 createCanvas(400, 400);
 cap = createCapture(VIDEO);
 cap.hide();
 imageMode(CENTER);
}
function draw() {
 background('#f7f5ef');
 image(cap, mouseX, mouseY, 400, 400);
 if (mouseX > 400) {
 background('#5d7bb7');
 image(cap, mouseX, mouseY, 400, 400);
} else {

}
if (mouseX < 100) {
background('#f7a313');
image(cap, mouseX, mouseY, 400, 400);
} else {

}
if (mouseIsPressed) {
  image(cap, mouseX/2, mouseY, 1000, 1000);

}

 //if mouse is pressed



 fill(0);
cap.loadPixels();
for (var cy = 0; cy < cap.height; cy += 2) {
 for (var cx = 0; cx < cap.width; cx += 12) {
   var offset = ((cy*cap.width)+cx)*4;
   var xpos = (cx / cap.width) * width;
   var ypos = (cy / cap.height) * height;
   rect(xpos, ypos, 7,
     1 * (cap.pixels[offset+2]/190))

 }
}
}
