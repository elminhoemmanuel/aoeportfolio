
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
  document.getElementById('large-nav').classList.add("shadow-2xl");
  document.getElementById('small-nav').classList.add("shadow-2xl");
});

// to show project detail whennhovered
function showDetails(projectDetails){
    document.getElementById(projectDetails).classList.remove("hidden");
    document.getElementById(projectDetails).classList.add("flex");
}

function hideDetails(projectDetails){
    document.getElementById(projectDetails).classList.remove("flex");
    document.getElementById(projectDetails).classList.add("hidden");
}

//to show more projects when clicked
function showProjects(){
    const secondRow = document.getElementById("second-row");
    const buttonTextMore = document.getElementById("more");
    const buttonTextLess = document.getElementById("less");
    if(secondRow.classList.contains("hidden")){
        secondRow.classList.remove("hidden");
        secondRow.classList.add("grid");
        buttonTextMore.classList.add("hidden");
        buttonTextLess.classList.remove("hidden");
    }else{
        secondRow.classList.remove("grid");
        secondRow.classList.add("hidden");
        buttonTextMore.classList.remove("hidden");
        buttonTextLess.classList.add("hidden");
    }
}



