//get URL 

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var lang = urlParams.get('lang')


// function of language switcher
function selectLang() {
  var href = new URL(window.location.href);
  var searchParams = new URLSearchParams(window.location.search);



  if (lang == "en") {

    href.searchParams.set('lang', 'tc');


  } else {

    href.searchParams.set('lang', 'en');


  }
  window.open(href.toString(), "_self");
  var newParams = searchParams.toString();

}

//back to top button
var btn = $('#back-button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

//breadcumb and title

function bannerText(menu, lang, category, page) {

  document.getElementById("level-0").setAttribute("href", menu["m1"].link + "?lang=" + lang);
  if (lang != "tc") {
    document.getElementById("level-0").innerHTML = menu["m1"].en;
    document.getElementById("level-1").innerHTML = menu[category].en;
    //document.getElementById("page-category").innerHTML = menu[category].en;
    document.getElementById("level-2").innerHTML = menu[page].en;
    document.getElementById("page-title").innerHTML = menu[page].en
    
  }else{

    document.getElementById("level-0").innerHTML = menu["m1"].tc;
    document.getElementById("level-1").innerHTML = menu[category].tc;
    //document.getElementById("page-category").innerHTML = menu[category].tc;
    document.getElementById("level-2").innerHTML = menu[page].tc;
    document.getElementById("page-title").innerHTML = menu[page].tc
    


  }
}

// Index page photo slide
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3500); // Change image every 3.5 seconds
  }









