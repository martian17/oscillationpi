var canvas = document.createElement("canvas");
var width = 500;
var height = 300;
canvas.width = width;
canvas.height = height;
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");

var start = 0;

var nlen = 200;
var x = 300;
var vx = 0;
var k = 5;
var m = 1;

var N = -1//number times the weight has passed π/2

//π=2t√(k/m) when x = n

var drawSpring = function(){
    var coils = 10;
    var s = x/coils;
    ctx.beginPath();
    ctx.moveTo(xx,100);
    for(var i = 0; i < coils; i++){
        var xx = s*i;
        ctx.lineTo(xx+s/2,50);
        ctx.lineTo(xx+s,100);
    }
    ctx.strokeStyle = "#000";
    ctx.stroke();
};

var drawWeight = function(x){
    ctx.fillStyle = "#2ea44f";
    ctx.fillRect(x,0,150,150);
}

var animate = function(t){
    if(start === 0)start = t;
    var dt = (start - t)/1000;
    var tt = t/1000;
    start = t;
    var a = k/m*(nlen-x);
    //console.log(a);
    vx += a*dt;
    var x0 = x;
    x += vx*dt;
    if((x0-nlen)*(x-nlen) < 0){//crossed the line
        N += 1;
        var pi = 2*tt*Math.sqrt(k/m);
        console.log(pi);
    }
    ctx.clearRect(0,0,width,height);
    drawSpring(x);
    drawWeight(x);
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
