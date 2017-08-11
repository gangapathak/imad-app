//console.log('Loaded!');
//change content 
//var element = document.getElementById("main-text");
element.innerHTML = "Hi I am Madi";

//move the image when user click
//var img = document.getElementById('abc');
// img.onclick = function() {
  //  image.style.marginLeft = '100px';
//};
var button = document.getElementById('counter');
button.onclick = function(){
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};
