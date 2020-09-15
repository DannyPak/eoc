
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var lang = urlParams.get('lang')

// function of language switcher
function selectLang(){
  var href = new URL(window.location.href);
var searchParams = new URLSearchParams(window.location.search);

  if(lang=="en"){
    
    href.searchParams.set('lang','tc');
    
    
  }else{
    
    href.searchParams.set('lang','en');
    
    
  }
  window.open(href.toString(),"_self");
  var newParams = searchParams.toString();
 
}




// set anthe text





