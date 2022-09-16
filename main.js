const buttonStart = document.querySelector('.start');
const buttonLap = document.querySelector('.lap');
const buttonStop = document.querySelector('.stop');
const resolts = document.querySelector('.results');
const clear = document.querySelector('.clear');
const outerCicle = document.querySelector('.outer-cicle');


const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const millisecondElement = document.querySelector('.millisecond');


let millisecond = 0;
let second = 0;
let minute = 0;
let interval;
let orderItem = 1;



buttonStart.addEventListener('click', function (e) {

    clearInterval(interval);
    interval = setInterval(startTimer, 10);


    if (buttonStart.innerText === 'Start') {
        buttonStart.innerText = 'Pause';
        buttonStart.classList.add('pause');
        outerCicle.classList.add('animation-bg');

    } else if (buttonStart.classList.contains('pause')) {
        clearInterval(interval);
        buttonStart.innerText = 'Start';
        buttonStart.classList.remove('pause');

    }

    if (e.target.textContent === 'Start') {
        outerCicle.style.animationPlayState = 'paused';
    } else if (e.target.textContent === 'Pause') {
        outerCicle.style.animationPlayState = 'running';
    }

    clear.classList.remove('displayNone');
})

buttonStop.addEventListener('click', function () {
    if (buttonStart.classList.contains('pause')) {
        buttonStart.innerText = 'Start';
        buttonStart.classList.remove('pause');
    }

    clear.classList.add('displayNone');
    outerCicle.classList.remove('animation-bg');
    resolts.innerHTML = '';
    orderItem = 1;
    stopTimer()

})

buttonLap.addEventListener('click', function () {
    if (millisecond === 0 && second === 0 && minute === 0) return;
    lap();
    clear.classList.remove('displayNone');

})

clear.addEventListener('click', function () {
    resolts.innerText = '';
    orderItem = 1;

})



function lap() {
    const li = document.createElement('li');
    const number = document.createElement('span');
    const order = document.createElement('span');


    li.setAttribute('class', 'resolts-item');
    number.setAttribute('class', 'resolts-number');
    order.setAttribute('class', 'order');

    number.innerText = `${minute <= 9 ? '0' + minute : minute} : ${second <= 9 ? '0' + second : second} : ${millisecond <= 9 ? millisecond + '0' : millisecond}`;




    order.innerText = `#${orderItem++}`;

    li.append(order, number);
    resolts.prepend(li);



}

function startTimer() {
    millisecond++;

    if (millisecond < 9) {
        millisecondElement.textContent = millisecond + '0';
    }
    if (millisecond > 9) {
        millisecondElement.textContent = millisecond;
    }
    if (millisecond > 99) {
        second++;
        secondElement.innerText = '0' + second;
        millisecond = 0;
        millisecondElement.innerText = '0' + millisecond;
    }

    if (second < 9) {
        secondElement.textContent = '0' + second;
    }
    if (second > 9) {
        secondElement.textContent = second;
    }
    if (second > 59) {
        minute++;
        minuteElement.innerText = '0' + minute;
        second = 0;
        secondElement.innerText = '0' + second;
    }

    if (minute < 9) {
        minuteElement.textContent = '0' + minute;
    }
    if (minute > 9) {
        minuteElement.textContent = minute;
    }
    if (minute > 59) {
        minute = 0;
        minuteElement.innerText = '0' + minute;
    }
}

function stopTimer() {
    clearInterval(interval);
    millisecond = 0;
    second = 0;
    minute = 0;

    minuteElement.innerText = '00'
    secondElement.innerText = '00'
    millisecondElement.innerText = '00'
}

function leapNumStart() {
    if (secondElement.innerText !== '0') {
        secondElement.classList.add('leapnum');

    }

}
function leapNumEnd() {
    if (secondElement.classList.contains('leapnum')) {
        secondElement.classList.remove('leapnum');

    }
}

