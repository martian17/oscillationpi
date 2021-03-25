var canvas = document.createElement("canvas");
var width = 500;
var height = 300;
canvas.width = width;
canvas.height = height;
var ctx = canvas.getContext("2d");

var start = 0;

var nlen = 200;
var x = 300;
var vx = 0;
var k = 1;

//π=2t√(k/m) when x = n

var animate = function(t){
    if(start === 0)start = t;
    var dt = ddtart - t;
    
}

requestAnimationFrame(animate);
