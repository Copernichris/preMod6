//square
document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("box").style = "height:200px; width:200px; background-color:orange; margin:25px";

});

document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("box").style = "height:150px; width:150px; background-color:blue; margin:25px";
});

document.getElementById("button3").addEventListener("click", function(){

    document.getElementById("box").style = "height:150px; width:150px; background-color:orange; margin:25px; opacity:0.5";
});

//dot
document.getElementById("buttonDot").addEventListener("click", function(){

    document.getElementById("circle").style = "height:15px; width:15px; border-radius:50%; background-color:black; opacity: 1;"
});

document.getElementById("buttonDotMove").addEventListener("click", function(){
    document.getElementById("circle").style = "height:150px; width:150px; border-radius:50%; background-color:black; opacity: 1;"
});

//reset
document.getElementById("button4").addEventListener("click", function(){

    document.getElementById("box").style = "height:150px; width:150px; background-color:orange; margin:25px";
    document.getElementById("circle").style = "height:15px; width:15px; border-radius:50%; background-color:black; opacity: 0;"

});