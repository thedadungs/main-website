
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
