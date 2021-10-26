const openRegisterButtons = document.querySelectorAll('[data-register-open]')
const closeProjectButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const overlay2 = document.getElementById('overlay2')
const body = document.getElementById('body')
const phone  = document.getElementById('phone')
var header = document.getElementById("header");
var sticky = header.offsetTop;
var info = document.getElementById("information");
var infoSticky = info.offsetTop;
var member = document.getElementById("member");
var memberSticky = member.offsetTop;
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
  clearForms($('#user'));
}

function myFunction() {
  if (window.pageYOffset == sticky) {
    header.classList.remove("sticky");
  } else if (window.pageYOffset == infoSticky) {
    header.classList.remove("sticky");
  } else {
    header.classList.add("sticky");
  }
} 

function clearForms()
{
    $(':input').not(':button, :submit, :reset, :hidden, :checkbox, :radio').val('');
    $(':checkbox, :radio').prop('checked', false);
}


// hover article
$(document).ready(function(){
	$(".article").hover(function(){
		$(articles).toggleClass("active");
    $(".text").toggleClass("active")
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
document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
    const regiss = document.querySelectorAll('.regis.active')
    regiss.forEach(project => {
      closePopUp(project)
    })
	}
});
overlay.addEventListener('click', () => {
  const regiss = document.querySelectorAll('.regis.active')
  regiss.forEach(project => {
    closePopUp(project)
  })
})

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction()
}