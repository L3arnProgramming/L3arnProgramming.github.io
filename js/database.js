
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAsvT8EtYUYKLHq00W8v8Gv5a_qwB6Q_J4",
    authDomain: "l3arnprogramming.firebaseapp.com",
    databaseURL: "https://l3arnprogramming.firebaseio.com",
    projectId: "l3arnprogramming",
    storageBucket: "l3arnprogramming.appspot.com",
    messagingSenderId: "443020797481"
};
firebase.initializeApp(config);
var db = firebase.firestore();

function readDB(arg)
{
    db.collection(arg).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            //document.getElementById("title").innerHTML = doc.data()["title"];
            //document.getElementById("text").innerHTML = doc.data()["text"];
            document.write("<h2>"+doc.data()["title"]+"</h2>");
            document.write("<p>"+doc.data()["text"]+"</p>");
            console.log(doc.data(), doc.id);
        });
    });
}
function writeDB(arg, dataArray)
{
    db.collection(arg).add(dataArray).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    }).catch(function(error) {
        console.error("Error adding document: ", error);
    });
}
//readDB("html");