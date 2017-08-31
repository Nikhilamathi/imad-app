console.log('Loaded!');
//
var element = document.getElementById('Main-txt');
element.innerHTML= 'Nikhila'
// move the image when we click 
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft= marginLeft + 10;
    img.style.marginLeft=marginLeft + 'px';
}
img.onclick = function(){
    var interval=setinterval(moveRight,100);
    //img.style.marginLeft= '100px';
}