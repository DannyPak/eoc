

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

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});









