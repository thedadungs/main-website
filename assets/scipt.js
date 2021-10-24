const openRegisterButtons = document.querySelectorAll('[data-register-open]')
const closeProjectButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')


function openPopUp(x) {
  if (x == null) return
  x.classList.add('active')
  overlay.classList.add('active')
}

function closePopUp(x) {
  if (x == null) return
  x.classList.remove('active')
  overlay.classList.remove('active')
}
openRegisterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const regis = document.querySelector(button.dataset.registerOpen)
    openPopUp(regis)
  })
})

closeProjectButtons.forEach(button => {
  button.addEventListener('click', () => {
    const regis = button.closest('.regis')
    closePopUp(regis)
  })
})

overlay.addEventListener('click', () => {
  const regiss = document.querySelectorAll('.regis.active')
  regiss.forEach(project => {
    closePopUp(project)
  })
})

