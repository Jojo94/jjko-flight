(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

var n = 0, a = 0, b=0, c=0, d=0, e=0, f=0, g=0, i=0;

hun = document.getElementById("hundred");
var canvas = document.getElementById("text");
var ctx=canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
w=canvas.width;
h=canvas.height;
ctx.clearRect(0,0,w,h);
keys = [];
var y1=y2=0.8*h,y3=0.957*h,y4=0.8857*h;


function update(){
  var c1="white",c2="white",xs=0.115*w,ys=0.7857*h;
  ctx.clearRect(0,0,w,h);
  ctx.lineWidth = 0.001*w;
  ctx.strokeStyle="black";


  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(w,0);
  ctx.lineTo(w,h);
  ctx.lineTo(0.974*w,h);
  ctx.lineTo(0.974*w,0.67*h);
  ctx.lineTo(0.93*w,0.561*h);
  ctx.lineTo(0.9125*w,0.561*h);
  ctx.lineTo(0.94*w,0.026*h);
  ctx.lineTo(0.508*w,0.066*h);
  ctx.lineTo(0.512*w,0.49*h);
  ctx.lineTo(0.546*w,0.561*h);
  ctx.lineTo(0.454*w,0.561*h);
  ctx.lineTo(0.488*w,0.49*h);
  ctx.lineTo(0.492*w,0.066*h);
  ctx.lineTo(0.06*w,0.026*h);
  ctx.lineTo(0.0875*w,0.561*h);
  ctx.lineTo(0.07*w,0.561*h);
  ctx.lineTo(0.026*w,0.67*h);
  ctx.lineTo(0.026*w,h);
  ctx.lineTo(0,h);
  ctx.lineTo(0,0);
  ctx.fillStyle=" #ccccb3";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(0.026*w,0.67*h);
  ctx.lineTo(0.974*w,0.67*h);
  ctx.lineTo(0.974*w,h);
  ctx.lineTo(0.026*w,h);
  ctx.lineTo(0.026*w,0.67*h);
  ctx.fillStyle=" grey";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(0.07*w,0.561*h);
  ctx.lineTo(0.93*w,0.561*h);
  ctx.lineTo(0.974*w,0.67*h);
  ctx.lineTo(0.026*w,0.67*h);
  ctx.lineTo(0.07*w,0.561*h);
  ctx.fillStyle=" grey";
  ctx.fill();
  ctx.closePath();


/*
  showN();
  showN3();
  showN5();
  showN7();
  showN9();
  showN11();
  showN13();
  showN14();
  showN15();

  */
            if (keys[39]) {
       // right arrow
       c2="red";
       xs=0.13*w;
   }
   if (keys[37]) {
        // left arrow
  c1="red";
  xs=0.1*w;
   }
   if (keys[40]) {
// up arrow
ys=0.807*h;
}
if (keys[38]) {
// down arrow
ys=0.764*h;
}


ctx.beginPath();
ctx.lineWidth="2";
ctx.strokeStyle = "white";
/*Schubkontrolle*/
ctx.strokeRect(0.46*w,0.714*h,0.03*w,0.171*h);
ctx.strokeRect(0.51*w,0.714*h,0.03*w,0.171*h);
/*Landeklappenhebel+Bremsklappenhebel*/
ctx.strokeRect(0.44*w,0.929*h,0.02*w,0.057*h);
ctx.strokeRect(0.48*w,0.929*h,0.02*w,0.057*h);
/*Gearlevel+Warnanzeige*/
ctx.strokeRect(0.82*w,0.857*h,0.026*w,0.1*h);
ctx.strokeRect(0.88*w,0.857*h,0.07*w,0.1*h);

ctx.fillStyle= "black";
/*Sidestick*/
ctx.arc(xs,ys,0.0571*h,0,2*Math.PI);
/*Pedale*/
ctx.rect(0.12*w,0.9*h,0.05*w,0.0714*h);
ctx.arc(0.17*w,0.9357*h,0.0357*h,0,2*Math.PI);
ctx.rect(0.06*w,0.9*h,0.05*w,0.0714*h);
ctx.arc(0.06*w,0.9357*h,0.0357*h,0,2*Math.PI);
/*Schubkontrolle*/
ctx.rect(0.455*w,y1,0.04*w,0.02857*h);
ctx.rect(0.505*w,y2,0.04*w,0.02857*h);
/*Landeklappenhebel+Bremsklappenhebel*/
ctx.rect(0.435*w,y3,0.030*w,0.0214*h);
ctx.arc(0.49*w,0.957*h,0.0214*h,0,2*Math.PI);
/*Gearlevel+Warnanzeige*/
ctx.rect(0.815*w,y4,0.036*w,0.0214*h);
ctx.fill();



drawArrow(0.13*w,0.9357*h,0.17*w,0.9357*h,c2);
drawArrow(0.1*w,0.9357*h,0.06*w,0.9357*h,c1);
ctx.strokeStyle = "white";

ctx.closePath();


   requestAnimationFrame(update);
}

var click1,click2,click3,click4,mx,my;

document.body.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
});
document.body.addEventListener("mousemove", function(e) {
if(click1){
  if(my>0.7285*h&&my<0.8714*h){
    y1=y1+e.offsetY-my;
  }
}
  if(click2){
    if(my>0.7285*h&&my<0.8714*h){
      y2=y2+e.offsetY-my;
    }
  }
  if(click3){
    if(my>0.9357*h&&my<0.9785*h){
      y3=y3+e.offsetY-my;
    }
  }
  if(click4){
    if(my>0.8642*h&&my<0.95*h){
      y4=y4+e.offsetY-my;
    }
  }
  my=e.offsetY;

});
document.body.addEventListener("mousedown", function(e) {
  mx=e.clientX;
  my=e.offsetY;
  if(mx > 0.455*w && mx < 0.495*w && my>y1 && my<(y1+0.0286*w)){
    click1=true;
  }
  if(mx > 0.505*w && mx < 0.545*w && my>y2 && my<(y2+0.0286*w)){
    click2=true;
  }
  if(mx > 0.435*w && mx < 0.465*w && my>y3 && my<(y3+0.0214*w)){
    click3=true;
  }
  if(mx > 0.815*w && mx < 0.851*w && my>y4 && my<(y4+0.0214*w)){
    click4=true;
  }

});
document.body.addEventListener("mouseup", function(e) {
  click1=click2=click3=click4=false;
});

