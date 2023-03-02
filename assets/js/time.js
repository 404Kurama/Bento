// ┌┬┐┬┌┬┐┌─┐
//  │ ││││├┤
//  ┴ ┴┴ ┴└─┘
// Set time and Date

window.onload = displayClock();
async function displayClock() {
  var min = "43";
  var hh = "21";
  var ampm = "";

  var response = await fetch("https://worldtimeapi.org/api/ip");
  var date = new Date(0)
  
  if (response.status == 200) {
    var data = await response.json();
    date = new Date(data.datetime);
  } else {
    date = new Date()
  }

  min = ("0" + date.getMinutes()).slice(-2);
  hh = date.getHours();

  if (CONFIG.twelveHourFormat) {
    ampm = hh >= 12 ? " PM" : " AM";
    hh = hh % 12;
    hh = hh ? hh : 12;
  }

  document.getElementById("hour").innerText = hh;
  document.getElementById("separator").innerHTML = " : ";
  document.getElementById("minutes").innerText = min + ampm;

  setTimeout(displayClock, 1);
}
