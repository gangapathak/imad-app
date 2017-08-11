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
//var counter = 0;
button.onclick = function(){
  //  counter = counter + 1;
    //var span = document.getElementById('count');
    //span.innerHTML = counter.toString();
//};
//Make a request to counter Endpoint. Make a request to object
var request = new XMLHttpRequest();
//Capture the response and store it in a variable
request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE){
        // Take some action
        if(request.status === 200){
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
            
       // }
   // }
//}
}
}
//Not done yet
};
//Make a request
request.open('GET', 'http://pathakganga11.imad.hasura-app.io/counter', true);
request.send(null);
};