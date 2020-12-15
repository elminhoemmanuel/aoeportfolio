//firebase initialization 
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDKSAFDfTbnbcFydtPplTbXXaLylLQbNFA",
    authDomain: "portfolio-contact-form-8a97d.firebaseapp.com",
    projectId: "portfolio-contact-form-8a97d",
    storageBucket: "portfolio-contact-form-8a97d.appspot.com",
    messagingSenderId: "1008707659524",
    appId: "1:1008707659524:web:b137b1ce0e6d4625a4d251",
    measurementId: "G-P8H1K3VW4M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//form submission collection
var contactMessagesRef = firebase.database().ref("contactMessages");

// code to handle form submission
// listen for form submit
document.getElementById("contact-form").addEventListener("submit",submitForm)

function submitForm(e){
    e.preventDefault();
    
    //Get form values
    var name = getInputVal("name");
    var email = getInputVal("email");
    var message = getInputVal("message");

    //save to firebase
    saveMessage(name,email,message);

    //show alert
    const alertBox = document.getElementById("alertbox");
    alertBox.classList.remove("hidden");
    setTimeout(function(){
        alertBox.classList.add("hidden");
    },3000);

    //reset form
    document.getElementById("contact-form").reset();
}

//function to get form value
function getInputVal(id){
    return document.getElementById(id).value;
}

//function to save the message to firebase
function saveMessage(name,email,message){
    var newContactMessagesRef =  contactMessagesRef.push();
    newContactMessagesRef.set({
        name:name,
        email:email,
        message:message
    })
}



//functions for other parts of website
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

