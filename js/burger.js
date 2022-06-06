document.querySelector('#menu-burger').addEventListener('click', (e) => {
  e.preventDefault()
  document.querySelector('#mobile-menu').classList.toggle('open')
  document.querySelector('#body').classList.toggle('no-overflow')
})


document.querySelector('#menu-cross').addEventListener('click', (e) => {
  e.preventDefault()
  document.querySelector('#mobile-menu').classList.remove('open')
  document.querySelector('#body').classList.remove('no-overflow')
})
