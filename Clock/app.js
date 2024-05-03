var hours=document.getElementById(hour);
var mins=document.getElementById(minute);
var seconds=document.getElementById(second);

setInterval(function(){
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    if(currentDate.getHours()<12){
    am_pm.innerText="am"
    }else{
        am_pm.innerText="pm"
    }
    hour.innerText = currentDate.getHours();
    minute.innerText = currentDate.getMinutes();
    second.innerText = currentDate.getSeconds();

}, 1000);
