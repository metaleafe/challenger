// js/loader.js

function showTime() {
  setTimeout(() => {
    const intro = document.getElementById('intro');
    const container = document.getElementById('container');
    const main = document.getElementById('main-content');

    intro.style.display = 'block';
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      intro.style.display = 'none';
      container.style.display = 'none';
      main.style.display = 'block';
      document.body.style.overflow = 'auto';
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 4000); // 4秒後にメイン表示

  }, 1000);
}

document.querySelector(".btn").addEventListener("click", function(event) {
  event.preventDefault();
  this.parentElement.classList.add("clicked");
  showTime();
});

document.addEventListener('DOMContentLoaded', function () {
  let btns = document.querySelectorAll('.btn');
  btns.forEach(function (btn) {
    let spans = []
    for (let i = 0; i < 120; i++) {
      let span = document.createElement('span');
      span.style.left = `${i * 2}px`;
      spans.push(span);
      btn.appendChild(span);
      let randomDealy = (Math.random() * 1) + 0;
      span.style.transitionDelay = randomDealy + 's';
    }
  });
});

