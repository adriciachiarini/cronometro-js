let startTime = null;
let cron = null;
let h1 = document.getElementById('timer')

function start() {
  if (cron) return;
  startTime = Date.now() - (startTime ? (Date.now() - startTime) : 0); 
  cron = setInterval(() => {
    let elapsed = Date.now() - startTime;
    let totalSeconds = Math.floor(elapsed / 1000);
    let ms = elapsed % 1000;

    let hrs = Math.floor(totalSeconds / 3600);
    let mins = Math.floor((totalSeconds % 3600) / 60);
    let secs = totalSeconds % 60;

    hrs = hrs < 10 ? '0' + hrs : hrs;
    mins = mins < 10 ? '0' + mins : mins;
    secs = secs < 10 ? '0' + secs : secs;

    
    let msStr = ms.toString().padStart(3, '0');

    h1.innerHTML = `${hrs}:${mins}:${secs}.${msStr}`;
  }, 50); 
}

function stop() {
  clearInterval(cron);
  cron = null;
}

function reset() {
  stop();
  startTime = null;
  h1.innerHTML = '00:00:00.000';
}
