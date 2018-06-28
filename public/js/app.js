// Initialize Firebase
 var config = {
   apiKey: "AIzaSyAXZzAfKItBcAohiqfepQaQzq6RRNhlfPo",
   authDomain: "portafolio-dc4f5.firebaseapp.com",
   databaseURL: "https://portafolio-dc4f5.firebaseio.com",
   projectId: "portafolio-dc4f5",
   storageBucket: "portafolio-dc4f5.appspot.com",
   messagingSenderId: "267529298413"
 };
 firebase.initializeApp(config);

const messagesRef = firebase.database().ref('messages')

document.getElementById('contactForm').addEventListener('submit', submitForm)


function submitForm (e) {
  // e.preventDefault()

  const email = getInputVal('email')
  const message = getInputVal('message')

  saveMessage (email, message)

  document.querySelector('.alert').style.display = 'block'

  setTimeout(function (){
    document.querySelector('.alert').style.display = 'none'
  }, 3000)

  document.getElementById('contactForm').reset()
}

function getInputVal(id) {
  return document.getElementById(id).value
}


function saveMessage (email, message) {
  const newMessageRef = messagesRef.push();
  newMessageRef.set({
    email: email,
    message: message
  });
}
