var config= {
    apiKey: "AIzaSyBOX_hilPDQXHaqQOcn0H_buIIKLYTanuM",
    authDomain: "train-activity-hw.firebaseapp.com",
    databaseURL: "https://train-activity-hw.firebaseio.com",
    projectId: "train-activity-hw",
    storageBucket: "",
    messagingSenderId: "411933911731",
    appId: "1:411933911731:web:78ab750d4b7e18f5"
  };

firebase.initializeApp(config);

var database = firebase.database();

var trainName = "";
var destination = "";
var firstTrain = "";
var frequency = 0;

var diffTime = moment().diff(moment(firstTrain), "minutes");
var timeApart = diffTime % frequency;
var minutesNextTrain = frequency - timeApart;
var nextTrain = moment().add(minutesNextTrain, "minutes");

$("#submit").on('click', function (event) {
    event.preventDefault();
    trainName = $("#train-name").val().trim();
    destination = $("#destination").val().trim();
    firstTrain = $("#first-train-time").val().trim();
    frequency = $("#frequency").val().trim();


    var addTrain = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(destination),
        $("<td>").text(frequency),
        $("<td>").text(nextTrain),
        $("<td>").text(minutesNextTrain),
    );
    
    $("tbody").append(addTrain);
    console.log(addTrain);
  database.ref().push(addTrain);
})
database.ref().on("child_added", function(snapshot){
    var sv = snapshot.val();

    console.log(sv);
    console.log(sv.trainName);
    console.log(sv.destination);
    console.log(sv.firstTrain);
    console.log(sv.frequency);
  })
