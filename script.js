
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var lang = urlParams.get('lang')
/*
$.getJSON('data.json', function (data) {
  console.log(data);
  var en = data[0].en;
  var tc = data[0].tc;

  if (lang == "en") {
    //document.getElementById("btn-en").style.display = "none";
    //document.getElementById("btn-tc").style.display = "inline";


    document.getElementById("welcome").innerHTML = "welcome";
    document.getElementById("name").innerHTML = en.age;
    document.getElementById("age").innerHTML = en.name;

  } else {

    //document.getElementById("btn-tc").style.display = "none";
    //document.getElementById("btn-en").style.display = "inline";

    document.getElementById("welcome").innerHTML = "歡迎";
    document.getElementById("name").innerHTML = tc.age;
    document.getElementById("age").innerHTML = tc.name;
  }

});*/





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





