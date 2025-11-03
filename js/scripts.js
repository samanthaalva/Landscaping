// Inject dynamic year in footer. 
const currentYear = new Date ();
document.querySelector('#year').textContent = currentYear.getFullYear();
//currentYear is the full date. This includes minutes, seconds, ect. getFullYear dumbs it down to the calendar year only (2025). querySelector is what pastes the date to the document, and #year is the ID that lets the computer know where to paste this information in the HTML. In this case, #year is referenced in the HTML footer using a <span> tag. 

const navElement = document.querySelector('#theNav');
const btnElement = document.querySelector('#theButton');

btnElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    btnElement.classList.toggle('open');
});


const swiper = new Swiper('.swiper', {
  // Optional parameters
  //direction: 'horizontal' is default, we don't need this line of code. Thought I'd comment it here though.
  loop: true,
  effect: 'fade',
  speed: 2000,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  //Start autoplay
  autoplay: {
    delay: 5000,
  },
});