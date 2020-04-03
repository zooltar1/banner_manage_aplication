/* eslint-disable linebreak-style */
/* eslint-disable semi */
function toggleMenu(visible){
  document.querySelector('.menu').classList.toggle('show', visible)
}
document.querySelector('.menu-icon').addEventListener('click', function(e){
  e.preventDefault()
  toggleMenu()
});