var firebaseConfig = 
{
    apiKey: "AIzaSyC8Gz7InwdP1Ezb31jEA45_CkoOWAj06XI",
    authDomain: "project-94-lets-chat-app-cf968.firebaseapp.com",
    projectId: "project-94-lets-chat-app-cf968",
    storageBucket: "project-94-lets-chat-app-cf968.appspot.com",
    messagingSenderId: "124958463794",
    appId: "1:124958463794:web:f6eb42d3f84585b4d1a92b"
};

//Initialize firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome" +  " ! ";

function addRoom()
{
    roomName = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose: "Adding Room Name"});
    
    localStorage.setItem("room_name", room_name);

    window.location = "app_page.html";
}

function addData()
{
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {childKey = childSnapshot.key;
            Room_name = childKey;
            console.log("Room Name - ", Room_name);
            row = "<div class ='room_name' id =" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
        });
     });
}

getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "app_page.html";
}

function logout()
{
    localStorage.removeItem("room_name");
    localStorage.removeItem("room_name");
    window.location = "app_login.html";
}