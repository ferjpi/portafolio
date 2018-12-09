const heart = document.querySelector('#heart')
const cuadro = document.querySelectorAll('.c')

heart.addEventListener('mouseover', () => {
  for(let i = 0; i<cuadro.length; i++) {
    cuadro[i].classList.add('desvanecer')
    cuadro[i].classList.remove('aparecer')
  }
})

heart.addEventListener('mouseout', () => {
  for(let i = 0; i<cuadro.length; i++) {
    cuadro[i].classList.remove('desvanecer')
    cuadro[i].classList.add('aparecer')
  }
})