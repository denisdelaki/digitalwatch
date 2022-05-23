//  create a show time function
function showTime() {
  var date = new Date();
  //declare a variable toshow hours
  var h = date.getHours();
  //declare a variable to show minutes
  var m = date.getMinutes();
  //declare a variable to show seconds
  var s = date.getSeconds();
  //declare a variable to  PM and AM
  var session = "AM";
  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
//concanate the hours, minutes, seconds and the session
  var time = h + ":" + m + ":" + s + "" + session;
    document.getElementById("displayclock").innerText = time;
    
}
