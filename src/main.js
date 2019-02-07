//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
let modal = document.getElementById("mimodal");
let flex = document.getElementById("flex");
let openModal = document.getElementById("register");
let closeModal = document.getElementById("close");
let main = document.getElementById("root");
let section = document.getElementById("logIn");

openModal.addEventListener("click", () =>{
modal.style.display = "block";
});
closeModal.addEventListener("click", () =>{
modal.style.display = "none";
});
window.addEventListener("click", (e) =>{
if (e.target === flex){
modal.style.display = "none";
}
});

let nextButton = document.getElementById("next");
let pets =document.getElementById("pets");
let owner = document.getElementById("owner");
let registerButton = document.getElementById("registerButton");


nextButton.addEventListener("click", () =>{
pets.style.display = "block";
owner.style.display = "none";
nextButton.style.display = "none";
registerButton.style.display = "block";
})
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
import {checkAuthState, registerUser, loginUser} from './auth/auth.js';

window.onload = () => {
  checkAuthState((user)=>{
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log ("existe usuario activo");
        if(user.emailVerified){
          main.style.display = "none";
          section.style.display = "block";
        }
      modal.style.display = "none";    
      } else {
        console.log ("no existe usuario activo");  
      main.style.display = "block";
      section.style.display = "none";
      }
    });
   }); 
}
//:::::::::::::::::::::::::::::::::::REGISTER:::::::::::::::::::::::::::::::::::::::::::::::::::
const register = () => {
 
  const email = document.getElementById("emailRegister").value; 
  const password = document.getElementById("passwordRegister").value; 
  registerUser(email, password);
   }
   document.getElementById("registerButton").addEventListener("click", register);
//:::::::::::::::::::::::::::::::::::::::::::LOGIN:::::::::::::::::::::::::::::::::::::::::::::

const loginUserWithEmailAndPassword = () => {
    const emailFromUser = emailSignIn.value;
    const passwordFromUser = passwordSignIn.value;
    loginUser(emailFromUser, passwordFromUser);
  };
  document.getElementById("signIn").addEventListener("click", loginUserWithEmailAndPassword);

//se salio de control



