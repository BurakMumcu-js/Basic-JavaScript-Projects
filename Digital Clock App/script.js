const displayTime = () => {
    let date = new Date;
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let timeLine = '';


hour < 12 ? timeLine = 'AM' : timeLine = 'PM';

if(hour>12){
    hour-=12;
}

let padHour = String(hour).padStart(2,'0');
let padMinute = String(minute).padStart(2,'0');
let padSecond = String(second).padStart(2,'0');

time.textContent = `${padHour}:${padMinute}  ${timeLine}`;

requestAnimationFrame(displayTime);

}

displayTime();