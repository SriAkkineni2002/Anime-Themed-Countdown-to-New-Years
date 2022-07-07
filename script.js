const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const year = document.getElementById('year');
const loading = document.getElementById('loading');
const days = document.getElementById('days');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

year.innerText = currentYear + 1;

function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const up = Math.floor(diff / 1000 / 60 / 60 / 24);
  const upd = Math.floor(diff / 1000 / 60 / 60) % 24;
  const upda = Math.floor(diff / 1000 / 60) % 60;
  const updat = Math.floor(diff / 1000) % 60;

  days.innerHTML = up;
  hours.innerHTML = upd < 10 ? '0' + upd : upd;
  minutes.innerHTML = upda < 10 ? '0' + upda : upda;
  seconds.innerHTML = updat < 10 ? '0' + updat : updat;
}
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);
setInterval(updateCountdown, 1000);
