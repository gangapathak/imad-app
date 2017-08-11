//console.log('Loaded!');
//change content 
//var element = document.getElementById("main-text");
//element.innerHTML = "Hi I am Madi";

//move the image when user click
//var img = document.getElementById('abc');
// img.onclick = function() {
  //  image.style.marginLeft = '100px';
//};
//counter code
var button = document.getElementById('counter');
//make a request to the counter Endpoint
var counter = 0;
button.onclick = function(){
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};
