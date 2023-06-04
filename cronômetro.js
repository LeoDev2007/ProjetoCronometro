window.onload = ()=>{
    const timer = document.getElementById('timer');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');

    let startTime, interval;

    startButton.addEventListener('click', ()=>{
        startTime = Date.now();
        interval = setInterval(updateTimer, 1000);
    });

    stopButton.addEventListener('click', ()=>{
        clearInterval(interval);
    });

    resetButton.addEventListener('click', ()=>{
        clearInterval(interval);
        timer.textContent = '00:00:00'
    });

    const updateTimer = ()=>{
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        const horas = Math.floor(elapsedTime / 3600);
        const minutos = Math.floor((elapsedTime % 3600) / 60);
        const segundos = elapsedTime % 60;

        timer.textContent = `${formatTime(horas)}:${formatTime(minutos)}:${formatTime(segundos)}`;
    };

    const formatTime = (time) =>{
        return time < 10 ? `0${time}` : time;
    };
};