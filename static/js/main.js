const contentsBtn = document.querySelector('#contents-btn');
const toc = document.querySelector('.toc');
const closeBtn = document.querySelector('#contents-close-btn');

contentsBtn.addEventListener('click', () => {
    toc.classList.toggle('glide');
})

closeBtn.addEventListener('click', () => {
    toc.classList.remove('glide');
});



/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
const header = document.querySelector('header');

let prevScrollpos = window.pageYOffset;

window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    
  if (prevScrollpos > currentScrollPos) {
        header.style.top = "0";
  } else {
        header.style.top = "-125px";
  }
  prevScrollpos = currentScrollPos;
} 