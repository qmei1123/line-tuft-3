var i;
var y;
let ragged = [];
var yOne;
var yTwo;
var yThree;
var yFour;
var yFive;

function setup() {
    createCanvas(1600, 1000);
    background(196,212,224);
    ragged = new Ragged();
    frameRate(.75);
}
        
class Ragged {
    constructor() {
    
    }
//    move() {
//        xOne = xOne + random(-5, 5);
//        xTwo = xTwo + random(-5, 5);
//    }
    show() {
        noFill();
        stroke(random(50, 100),random(50, 150),224, random(20, 50));
        strokeWeight(random(9));
        strokeCap(SQUARE);
        beginShape();
            vertex(xOne + i, yOne + y);
            vertex(xTwo + i, yTwo + y);
        endShape(CLOSE);
    }
}

function draw() {
    for (i = 0; i < width; i += 40) {
        for (y = 0; y < height; y += 43) {
            xOne = 50 * sin(60) + 10;
            xTwo = random(-10, 40)*cos(60) + 10;
            
            yOne = 75 * cos(60) + 10;
            yTwo = random(-20, 120)*sin(60) + 10;

            ragged.show();
        //    ragged.move();
        }
    }
}


