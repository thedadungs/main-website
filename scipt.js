
var header = document.getElementById("header");
var sticky = header.offsetTop;
var info = document.getElementById("information");
var infoSticky = info.offsetTop;
var member = document.getElementById("member");
var memberSticky = member.offsetTop;
const articles = document.getElementsByTagName('article');

// function



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
    $('select').prop('selectedIndex', 0);
}


// hover article
$(document).ready(function(){
	$(".article").hover(function(){
		$(articles).toggleClass("active");
    $(".text").toggleClass("active")
	});
});

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction()
}

// validation
const eform = document.getElementById('submit')
const username = document.getElementById('username')
const school = document.getElementById('school');
const email = document.getElementById('email');
const metode = document.getElementById('payment');
const bukti = document.getElementById('bukti');

eform.addEventListener('click', (x) =>{
  x.preventDefault();
  checkInput();
});

function checkInput(){
  const usernameValue = username.value.trim();
  const schoolValue = school.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  // const buktiValue = bukti.value.trim();

  if(usernameValue === ''){
    setErrorFor(username)
  } 
  // else if(usenameValue === wrong){
  //   setWrongFor(username)
  // }
  else{
    setSuccesFor(username)
  }
  if(schoolValue === ''){
    setErrorFor(school)
  } 
  // else if(usenameValue === wrong){
  //   setWrongFor(username)
  // }
  else{
    setSuccesFor(school)
  }
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} 
  else if (!isEmail(emailValue)) {
		setWrongFor(email, 'Not a valid email');
	} 
  else {
		setSuccesFor(email);
	}
  if(phoneValue === ''){
    setErrorFor(phone)
  } 
  else if((phoneValue.length > 13) || (phoneValue.length < 10) ){
    setWrongFor(phone)
  }
  else{
    setSuccesFor(phone)
  }
  if ($('#payment option:selected').val() == '-- Pilih Satu --') {
    setErrorFor(metode)
  } else {
    setSuccesFor(metode)
  }
  if (bukti.value.length){
    setSuccesFor(bukti)
  } else {
    setErrorFor(bukti)
  }
}

function setErrorFor(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control fill';
}
function setWrongFor(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control wrong';
}
function setSuccesFor(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function validate() {
  // check if input is bigger than 3
  var value = document.getElementById('titleeee').value;
  if (value.length < 3) {
    return false; // keep form from submitting
  }
 
  // else form is good let it submit, of course you will 
  // probably want to alert the user WHAT went wrong.
 
  return true;
 }