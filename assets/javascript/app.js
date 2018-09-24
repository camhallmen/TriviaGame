// Timer
var count = 90 
var seconds
var temp
 
  function countDown() {
    seconds = document.getElementById('count').innerHTML;
    seconds = parseInt(seconds, 10);
    seconds--;
    temp = document.getElementById('count');
    temp.innerHTML = seconds;
    timer = setTimeout(countDown, 1000);
  } 
 
  countDown();