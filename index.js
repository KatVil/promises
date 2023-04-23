function printNumbersInt(from, to) {
  let timerID = setInterval(function () {
    if (from <= to) {
      console.log(from++);
    } else {
      clearInterval(timerID);
    }
  }, 1000);
}
function printNumbersRec(from, to) {
  let timerId = setTimeout(function go() {
    console.log(from);
    from++;
    from > to ? clearTimeout(timerId) : setTimeout(go, 1000);
  }, 1000);
}

console.log(printNumbersInt(5, 10));
console.log(printNumbersRec(5, 10));
