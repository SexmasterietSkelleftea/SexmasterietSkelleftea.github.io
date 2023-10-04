let digit1 = document.getElementById("digit1");
let digit2 = document.getElementById("digit2");
let colon = document.getElementById("colon");
let digit3 = document.getElementById("digit3");
let digit4 = document.getElementById("digit4");


function Time(){
    const currenttime = new Date();
    fetch("clock/scripts/defaultclock.json")
    .then(res => res.json())
    .then(data => {
    document.getElementById("colon").src = data.colon;
    document.getElementById("background").style = data.background;
    let hour = "";
    let minute = "";
    if(currenttime.getHours() < 10){
        hour =  "0".concat(currenttime.getHours()).split("");
    }
    else{
        hour = currenttime.getHours().toString().split("");
    }
    if(currenttime.getMinutes() < 10){
        minute =  "0".concat(currenttime.getMinutes()).split("");
    }
    else{
        minute = currenttime.getMinutes().toString().split("");
    }
    console.log(hour);
    console.log(minute);
    let digits = [
        data.zero, 
        data.one, 
        data.two, 
        data.three, 
        data.four, 
        data.five, 
        data.six, 
        data.seven, 
        data.eight, 
        data.nine];
    for(i = 0; i < 3; i++){
        if(hour[0] == i){
            document.getElementById("digit1").src = digits[i];  
        }
    }
    for(i = 0; i < 10; i++){
        if(hour[1] == i){
            document.getElementById("digit2").src = digits[i];  
        }
    }
    for(i = 0; i < 7; i++){
        if(minute[0] == i){
            document.getElementById("digit3").src = digits[i];  
        }
    }
    for(i = 0; i < 10; i++){
        if(minute[1] == i){
            document.getElementById("digit4").src = digits[i];  
        }
    }
    });
}
setInterval(Time, 1000);



