let countDown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
/* Step 01 - Create function timer to start */
function timer(seconds) {
  /* Why not using setInterval anymore? Because it is not stable, sometimes it stops running */
  /* Step 02 - declare a variable of present time */
  const now = Date.now(); // gives us timestamp
  /* Step 03 - declare a variable of then (now + seconds * 1000), console log now and then */
  const then = now + seconds * 1000;
  // console.log({now, then});
  displayTimeLeft(seconds);
  displayEndTime(then);

  /* Step 04 - use setInterval to display every seconds = Math.round((then-Date.now())/1000) */
  setInterval(()=> {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
  /* Step 05 - check to see if we should stop, otherwise it will display negative */
    if(secondsLeft < 0) {
  /* Step 06 - store the setInterval to a variable */
      clearInterval(countDown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
} // end function timer 

  /* Step 07 - create a separate function to display time immediately */ 
function displayTimeLeft(seconds){
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  /* Step 08 - queryselect .display__time-left */
  const display = `${minutes}:${remainderSeconds  < 10 ? '0': '' }${remainderSeconds}`;
  /* Step 09 - display to textContent */
  document.title = display;
  timerDisplay.textContent = display;
  // console.log({minutes, remainderSeconds});
} // end displayTimeLeft 

  /* Step 10 - create a function that displayTimeLeft */
function displayEndTime(timestamp){
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  
  endTime.textContent = `Be Back at ${adjustedHour}:${minutes < 10 ? '0': ''}${minutes}`;
} // end displayEndTime
  /* Step 11 - in DisplayEngTime, set a time object and get days, time, frm */