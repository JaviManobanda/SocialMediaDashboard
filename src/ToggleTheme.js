const btnToggle = document.getElementById('toggle-theme');

btnToggle.addEventListener('click', function () {
  trans();
  document.body.classList.toggle('dark-theme');
});

const trans = () => {
  document.documentElement.classList.add('transition')
  window.setTimeout(() => {
    document.documentElement.classList.remove('transition')
  },1000)
}