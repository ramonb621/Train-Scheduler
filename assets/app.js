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
    var firstTrain = moment($("#first-train-time").val().trim(), "HH:mm").subtract(10, "years").format("X");
    var frequency = $("#frequency").val().trim();


    var addTrain ={
      trainName: trainName,
      destination: destination,
      firstTrain: firstTrain,
      frequency: frequency,
    }
 
  database.ref().push(addTrain);

  $("#train-name").val("");
  $("#destination").val("");
  $("#first-train-time").val("");
  $("#frequency").val("");

  // return;
})
database.ref().on("child_added", function(childSnapshot){
    var sv = childSnapshot.val();

    var name = sv.trainName;
    var trainDestination = sv.destination;
    var first = sv.firstTrain;
    var freq = sv.frequency;

    console.log(sv);
    console.log(sv.trainName);
    console.log(sv.destination);
    console.log(sv.firstTrain);
    console.log(sv.frequency);

    let remainder = moment().diff(moment.unix(first), "minutes") % freq;
    let minutes = freq - remainder;

    let trainArrival = moment().add(minutes, "minutes").format("hh:mm");

    $("tbody").append("<tr><td>" + name + "</td><td>" + trainDestination + "</td><td class = 'min'>" + freq + "</td><td class = 'min'>" + trainArrival + "</td><td class = 'min'>" + minutes + "</td></td>");
  })
