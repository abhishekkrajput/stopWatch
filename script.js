let minutes = 0;
let seconds = 0;
let centiseconds = 0;
let interval = 0;

let start = document.querySelector(".start");
let pause = document.querySelector(".pause");
let reset = document.querySelector(".reset");
let resume = document.querySelector(".resume");


let beginWatch = () => {
    centiseconds++;
    if (centiseconds === 100) {
        seconds++;
        centiseconds = 0;
    }
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }

    if (minutes < 10)
        document.querySelector(".minutes").innerHTML = `0${minutes}: `;
    else
        document.querySelector(".minutes").innerHTML = `${minutes}: `;

    if (seconds < 10)
        document.querySelector(".seconds").innerHTML = `0${seconds}.`;
    else
        document.querySelector(".seconds").innerHTML = `${seconds}.`;

    if (centiseconds < 10)
        document.querySelector(".centiseconds").innerHTML = `0${centiseconds}`;
    else
        document.querySelector(".centiseconds").innerHTML = `${centiseconds}`;

}





start.addEventListener("click", () => {
    interval = setInterval(beginWatch, 10);
    start.style.display = "none";
    pause.style.display = "inline-block";
    reset.style.display = "inline-block";
    resume.style.display = "none";
})

pause.addEventListener("click", () => {
    clearInterval(interval);
    start.style.display = "none";
    pause.style.display = "none";
    reset.style.display = "inline-block";
    resume.style.display = "inline-block";
})

reset.addEventListener("click", () => {
    clearInterval(interval);
    centiseconds = -1;
    minutes = 0;
    seconds = 0;
    beginWatch();
    start.style.display = "inline-block";
    pause.style.display = "none";
    reset.style.display = "none";
    resume.style.display = "none";
})

resume.addEventListener("click", () => {
    interval = setInterval(beginWatch, 10);
    start.style.display = "none";
    pause.style.display = "inline-block";
    reset.style.display = "inline-block";
    resume.style.display = "none";
})


document.querySelector(".changeMode").addEventListener("click", () => {
    if (document.body.classList.contains("light")) {
        document.body.classList.replace("light","dark");
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        document.body.classList.replace("dark","light");
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
})