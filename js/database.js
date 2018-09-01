
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

function readTut(arg, target)
{
    db.collection(arg).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var article = document.getElementById(target);
            
            var tutorial = document.createElement("div");
            
            
            var title = document.createElement("h2");
            title.innerHTML = doc.data()["title"];
            title.id = doc.id;
            title.onclick = function(){readText(this.id, arg, tutorial)};
            
            console.log(title.id);
            
            /**/
            
            tutorial.appendChild(title);
            article.appendChild(tutorial);
            //article.appendChild(text);
            //article.appendChild(example);
            //console.log(doc.data(), doc.id);
        });
    });
}

function readText(argID, arg, tutorial)
{
    var docRef = db.collection(arg).doc(argID);

    docRef.get().then(function(doc) {
        if (doc.exists) {
            if(tutorial.childNodes.length>1){
                while(tutorial.childNodes.length>1)
                {
                    tutorial.removeChild(tutorial.lastChild);
                }
            }else{
                var text = document.createElement("p");
                text.innerHTML = doc.data()["text"];
                var example = document.createElement("pre");
                example.innerHTML = doc.data()["example"];

                tutorial.appendChild(text);
                tutorial.appendChild(example);
            }
            //console.log("Document data:", doc.data());
            //console.log(target);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
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