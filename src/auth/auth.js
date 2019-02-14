//::::::::::::::::::::::::::::::::::::::FACEBOOK:::::::::::::::::::::::::::::::::::::::::::::::::::
export const facebookLogin = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(){
    })
  }
  //:::::::::::::::::::::::::::::::::::::::::::::GOOGLE::::::::::::::::::::::::::::::::::::::::::::
 export const googleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();provider
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithPopup(provider)
  };
//:::::::::::::::::::::::::::::CHECKOUT::::::::::::::::::::::::::::::::::::::::::::::::::::
  export const checkAuthState = (callback) => {
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        console.log("Hay un usuario > "+JSON.stringify(user));
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
        if(emailFromUser === "" || passwordFromUser === ""){
          document.getElementById("emptyAlert").style.display= "block";
          document.getElementById("emailAlert").style.display= "none";
        }else{
          document.getElementById("emailAlert").style.display= "block";
          document.getElementById("emptyAlert").style.display= "none";
        }
      });
  }
  //::::::::::::::::::::::::::::::::::::::LOG OUT::::::::::::::::::::::::::::::::::::::::::::::::
 export const logOut = () => {
    firebase.auth().signOut()
    .catch(function(error) {
    });
  }
  //:::::::::::::::::::::::::::::SEND VERIFICATION EMAIL::::::::::::::::::::::::::::::::::::::::
  const verification = () =>{
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function() {
    console.log("enviando...")
    alert("Enviando email de verificación")
  }).catch(function(error) {
    console.log(error);
  });
}