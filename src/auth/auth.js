let main = document.getElementById("root");
let section = document.getElementById("logIn");
//::::::::::::::::::::::::::::::::::::::FACEBOOK:::::::::::::::::::::::::::::::::::::::::::::::::::
facebook.addEventListener("click", () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.error(JSON.stringify(error.message));
    });
  });
  //:::::::::::::::::::::::::::::::::::::::::::::GOOGLE::::::::::::::::::::::::::::::::::::::::::::
 document.getElementById("google").addEventListener("click", () => {
    console.log("click")
    const provider = new firebase.auth.GoogleAuthProvider();provider
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithPopup(provider).then(function(result) {
  var token = result.credential.accessToken;
  var user = result.user;
  console.log(user);
  });
  });
//:::::::::::::::::::::::::::::CHECKOUT::::::::::::::::::::::::::::::::::::::::::::::::::::
  export const checkAuthState = (callback) => {
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        console.log("Hay un usuario");
        callback(user);
      }else{
        console.log("No está logueado");
        callback(null);
      }
    })
  };
//:::::::::::::::::::::::::::::::::::::::::::SIGN UP::::::::::::::::::::::::::::::::::::::::::::::::
export const registerUser = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(){
      verification();
    })
    .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + " " + errorMessage);
        // ...
});
}
//:::::::::::::::::::::::::::::::::LOGIN USER:::::::::::::::::::::::::::::::::::::::::::::::::
export const loginUser = (emailFromUser, passwordFromUser) => {
    firebase.auth().signInWithEmailAndPassword(emailFromUser, passwordFromUser)
      .then((user)=>{
       
      })
      .catch((error) => {
        console.log("Error > "+error.message);
      });
  }
  //::::::::::::::::::::::::::::::::::::::LOG OUT::::::::::::::::::::::::::::::::::::::::::::::::
  let logOut = document.getElementById("signOut");

  logOut.addEventListener("click", () => {
    firebase.auth().signOut()
    .catch(function(error) {
      console.log("Error > "+error.message);
    });
  })
  //:::::::::::::::::::::::::::::SEND VERIFICATION EMAIL::::::::::::::::::::::::::::::::::::::::
  const verification = () =>{
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function() {
    console.log("enviando...")
  }).catch(function(error) {
    console.log(error);
  });
}