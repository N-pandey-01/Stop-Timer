const stopWatch = document.getElementById("clockTimer")
const showEvent = document.getElementById("showEvent")
let countDown = 0;
let intervalId;
let para;
//* ========== Start ===========

const startBnt = () => {
    // value ko atop krne ke liye hame set interval ki id lagte h 

    intervalId = setInterval(() => {
        stopWatch.innerText = countDown++;
    }, 1000);

};

//* ========== Stop ===========

const stopBtn = () => {

    clearInterval(intervalId)
}

//* ========== Reset ===========

const resetBtn = () => {
    countDown = 0;
    stopWatch.innerText = countDown;
    clearInterval(intervalId)
}

//* ========== Get Time ===========

const getBnt = () => {
    para = document.createElement("p")
    para.innerText = `The Value is =${countDown - 1}`;
    showEvent.append(para)
}

//* ========== Clear Time ===========

const clearBnt = () => {
    showEvent.innerHTML = "";
}
document.getElementById("startBnt").addEventListener("click", startBnt);
document.getElementById("stopBtn").addEventListener("click", stopBtn)
document.getElementById("resetBtn").addEventListener("click", resetBtn)
document.getElementById("getBnt").addEventListener("click", getBnt)
document.getElementById("clearBnt").addEventListener("click", clearBnt)