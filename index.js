const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hoursHand = document.querySelector('.hour-hand');
function timer(){
    const now = new Date;
    const second = now.getSeconds();
    const secondDeg = (second * 6) +90;
    secondHand.style.transform = `rotate(${secondDeg}deg)`

    const minute = now.getMinutes();
    const minuteDeg = (minute * 6) + 90;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`
    
    const hour = now.getHours();
    const hourDeg = (30*hour + minute/2) +90;
    hoursHand.style.transform = `rotate(${hourDeg}deg)`

}

setInterval(timer , 1000);