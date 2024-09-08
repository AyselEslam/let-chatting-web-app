const firebaseConfig = {
    apiKey: "AIzaSyBEokaPPfModNAUoqvRah5uSWRq3ev4bGs",
    authDomain: "let-chat-web-app-ebc05.firebaseapp.com",
    projectId: "let-chat-web-app-ebc05",
    storageBucket: "let-chat-web-app-ebc05.appspot.com",
    messagingSenderId: "608924911992",
    appId: "1:608924911992:web:1ef0b1c7bc0a516505e08d"
  };
  firebase.initializeApp(firebaseConfig)


  var room_name = localStorage.getItem("roomname")
  var user_name = localStorage.getItem("username")
  
  function send()
  {
    var message = document.getElementById("message_input").value = "";

    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
  }

  function logoutbutton()
  {
    window.location = "index.html"
  }