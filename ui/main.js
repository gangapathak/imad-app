console.log('Loaded!');
//change content 
var element = document.getElementById("main-text");
element.innerHTML = "new value";
//move the image when user click
var img = document.getElementByID("madi");
img.onclick = function() {
    img.style.marginleft = '100px';
}