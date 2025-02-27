document.onkeydown = switchclock;
setInterval(Time, 100);
setInterval(RotatePosters, 10000);
let jsonfiles = [
    "clock/scripts/defaultclock.json",
    "clock/scripts/analogclock.json",
    "clock/scripts/cyberpunkdigital.json",
    "clock/scripts/cyberpunkanalog.json",
    "clock/scripts/neonanalog.json",
    "clock/scripts/disneydigital.json",
    "clock/scripts/disneydigital2.json",
    "clock/scripts/fireplace.json",
    "clock/scripts/fireplace2.json",
    "clock/scripts/fireplace3.json"];
let posters = [
    "clock/scripts/posters.json"
];
let index = 0;
let feature = 0;
let posterrotation = 0;
let prevhour;
let prevminute;
let prevsecond;
let totalminute;
let totalsecond;
let hour = "";
let minute = "";
let second = "";
function switchclock(key){
    if(key.key == "ArrowRight"){
        if(index == jsonfiles.length - 1)
        index = 0;
        else{
            index++;
        }
    }   
    if(key.key == "ArrowLeft"){
        if(index == 0){
            index = jsonfiles.length - 1;
        }
        else{
            index--;
        }
    }
    if(key.key == "ArrowUp"){
        if(feature == 1)
        feature = 0;
        else{
            feature++;
        }
    }  
    if(key.key == "ArrowDown"){
        if(feature == 0){
            feature = 1;
        }
        else{
            feature--;
        }
    }
    console.log(feature)
}
function Time(){
    const currenttime = new Date();
    fetch(jsonfiles[index])
    .then(res => res.json())
    .then(data => {  
        if(feature == 0){
            document.getElementById("background").style = data.background;
            document.getElementById("posterbackground").style = "";
            if(data.type == "analog"){
                hour = currenttime.getHours();
                minute = currenttime.getMinutes();
                second = currenttime.getSeconds();
                document.getElementById("digit1").src = "";
                document.getElementById("digit2").src = "";
                document.getElementById("colon").src = "";
                document.getElementById("digit3").src = "";
                document.getElementById("digit4").src = "";
                document.getElementById("posterdigit1").src = "";
                document.getElementById("posterdigit2").src = "";
                document.getElementById("postercolon").src = "";
                document.getElementById("posterdigit3").src = "";
                document.getElementById("posterdigit4").src = "";
                document.getElementById("analogclock").src = data.analogclock;
                document.getElementById("hourpointer").src= data.hourpointer;
                document.getElementById("minutepointer").src = data.minutepointer;
                document.getElementById("posteranalogclock").src = "";
                document.getElementById("posterhourpointer").src= "";
                document.getElementById("posterminutepointer").src = "";
                if(prevhour == null){
                    document.getElementById("hourpointer").style = "transform: rotate("+(hour*30)+(minute*0.5)+"deg);";
                    prevhour = hour;
                    totalminute = minute + (hour*60)
                    totalsecond = second + (totalminute*60)
                }
                if(prevminute == null){
                    document.getElementById("minutepointer").style = "transform: rotate("+(minute*6)+(second*0.1)+"deg);";
                    prevminute = minute;
                }
                if(prevsecond == null){
                    prevsecond = second;
                }
                if(prevsecond != second){
                    document.getElementById("minutepointer").style = "transform: rotate("+(totalsecond*0.1)+"deg);";
                    document.getElementById("hourpointer").style = "transform: rotate("+(totalminute*0.5)+"deg);";
                    prevsecond = second;
                    totalsecond++;
                    
                }
                if(prevminute != minute){
                    prevminute = minute;
                    totalminute++;
                }
                console.log(totalminute);
                console.log(totalsecond);
            } 
            if(data.type == "digital"){
                document.getElementById("posterdigit1").src = "";
                document.getElementById("posterdigit2").src = "";
                document.getElementById("postercolon").src = "";
                document.getElementById("posterdigit3").src = "";
                document.getElementById("posterdigit4").src = "";
                document.getElementById("analogclock").src = "";
                document.getElementById("hourpointer").src = "";
                document.getElementById("minutepointer").src = "";
                document.getElementById("posteranalogclock").src = "";
                document.getElementById("posterhourpointer").src= "";
                document.getElementById("posterminutepointer").src = "";
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
                document.getElementById("colon").src = data.colon;
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
            } 
        }
        if(feature == 1){
            document.getElementById("posterbackground").style = data.background;
            if(data.type == "analog"){
                hour = currenttime.getHours();
                minute = currenttime.getMinutes();
                second = currenttime.getSeconds();
                document.getElementById("digit1").src = "";
                document.getElementById("digit2").src = "";
                document.getElementById("colon").src = "";
                document.getElementById("digit3").src = "";
                document.getElementById("digit4").src = "";
                document.getElementById("posterdigit1").src = "";
                document.getElementById("posterdigit2").src = "";
                document.getElementById("postercolon").src = "";
                document.getElementById("posterdigit3").src = "";
                document.getElementById("posterdigit4").src = "";
                document.getElementById("analogclock").src = "";
                document.getElementById("hourpointer").src= "";
                document.getElementById("minutepointer").src = "";
                document.getElementById("posteranalogclock").src = data.analogclock;
                document.getElementById("posterhourpointer").src= data.hourpointer;
                document.getElementById("posterminutepointer").src = data.minutepointer;
                if(prevhour == null){
                    document.getElementById("posterhourpointer").style = "transform: rotate("+(hour*30)+(minute*0.5)+"deg);";
                    prevhour = hour;
                    totalminute = minute + (hour*60)
                    totalsecond = second + (totalminute*60)
                }
                if(prevminute == null){
                    document.getElementById("posterminutepointer").style = "transform: rotate("+(minute*6)+(second*0.1)+"deg);";
                    prevminute = minute;
                }
                if(prevsecond == null){
                    prevsecond = second;
                }
                if(prevsecond != second){
                    document.getElementById("posterminutepointer").style = "transform: rotate("+(totalsecond*0.1)+"deg);";
                    document.getElementById("posterhourpointer").style = "transform: rotate("+(totalminute*0.5)+"deg);";
                    prevsecond = second;
                    totalsecond++;
                    
                }
                if(prevminute != minute){
                    prevminute = minute;
                    totalminute++;
                }
                console.log(totalminute);
                console.log(totalsecond);
            } 
            if(data.type == "digital"){
                document.getElementById("digit1").src = "";
                document.getElementById("digit2").src = "";
                document.getElementById("colon").src = "";
                document.getElementById("digit3").src = "";
                document.getElementById("digit4").src = "";
                document.getElementById("analogclock").src = "";
                document.getElementById("hourpointer").src = "";
                document.getElementById("minutepointer").src = "";
                document.getElementById("posteranalogclock").src = "";
                document.getElementById("posterhourpointer").src= "";
                document.getElementById("posterminutepointer").src = "";
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
                document.getElementById("postercolon").src = data.colon;
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
                        document.getElementById("posterdigit1").src = digits[i];  
                    }
                }
                for(i = 0; i < 10; i++){
                    if(hour[1] == i){
                        document.getElementById("posterdigit2").src = digits[i];  
                    }
                }
                for(i = 0; i < 7; i++){
                    if(minute[0] == i){
                        document.getElementById("posterdigit3").src = digits[i];  
                    }
                }
                for(i = 0; i < 10; i++){
                    if(minute[1] == i){
                        document.getElementById("posterdigit4").src = digits[i];  
                    }
                }
            } 
        }
    })
}
function RotatePosters(){
    fetch(posters[0])
    .then(res => res.json())
    .then(data => {
        if(feature == 1){
           document.getElementById("poster").src = data.posters[posterrotation];
           if(posterrotation < posters.length+1){
                posterrotation++;
           }
           else{
                posterrotation = 0;
           }
        }
        else{
            document.getElementById("poster").src = ""; 
        }
    });
}