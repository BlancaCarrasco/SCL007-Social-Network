const containerRoot = document.getElementById("root");
document.addEventListener("DOMContentLoaded", event => {
  const config = {
    apiKey: "AIzaSyBoEkrJVmd5cNJQAd-drkN8_L5mRUIa-74",
    authDomain: "pet-social-network-e35d0.firebaseapp.com",
    databaseURL: "https://pet-social-network-e35d0.firebaseio.com",
    projectId: "pet-social-network-e35d0",
    storageBucket: "pet-social-network-e35d0.appspot.com",
    messagingSenderId: "678447862491"
};
firebase.initializeApp(config);
let database = firebase.database();
})
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
import {checkAuthState, registerUser, loginUser, facebookLogin, googleLogin, logOut} from './auth/auth.js';
import {savePosting, readPost} from './data/data.js'
window.onload = () => {
  checkAuthState((user)=>{
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log ("existe usuario activo");
        if(user.emailVerified){
          document.getElementById("root").style.display = "none";
          document.getElementById("logIn").style.display = "block";
          readPostFromDatabase();
        }
      modal.style.display = "none";    
      } else {
        console.log ("no existe usuario activo");  
        document.getElementById("root").style.display = "block";
        document.getElementById("logIn").style.display = "none";
      }
    });
   }); 
}
//:::::::::::::::::::::::::::::::::::REGISTER:::::::::::::::::::::::::::::::::::::::::::::::::::
   document.getElementById("registerButton").addEventListener("click", () =>{
      let petName = document.getElementById("petName").value;
      let petType = document.getElementById("petType").value;
      let petSex = document.getElementById("petSex").value;
      let petAge = document.getElementById("petAge").value;
      let petInformation = document.getElementById("petInformation").value;
      let completeForm2 = document.getElementById("completeAlert2");
      
      if (petName === "" || petType === "" || petSex === "" || petAge === "" || petInformation === ""){
        completeForm2.style.display= "block";
      }
      else {
      const email = document.getElementById("emailRegister").value; 
      const password = document.getElementById("passwordRegister").value; 
      registerUser(email, password);
      petData();
     }
   });
//:::::::::::::::::::::::::::::::::::::::::::LOGIN:::::::::::::::::::::::::::::::::::::::::::::

const loginUserWithEmailAndPassword = () => {
    const emailFromUser = emailSignIn.value;
    const passwordFromUser = passwordSignIn.value;
    loginUser(emailFromUser, passwordFromUser);
  };
  document.getElementById("signIn").addEventListener("click", loginUserWithEmailAndPassword);

  document.getElementById("facebook").addEventListener("click", facebookLogin);

  document.getElementById("google").addEventListener("click", googleLogin);

  document.getElementById("signOut").addEventListener("click", logOut);
  //::::::::::::::::::::::::::::::::::::REGISTER DATA::::::::::::::::::::::::::::::::::::::::::::
 /* const petData = () => {
    let petOwner = document.getElementById("petOwner").value;
    let petName = document.getElementById("petName").value;
    let petType = document.getElementById("petType").value;
    let petSex = document.getElementById("petSex").value;
    let petAge = document.getElementById("petAge").value;
    let petInformation = document.getElementById("petInformation").value;
    savePet(petOwner, petName, petType, petSex, petAge, petInformation);
  }*/
  //::::::::::::::::::::::::::::::::::::::POST::::::::::::::::::::::::::::::::::::::::::::::::
  const posting = () => {
    let postText = document.getElementById("postText").value;
    let userName = document.getElementById("postName").value;
    savePosting(postText, userName);
  } 
  document.getElementById("postBtn").addEventListener("click", posting);
  let inExec = false;
  const readPostFromDatabase = () => {
    if(inExec){
      return;
    }
    inExec = true;
    readPost((post)=>
    document.getElementById("postear").innerHTML = 
    `
    <div class="container"> 
      <div class="postBox">
        <h4><b>Usuario:</b> ${post.val().user}</h4><br>
        <div id="postBox">
          <p><b>Mensaje:</b></p><br/>
          <p class="textmessage">${post.val().posting}</p>
        </div>
        <div class="row">
          <div class="col-6">
            <i class="material-icons iconos">thumb_up</i>
          </div>
          <div class="col-6">
            <i class="material-icons iconos2">comment</i>
          </div>
        </div>
      </div>
      <hr>
    </div>
    `
    + document.getElementById("postear").innerHTML
    )  
  }






