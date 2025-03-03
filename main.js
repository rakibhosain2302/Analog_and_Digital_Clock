let hr = document.querySelector('#hours');
let mn = document.querySelector('#minutes');
let sc = document.querySelector('#seconds');

setInterval(() => {
    let day = new Date();
    let hour = day.getHours() * 30;
    let minutes = day.getMinutes() * 6;
    let seconds = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hour + (minutes / 12)}deg)`;
    mn.style.transform = `rotateZ(${minutes}deg)`;
    sc.style.transform = `rotateZ(${seconds}deg)`;
}, 1000);


// Digital Clock

let dcHours = document.querySelector('#dchour');
let dcMinutes = document.querySelector('#dcminutes');
let dcSeconds = document.querySelector('#dcseconds');
let AmPm = document.querySelector('#AmPm');

setInterval(() => {
    let day = new Date();
    let Hours = day.getHours();
    let Minutes = day.getMinutes();
    let Seconds = day.getSeconds();
    let AmPmText = Hours >= 12 ? "PM" : "AM";

    if (Hours > 12) {
        Hours -= 12;
    }

    // Leading zero add করা
    Hours = (Hours < 10) ? "0" + Hours : Hours;
    Minutes = (Minutes < 10) ? "0" + Minutes : Minutes;
    Seconds = (Seconds < 10) ? "0" + Seconds : Seconds;

    dcHours.innerHTML = Hours;
    dcMinutes.innerHTML = Minutes;
    dcSeconds.innerHTML = Seconds;
    AmPm.innerHTML = AmPmText;
}, 1000); 
