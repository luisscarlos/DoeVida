// Esconde o form
document
  .querySelector('header button')
  .addEventListener("click", function() {
    document
    .querySelector('.form')
    .classList.toggle('hide')
  })