
window.addEventListener('DOMContentLoaded', function () {
  var $el = document.querySelector('.now');

  setInterval(() => {
    const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    $el.innerHTML = time;
  }, 1000);
});
