const firebaseConfig = {
      apiKey: "AIzaSyCQJrwI9ZASM-35r34eJgqyklOEyr410VE",
      authDomain: "fake-twitter-9c54f.firebaseapp.com",
      databaseURL: "https://fake-twitter-9c54f-default-rtdb.firebaseio.com",
      projectId: "fake-twitter-9c54f",
      storageBucket: "fake-twitter-9c54f.appspot.com",
      messagingSenderId: "1088962264345",
      appId: "1:1088962264345:web:d28bcfda3fa18244ded988"
    };
    firebase.initializeApp(firebaseConfig)
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";
function add_room(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding_room_name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name-"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      
}