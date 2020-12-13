
//functions
//handle opening and closing of nav on mobile
function openNav() {
    document.getElementById("navbox").classList.toggle("w-screen");
    document.getElementById("navbox").classList.toggle("p-6");
    hideHam();
  }
//make hamburger dissappear when nav is open
function hideHam(){
    if( document.getElementById("navbox").classList.contains("w-screen")){
        document.getElementById("ham").classList.add("hidden");

    }else{
        document.getElementById("ham").classList.remove("hidden");
        
    }
    
}

//function to show dropdown when trading is clicked on mobile
function showDropSm(){
    document.getElementById("trading-sm").classList.toggle("hidden");
}

function showDropLg(){
    document.getElementById("trading-lg").classList.toggle("hidden");
}

// listen for scroll and add box shadow to nav
window.addEventListener('scroll', function() {
  document.getElementById('large-nav').classList.add("shadow-lg");
  document.getElementById('small-nav').classList.add("shadow-lg");
});



