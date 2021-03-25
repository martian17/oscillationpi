** This program calculates pi using spring oscillation.  

 (if someone could format this, I'll accept a pull request, thank you)
demo: https://codepen.io/MartianLord/full/zYNvgdN

** Details of how it works

The force of a spring can be expressed as<br>
<br>
F = k(n-x)<br>
<br>
where<br>
k = spring constant<br>
n = natural length of the spring<br>
x = length of the spring<br>
Dividing this with m, the mass of the weight, will reveal the acceleration of the weight at certain point<br>
<br>
Acc = k/m(n-x)<br>
<br>
Here, x can be re-written as a function of t, and Acc as a double derivative of x in terms of t<br>
<br>
x''(t) = k/m(n-x(t))<br>
k/m\*x(t) = k/m\*n-x''(t)<br>
x(t) = n-m/k*x''(t)<br>
<br>
solving this will give the following<br>
<br>
x(t) = n-a*sin(√(k/m)*t)<br>
<br>
Where a is the amplitude of the oscillation.<br>
Since we're starting this simulation with spring at its fully extended position, we can shift the phase<br>
<br>
x(t) = n-a*sin(√(k/m)*t+π/2)<br>
x(t) = n-a*cos(√(k/m)*t)<br>
<br>
when x(t) = n<br>
x(t) = n-a\*cos(π/2+π*N)<br>
<br>
Therefore we can exploit this formula to get π resulting in<br>
<br>
π=t√(k/m)/(1/2+N)<br>