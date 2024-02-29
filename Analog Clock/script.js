let numberHour = document.getElementById('number-hours');
let barSeconds = document.getElementById('bar-seconds');
let numberElement = [];
let barElement = [];
for (let i = 1; i <= 12; i++) {
    numberElement.push(
        `<span style='--index:${i}'><p>${i}</p></span>`
    )
}
numberHour.insertAdjacentHTML('afterbegin', numberElement.join(''))

for (let j = 1; j <= 60; j++) {
    barElement.push(
        `<span style='--index:${j}'><p></p></span>`
    )
}
barSeconds.insertAdjacentHTML('afterbegin', barElement.join(''))

const handHour = document.querySelector('.hand.hour');
const handMinute = document.querySelector('.hand.minute');
const handSecond = document.querySelector('.hand.second');

function updateTime() {
    let date = new Date();
    let crntHr = date.getHours();
    let crntMin = date.getMinutes();
    let crntSec = date.getSeconds();
    
    handSecond.style.transform=`rotate(${crntSec*6}deg)`
    handMinute.style.transform=`rotate(${crntMin*6}deg)`
    handHour.style.transform=`rotate(${crntHr*30+crntMin/2}deg)`
}
setInterval(updateTime,500)