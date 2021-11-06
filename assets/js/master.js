$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
        $('#main-menu').toggleClass('opened');
        //$("#upper-nav-bar").toggleClass('mobile-sticky');
	});
});

// When the user scrolls the page, execute myFunction
window.onscroll = function() {makeItStickFunction()};

// Get the header
var header = document.getElementById("sticky-nav-bar");
// Get the upper menu handle
var upperMenu = document.getElementById("upper-nav-bar");
// Get the up button handle
var goUpButton = document.getElementById("go-up-button");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function makeItStickFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    upperMenu.classList.add("mobile-sticky");
    goUpButton.classList.add("show");
  } else {
    header.classList.remove("sticky");
    upperMenu.classList.remove("mobile-sticky");
    goUpButton.classList.remove("show");
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

