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
  //let closeModal = document.getElementById("close");
   
  openModal.addEventListener("click", () =>{
  modal.style.display = "block";
  });
  //closeModal.addEventListener("click", () =>{
  //modal.style.display = "none";
  //});
  window.addEventListener("click", (e) =>{
  if (e.target === flex){
  modal.style.display = "none";
  }
  });