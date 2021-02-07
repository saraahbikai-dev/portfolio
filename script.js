var radius = 240;
var autorotate = true;
var rotateSpeed =-60;

var imgWidth = 120;
var imgHeight= 170;

var obox = document.getElementById('drag-container');
var ospin = document.getElementById('spin-container');
var aImg = ospin.getElementByTagName('img');
var aVid = ospin.getElementByTagName('video');
var aEle =[...aImg,...aVid];
ospin.style.width = imgWidth + "px";
ospin.style.height = imgWidth + "px";

var ground  = document.getElementById('ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px"; 



function init(delayTime){
  for(var i = 0; i<aEle.length; i++) {
  aEle[i].style.transform = "rotateY"("+(i *(360/aEle.length)) + "deg) translate";
  aEle[i].style.transition = "transform 1s";
  aEle[i].style.transitionDelay = delayTime || (aEle.length -i)/4 + "s";  
  }
}

function applyTransform(obj){
  if(tY > 180) =180;
  if(tY < 0) = 0;
  obj.style.transform = "rotateX("+(-tY) + "deg) rotateY(" +(tX) + "deg";
  }
  
  var sX, sY, nY, desX = 0,
  desY= 0;
  tX = 0;
  tY =10;
  
  if(autoRotate){
   var animationName = (rotateSpeed>0 ? 'spin' :'spinRevert')
   ospin.style.animation =`${animationName}${Math.abs(rotateSpeed)} s infinite linear `;
   
  }

document.onpointerdown =  function(e){
   clearInterval(obox.timer);
   e = e || window.event;
   var sX = e.clientX;
   sY = e.clientY;
   
   this.onpointermove = function(e){
   e = e| window.event;
   var nX = e.clientX;
   nY = e.clientY;
   desX = nX -sX;
   desY = nY-sY;
   tX += desX * 0.1;
   tY += desY * 0.1;
   applyTransform(obox);
   sX = nX
   sY =nY;
   
};
this.onpointerup = function( e ={
     obox.timer = setInterval(function(){
     desX *=0.95
     desX *=0.95
     tX = += desX * 0.01
     tY = += desY * 0.01
     applyTransform(obox);
     playSpin(false);
     if(Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
     clearInterval(obox.timer);
     playSpin(true);
    
     }
     
     }, 17);
     this.onpointermove =  this.onpointerup = null;         
})

return false
};

document.onmousewheel = function (e){
 e = e || window.event;
 var d = e.wheelDelta / 20 || -e.detail;
  radius +* d;
  init(1);
  
}
