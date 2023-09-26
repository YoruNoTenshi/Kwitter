
// ADICIONE SUS LINKS FIREBASE AQUI
const firebaseConfig = {
  apiKey: "AIzaSyBP7haPMgC1oCVmQTU0j9plz179vGqN5-o",
  authDomain: "lagelohnimon.firebaseapp.com",
  databaseURL: "https://lagelohnimon-default-rtdb.firebaseio.com",
  projectId: "lagelohnimon",
  storageBucket: "lagelohnimon.appspot.com",
  messagingSenderId: "213676670097",
  appId: "1:213676670097:web:fae0cfcf6e609c038d5330"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



function addUser()
{
  userName = document.getElementById("userName").value;
  firebase.database().ref("/").child(userName).update({
    purpose : "adding user"
  });
}


