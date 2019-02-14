export const savePet = (petOwner, petName, petType, petSex, petAge, petInformation) => {

  const newPetKey = firebase.database().ref('pets/').child('profile').push().key;
  
  firebase.database().ref(`pets/${newPetKey}/`).set({
    owner: petOwner,
    name: petName,
    type: petType,
    sex: petSex,
    age: petAge,
    information: petInformation
  });
}

export const savePosting = (postText, userName) => {
  const userID = firebase.auth().currentUser.uid; 
  const newPostKey = firebase.database().ref('post/').child('post').push().key;
  firebase.database().ref(`post/${newPostKey}`).set({
    user: userName,
    posting: postText,
  });
}
export const readPost = (onPostChange) => {
  let postRef = firebase.database().ref('post');
  postRef.on('child_added', (post)=> {
    onPostChange(post);
  });

  export const deletePost = (ruta) => {
    let mensaje = confirm ("desea eliminar este mensaje");
    if (mensaje === true){
      firebase.database().ref(`post/posting/user/${newPostKey}`).remove();
      location.reload();
    }else{
      return null;
    }
  }
};
