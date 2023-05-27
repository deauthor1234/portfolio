//scroll Function
const buttonRight = document.getElementById('scrollRight');
const buttonLeft = document.getElementById('scrollLeft');

buttonRight.onclick = function () {
  document.getElementById('portfolio').scrollLeft += 300;
};

buttonLeft.onclick = function () {
  document.getElementById('portfolio').scrollLeft -= 300;
};

//scroll Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//side navigation bar

const navToggler = document.querySelector('.nav-toggler');
const nav = document.querySelector('nav');

navToggler.onclick = function () {
  nav.classList.toggle('show');
}