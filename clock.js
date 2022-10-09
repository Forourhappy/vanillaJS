const clock = document.querySelector('#clock');

function getClock() {
  const today = new Date();
  let hour = today.getHours();
  const min = String(today.getMinutes()).padStart(2, '0');
  let daytime = '오전';

  if(hour > 12){
    daytime = '오후';
    hour = String(hour-12).padStart(2, '0');
  }else{
    daytime = '오전';
  }
  clock.innerText = `${daytime} ${hour} : ${min}`
}

getClock();
setInterval(getClock, 1000);