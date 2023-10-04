document.onkeydown = switchclock;
setInterval(Time, 1000);
let jsonfiles = [
    "clock/scripts/defaultclock.json",
    "clock/scripts/testclock.json"];
let index = 0;

function switchclock(key){
    key = key
    if(key.keyCode == 39){
        if(index == jsonfiles.length - 1)
        index = 0;
        else{
            index++;
        }
    }
    
    if(key.keyCode == 37){
        if(index == 0){
            index = jsonfiles.length - 1;
        }
        else{
            index--;
        }
    }
}
function Time(){
    const currenttime = new Date();
    fetch(jsonfiles[index])
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




