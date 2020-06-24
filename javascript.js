var circleId = "Circle"
var count=5;
var createdTime;
var clickedTime;
var reactionTime = 0;

function spawnAim(){
    var time = Math.random();
    time = time * 1000;
    setTimeout(function(){
        var top=Math.random();
        top = top*300;
        var left = Math.random();
        left = left*500;
        document.getElementById(circleId).style.top = top + "px";
        document.getElementById(circleId).style.left = left + "px";
        document.getElementById(circleId).style.display = "block";
        createdTime = Date.now();
    }, time);

    
    
}

document.getElementById(circleId).onclick = function(){
    clickedTime = Date.now();
    reactionTime = (clickedTime - createdTime)/1000;
    document.getElementById("reaction").innerHTML = reactionTime + " sec";
    this.style.display = "none";
    
    spawnAim();
    
}

while(count != 0){

    if(reactionTime != 0){
        alert("normal time")
    }
    else{
        alert(count--);
    }
    spawnAim();
}