window.addEventListener("load",function(){
    update();
});

function drawArrow(fromx, fromy, tox, toy,color){
                //variables to be used when creating the arrow
                var headlen = 1;

                var angle = Math.atan2(toy-fromy,tox-fromx);

                //starting path of the arrow from the start square to the end square and drawing the stroke
                ctx.beginPath();
                ctx.moveTo(fromx, fromy);
                ctx.lineTo(tox, toy);
                ctx.strokeStyle = color;
                ctx.lineWidth = 0.01*w;
                ctx.stroke();

                //starting a new path from the head of the arrow to one of the sides of the point
                ctx.beginPath();
                ctx.moveTo(tox, toy);
                ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),toy-headlen*Math.sin(angle-Math.PI/7));

                //path from the side point of the arrow, to the other side point
                ctx.lineTo(tox-headlen*Math.cos(angle+Math.PI/7),toy-headlen*Math.sin(angle+Math.PI/7));

                //path from the side point back to the tip of the arrow, and then again to the opposite side point
                ctx.lineTo(tox, toy);
                ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),toy-headlen*Math.sin(angle-Math.PI/7));

                //draws the paths created above
                ctx.strokeStyle = color;
                ctx.lineWidth = 0.01*w;
                ctx.stroke();
                ctx.fillStyle = color;
                ctx.fill();
            }

            function resizeCanvas() {
              canvas.width = window.innerWidth;
              canvas.height = window.innerHeight;
              w=canvas.width;
              h=canvas.height;
                // in this case just render when the window is resized.
                update();

            }

            window.addEventListener('resize', resizeCanvas, false);

            /*Knöpfe*/
            function showN() {
                //ctx.clearRect(0, 0, can.width, can.height);
                ctx.fillStyle = "green";
                ctx.beginPath();
                ctx.arc(0.18*w,41/70*h,1/70*h,0,Math.PI * 2, true);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
            function showN2() {
                //ctx.clearRect(0, 0, can.width, can.height);
                ctx.fillStyle = "red";
                ctx.beginPath();
                ctx.arc(0.18*w,41/70*h,1/70*h,0,Math.PI * 2, true);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
            function showN3() {
                //ctx.clearRect(0, 0, can.width, can.height);
                ctx.fillStyle = "green";
                ctx.beginPath();
                ctx.arc(0.28*w,41/70*h,1/70*h,0,Math.PI * 2, true);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
            function showN4() {
                //ctx.clearRect(0, 0, can.width, can.height);
                ctx.fillStyle = "red";
                ctx.beginPath();
                ctx.arc(0.28*w,41/70*h,1/70*h,0,Math.PI * 2, true);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
            function showN5() {
                //ctx.clearRect(0, 0, can.width, can.height);
                ctx.fillStyle = "green";
                ctx.beginPath();
                ctx.arc(0.38*w,41/70*h,1/70*h,0,Math.PI * 2, true);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
            function showN6() {
                //ctx.clearRect(0, 0, can.width, can.height);
                ctx.fillStyle = "red";
                ctx.beginPath();
                ctx.arc(0.38*w,41/70*h,1/70*h,0,Math.PI * 2, true);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
            function showN7() {
                //ctx.clearRect(0, 0, can.width, can.height);
                ctx.fillStyle = "green";
                ctx.beginPath();
                ctx.arc(0.48*w,41/70*h,1/70*h,0,Math.PI * 2, true);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
            function showN8() {
                //ctx.clearRect(0, 0, can.width, can.height);
                ctx.fillStyle = "red";
                ctx.beginPath();
                ctx.arc(0.48*w,41/70*h,1/70*h,0,Math.PI * 2, true);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
            function showN9() {
                //ctx.clearRect(0, 0, can.width, can.height);
                ctx.fillStyle = "green";
                ctx.beginPath();
                ctx.arc(0.62*w,41/70*h,1/70*h,0,Math.PI * 2, true);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
            function showN10() {
                //ctx.clearRect(0, 0, can.width, can.height);
                ctx.fillStyle = "red";
                ctx.beginPath();
                ctx.arc(0.62*w,41/70*h,1/70*h,0,Math.PI * 2, true);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
            function showN11() {
                //ctx.clearRect(0, 0, can.width, can.height);
                ctx.fillStyle = "green";
                ctx.beginPath();
                ctx.arc(0.76*w,41/70*h,1/70*h,0,Math.PI * 2, true);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
            function showN12() {
                //ctx.clearRect(0, 0, can.width, can.height);
                ctx.fillStyle = "red";
                ctx.beginPath();
                ctx.arc(0.76*w,41/70*h,1/70*h,0,Math.PI * 2, true);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }


            function incr() {
                n++;
                if(n%2==0){
                  showN();
            }
               else { showN2();
               }
             }
             function incr2() {
                 a++;
                 if(a%2==0){
                   showN3();
             }
                else { showN4();
                }
              }
              function incr3() {
                  b++;
                  if(b%2==0){
                    showN5();
              }
                 else { showN6();
                 }
               }
               function incr4() {
                   c++;
                   if(c%2==0){
                     showN7();
               }
                  else { showN8();
                  }
                }
                function incr5() {
                    d++;
                    if(d%2==0){
                      showN9();
                }
                   else { showN10();
                   }
                 }
                 function incr6() {
                     e++;
                     if(e%2==0){
                       showN11();
                 }
                    else { showN12();
                    }
                  }


              function showN13() {

                  // large, centered, bright green text
                  ctx.font = "18pt Helvetica";
                  ctx.textAlign = "right";
                  ctx.textBaseline = "right";
                  ctx.fillStyle = "rgb(255,222,173)";
                  ctx.clearRect(0.5*w,0.571*h,0.08*w,1/7*h);
                  // draw text at center, max length to fit on canvas
                  ctx.fillText(f, 0.57*w, 0.6*h, w - 2);

              }
              function showN14() {

                  // large, centered, bright green text
                  ctx.font = "18pt Helvetica";
                  ctx.textAlign = "right";
                  ctx.textBaseline = "right";
                  ctx.fillStyle = "rgb(255,222,173)";
                  ctx.clearRect(0.64*w,4/7*h,0.08*w,1/7*h);
                  // draw text at center, max length to fit on canvas
                  ctx.fillText(g, 0.71*w, 0.6*h, w - 2);

              }
              function showN15() {

                  // large, centered, bright green text
                  ctx.font = "18pt Helvetica";
                  ctx.textAlign = "right";
                  ctx.textBaseline = "right";
                  ctx.fillStyle = "rgb(255,222,173)";
                  ctx.clearRect(0.78*w,4/7*h,0.08*w,1/7*h);
                  // draw text at center, max length to fit on canvas
                  ctx.fillText(i, 0.85*w, 42/70*h, w - 2);

              }

              function incr7() {
                f=f+100;
                showN13();
              }

             function decr1() {
               f=f-100;
               showN13();
              }
              function incr8() {
                g=g+10;
                showN14();
              }

             function decr2() {
               g=g-10;
               showN14();
              }
              function incr9() {
                i=i+10;
                showN15();
              }

             function decr3() {
               i=i-10;
               showN15();
              }
