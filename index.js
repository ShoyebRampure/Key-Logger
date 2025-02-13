const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

let loggingActive = false;

startBtn.addEventListener("click", () => {
    if (!loggingActive) {
        document.addEventListener("keydown", handleDown);
        document.addEventListener("keyup", handleUp);
        loggingActive = true;

        startBtn.disabled = true;
        stopBtn.disabled = false;
        stopBtn.classList.add("enabled");
    }
});

stopBtn.addEventListener("click", () => {
    if (loggingActive) {
        document.removeEventListener("keydown", handleDown);
        document.removeEventListener("keyup", handleUp);
        loggingActive = false;

        logDiv.textContent = "No key pressed";
        stateDiv.textContent = "Key state";

        logDiv.classList.remove("active");
        stateDiv.classList.remove("active");

        startBtn.disabled = false;
        stopBtn.disabled = true;
        stopBtn.classList.remove("enabled");
    }
});

function handleDown(e) {
    logDiv.textContent = `Key Pressed: ${e.key}`;
    stateDiv.textContent = "Key is DOWN";

    logDiv.classList.add("active");
    stateDiv.classList.add("active");
}

function handleUp(e) {
    logDiv.textContent = `Key Released: ${e.key}`;
    stateDiv.textContent = "Key is UP";

    logDiv.classList.add("active");
    stateDiv.classList.add("active");

    setTimeout(() => {
        logDiv.classList.remove("active");
        stateDiv.classList.remove("active");
    }, 500);
}
