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

$("#submit").on('click', function (event) {
    event.preventDefault();
    var trainName = $("#train-name").val().trim();
    var destination = $("#destination").val().trim();
    var firstTrain = $("#first-train-time").val().trim();
    var frequency = $("#frequency").val().trim();

    var addTrain = {
        "Train Name": trainName,
        "Destination": destination,
        "First Train Time": firstTrain,
        "Frequency": frequency,
    }
    console.log(addTrain);
  database.ref().push(addTrain);
});
