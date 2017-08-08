console.log('Loaded!');
//change content 
var element = document.getElementById("main-text");
element.innerHTML = "new value";
//move the image when user click
var img = document.getElementById('abc');
 marginleft = 0;
function moveRight() {
    marginleft = marginleft + 10;
    img.style.marginleft = marginleft + 'px';
}
img.onclick = function (){
    var interval = setInterval(moveRight , 100);
};