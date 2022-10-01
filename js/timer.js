let countdownDate = new Date("2022-08-10T16:00:00Z").getTime();


function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}


let x = setInterval(function() {
  // Get current date and time.
  let now = new Date().getTime();

  // Calculate difference.
  let distance = countdownDate - now;

  // Time calculations for days, hours, minutes and seconds.
  let days = pad(Math.floor(distance / (1000 * 60 * 60 * 24)).toString(), 2);
  let hours = pad(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString(), 2);
  let minutes = pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString(), 2);
  let seconds = pad(Math.floor((distance % (1000 * 60)) / 1000).toString(), 2);

  // Display the result.
  document.getElementById("countdown").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "BEWARE.";
  }
}, 1000);
