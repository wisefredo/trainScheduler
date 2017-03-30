 // Initialize Firebase
 var config = {
     apiKey: "AIzaSyC4xyCJJfDjbFit4_ke1hsRkd2UJjlJL00",
     authDomain: "trainm-dce2b.firebaseapp.com",
     databaseURL: "https://trainm-dce2b.firebaseio.com",
     storageBucket: "trainm-dce2b.appspot.com",
     messagingSenderId: "114663909732"
 };
 firebase.initializeApp(config);
 var database = firebase.database();

 $("#addTrainBtn").on("click", function(event) {
     var trainName = $("#trainNameInput").val();
     var destination = $("#destinationInput").val();
     var firstTrain = $("#trainTimeInput").val();
     var frequency = $("#frequencyInput").val();

     database.ref().push({
     	trainName: trainName,
     	destination: destination,
     	firstTrain: firstTrain,
     	frequency: frequency
     })
 });

database.ref().on("child_added",function(snapshot){
	var trainName= snapshot.val().trainName;
	var destination= snapshot.val().destination;
	var frequency= snapshot.val().frequency;
	
	var row= $('<tr></tr>');
	row.append('<td>'+trainName+'</td>');
	row.append('<td>'+destination+'</td>');
	row.append('<td>'+frequency+'</td>');
	row.append('<td> # </td>');
	row.append('<td> # </td>');
	$('#tableData').append(row);
})