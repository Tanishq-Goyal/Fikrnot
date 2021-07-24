$(document).ready(function() {
   

	/*Hamburger Menu*/
	$('.js--nav-icon').click(function(){
		var nav = $('.js--navigation');
		var icon= $('.js--nav-icon i');

		nav.slideToggle(300);

		if (icon.hasClass('fa-bars')){
			icon.addClass('fa-times');
			icon.removeClass('fa-bars');
		}
		else{
			icon.addClass('fa-bars');
			icon.removeClass('fa-times');
		}
	});


	$(".js--section-features").waypoint(function(direction) {

		if (direction == "down") {
			$("nav").addClass('sticky');
		}

		else {
			$("nav").removeClass('sticky');
		}
	},{
		offset: '55px'
	});
	
});

//Junior E-Wallet 
var walletimg1=document.getElementById("e-wallet-image1");
var walletimg2=document.getElementById("e-wallet-image2");
var walletimg3=document.getElementById("e-wallet-image3");
var botscreen=document.getElementById("chatbot");

function funcopen(){
var walletdesc1=document.getElementById("walldesc").style.display="block";
var walletdesc2=document.getElementById("walldesc1").style.display="none";
var walletdesc3=document.getElementById("walldesc2").style.display="none";
walletimg1.style.display="block";
walletimg2.style.display="none";
walletimg3.style.display="none";
}
function funcopen1(){
var walletdesc2=document.getElementById("walldesc1").style.display="block";
var walletdesc1=document.getElementById("walldesc").style.display="none";
var walletdesc3=document.getElementById("walldesc2").style.display="none";
walletimg1.style.display="none";
walletimg2.style.display="block";
walletimg3.style.display="none";

}
function funcopen2(){
var walletdesc3=document.getElementById("walldesc2").style.display="block";
var walletdesc2=document.getElementById("walldesc1").style.display="none";
var walletdesc1=document.getElementById("walldesc").style.display="none";
walletimg1.style.display="none";
walletimg2.style.display="none";
walletimg3.style.display="block";
}

//Chatbot Face
function funcbotappear(){
if (botscreen.style.display === "none") {
    botscreen.style.display = "block";
  } else {
    botscreen.style.display = "none";
  }
}

//Virtual Trading
var tradedesc=document.getElementById("tradedesc");
var tradedesc1=document.getElementById("tradedesc1");
var tradedesc2=document.getElementById("tradedesc2");
var tradedesc3=document.getElementById("tradedesc3");
var tradedesc4=document.getElementById("tradedesc4");

function tradeopen(){
	tradedesc.style.display="block";
	tradedesc1.style.display="none";
	tradedesc2.style.display="none";
	tradedesc3.style.display="none";
	tradedesc4.style.display="none";
}

function tradeopen1(){
	tradedesc.style.display="none";
	tradedesc1.style.display="block";
	tradedesc2.style.display="none";
	tradedesc3.style.display="none";
	tradedesc4.style.display="none";
}

function tradeopen2(){
	tradedesc.style.display="none";
	tradedesc1.style.display="none";
	tradedesc2.style.display="block";
	tradedesc3.style.display="none";
	tradedesc4.style.display="none";
}

function tradeopen3(){
	tradedesc.style.display="none";
	tradedesc1.style.display="none";
	tradedesc2.style.display="none";
	tradedesc3.style.display="block";
	tradedesc4.style.display="none";
}

function tradeopen4(){
	tradedesc.style.display="none";
	tradedesc1.style.display="none";
	tradedesc2.style.display="none";
	tradedesc3.style.display="none";
	tradedesc4.style.display="block";
}

//Mobile App Interface
var slideIndex = 0;
showSlides();
var slides,dots;

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000); // Change image
}

function plusSlides(position) {
    slideIndex +=position;
    if (slideIndex> slides.length) {slideIndex = 1}
    else if(slideIndex<1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function currentSlide(index) {
    if (index> slides.length) {index = 1}
    else if(index<1){index = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index-1].style.display = "block";  
    dots[index-1].className += " active";
}