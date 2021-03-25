var canvas = document.getElementById("canvas");
var width = 500;
var height = 150;
canvas.width = width;
canvas.height = height;
var ctx = canvas.getContext("2d");

var start = 0;
var soffset = 0;

var nlen = 200;
var x = 300;
var vx = 0;
var k = 5;
var m = 1;

var N = 0;

//π=2t√(k/m) when x(t) = n

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

var calcPosition = function(tt,dt){
    var a = k/m*(nlen-x);
    //console.log(a);
    vx += a*dt;
    var x0 = x;
    x += vx*dt;
    if((x0-nlen)*(x-nlen) < 0){//crossed the line
        var pi = tt*Math.sqrt(k/m)/(1/2+N);//(2*tt*Math.sqrt(k/m))/N;
        N += 1;
        console.log(pi);
        document.getElementById("d2").innerHTML = "π = "+pi;
    }
};

var animate = function(t){
    if(start === 0){
        start = t;
        soffset = t;
    }
    var dt = (start - t)/1000;
    var tt = (t-soffset)/1000;
    start = t;
    for(var i = 0; i < 1000; i++){
        calcPosition(tt+i*dt/1000,dt/1000);
    }
    ctx.clearRect(0,0,width,height);
    drawSpring(x);
    drawWeight(x);
    requestAnimationFrame(animate);
};

requestAnimationFrame(animate);
