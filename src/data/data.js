export const savePet = (petOwner, petName, petType, petSex, petAge, petInformation) => {
  const newPetKey = firebase.database().ref('pets/').child('profile').push().key;
  firebase.database().ref(`pets/${newPetKey}`).set({
    Owner: petOwner,
    Name: petName,
    Type: petType,
    Sex: petSex,
    Age: petAge,
    Information: petInformation
  });
}

export const savePosting = (postText, userName) => {
  const newPostKey = firebase.database().ref('post/').child('post').push().key;
  firebase.database().ref(`post/${newPostKey}`).set({
    user: userName,
    posting: postText,
  });
}
export const readPost = (onPostChange) => {
  var postRef = firebase.database().ref('post');
  postRef.on('child_added', (post)=> {
    onPostChange(post);
  });
};