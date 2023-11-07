const clk = document.getElementById('clock');

setInterval(function () {
  //const date = new Date().toLocaleTimeString();

  clk.innerHTML = new Date().toLocaleTimeString();
  //console.log(date);
}, 1000);
