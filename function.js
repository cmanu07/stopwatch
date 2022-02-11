let min = 00
let sec = 00
let tens = 00
let getMin = document.querySelector('.minutes')
let getSec = document.querySelector('.seconds')
let getTens = document.querySelector('.tens')
let interval;

//START
const startT = document.querySelector('.start')
const start = () => {
    tens++
if (tens <= 9) {
    getTens.innerHTML = `${tens}0`
}
if (tens > 9) {
    getTens.innerHTML = tens
    sec++
    getSec.innerHTML = `0${sec}`
    tens = 0
    getTens.innerHTML = `${tens}0`
}
if (sec > 9) {
    getSec.innerHTML = sec
}
if (sec > 59) {
    min++
    getMin.innerHTML = `0${min}`
    sec = 0
    getMin.innerHTML = `0${sec}`
}
if (min > 9) {
    getMin.innerHTML = min
}}
const startFunct = () => {
    clearInterval(interval)
    interval = setInterval(start, 100)
}
startT.addEventListener('click', startFunct)

//STOP
const stopT = document.querySelector('.stop')
const stopFunct = () => clearInterval(interval)
stopT.addEventListener('click', stopFunct)

//RESET
const resetT = document.querySelector('.reset')
const resetFunct = () => {
         clearInterval(interval)
            min = "00"
        getMin.innerHTML = min
            sec = "00"
        getSec.innerHTML = sec
            tens = "00"
        getTens.innerHTML = tens
}
resetT.addEventListener('click', resetFunct)