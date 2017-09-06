//console.log('Loaded!');
//
//var element = document.getElementById('Main-txt');
//element.innerHTML= 'Nikhila'
// move the image when we click 
//var img=document.getElementById('madi');
//var marginLeft=0;
//function moveRight(){
   // marginLeft= marginLeft + 5;
    //img.style.marginLeft=marginLeft + 'px';
//}
//img.onclick = function(){
   // var interval=setInterval(moveRight,50);
    //img.style.marginLeft= '100px';
//}
button.onclick = function (){
    
var button = document.getElementById('counter');

//make request to counter endpoint 
var request = new XMLHttpRequest();

//Capture the response and store it in a variable
request.onreadystatechange=function()
{
  if ( request.readyState==XMLHttpRequest.DONE)
  {
      //take some action
      if (request.status==200)
     
      {
          var counter = request.responseText();
          var span = document.getElementById('counts');
          span.innerHTML =counter.toString();
          
      }
  }
};
  //make request
  
 request.open("GET",'http://snikhilamathi.imad.hasura-app.io/counter',true);
 request.send(null);
};

