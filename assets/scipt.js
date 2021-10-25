const openRegisterButtons = document.querySelectorAll('[data-register-open]')
const closeProjectButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const overlay2 = document.getElementById('overlay2')
const body = document.getElementById('body')
const phone  = document.getElementById('phone')
var header = document.getElementById("header");
var sticky = header.offsetTop;
const articles = document.getElementsByTagName('article');

// function
function onlyNumber(evt) {
  var ASCIICode = (evt.which) ? evt.which : evt.keyCode
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
            return false;
        else
            return true;
}

function openPopUp(x) {
  if (x == null) return
  x.classList.add('active')
  overlay.classList.add('active')
  body.classList.add('active')
}

function closePopUp(x) {
  if (x == null) return
  x.classList.remove('active')
  overlay.classList.remove('active')
  body.classList.remove('active')
}

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} 

// hover article
$(document).ready(function(){
	$(".article").hover(function(){
		$(articles).toggleClass("active");
	});
});

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

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

