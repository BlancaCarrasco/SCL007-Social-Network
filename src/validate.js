let nextButton = document.getElementById("next");
let pets =document.getElementById("pets");
let owner = document.getElementById("owner");
let registerButton = document.getElementById("registerButton")
let passwordAlert = document.getElementById("passwordAlert");
let password = document.getElementById("passwordRegister");
let confirmPassword = document.getElementById("confirmPassword");
let completeForm = document.getElementById("completeAlert");
let email = document.getElementById("emailRegister");
let petOwner = document.getElementById("petOwner");

nextButton.addEventListener("click", () =>{
if( password.value !== confirmPassword.value){
passwordAlert.style.display="block";
completeForm.style.display="none";
  }
  else if(password.value ==="" || confirmPassword.value === "" || email.value ==="" || petOwner.value ==="" )
  {
  completeForm.style.display="block";
  passwordAlert.style.display="none";
}
else{
pets.style.display = "block";
owner.style.display = "none";
nextButton.style.display = "none";
registerButton.style.display = "block";
}
})