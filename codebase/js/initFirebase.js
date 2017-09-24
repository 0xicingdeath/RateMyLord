// Initialize Firebase
var config = {
	apiKey: "AIzaSyCgNwbZ95jrQx_HK_zzocr_pkFon5-_mHo",
	authDomain: "ratemylord.firebaseapp.com",
	databaseURL: "https://ratemylord.firebaseio.com",
	projectId: "ratemylord",
	storageBucket: "ratemylord.appspot.com",
	messagingSenderId: "1067609814886"
};


	firebase.initializeApp(config);
	var username;
	var password;
	var university;
	var age;
	var gender;
	var nameoflandlord;
	var cleanliness;
	var responsiveness;
	var facilities;
	var description;
	var add;



/****Login Function*****/
$(function(){
	$("#loginform").click(function() {
		var username = $('#username').val()
		password = $('#password').val()
	})
});

/****Registration Function*****/
$(function(){
	$("#registrationform").click(function() {
		var username, university, password, email;
		var myPromise = new Promise(function(resolve) {
			username = $("#blah").val()
		//console.log(JSON.stringify(username));
			email = $('#email').val()
			university = $('#university').val()
			password = $('#password').val()
			resolve($("#blah").val())
		});

		myPromise.then(function(args) {
			console.log("promise log", args);
		});
		var age = $("input[name='age']:checked").val()
		var gender = $("input[name='gender']:checked").val()

		console.log("  " + username + " " + " " + password)
		
		var database2 = firebase.database().ref("user/"+username); 			
		console.log("value coming in from front end: " + username);
		database2.update(JSON.parse(JSON.stringify({
			username: username,
			email: email
		}))) 		
	})
});

var address; 

/****Review Function*****/
$(function(){
	console.log("review function is being called")
	$("#reviewform").click(function() {
		var nameoflandlord = $('#nameoflandlord').val()
		var description = $('#description').val()
		var cleanliness = $('#cleanliness').val()
		var responsiveness = $('#responsiveness').val()
		console.log(responsiveness); 
		var facilities = $("#facilities").val()
		var add = $("#add").val()


		address = add  //this string comes from angular front end, this is just a test
		var database = firebase.database().ref("landlords/"+address); 			
		console.log("value coming in from front end: " + address);
		database.update(JSON.parse(JSON.stringify({
			address: address,
			nameOfLandlord: nameoflandlord,
			cleanliness: cleanliness,
			responsiveness: responsiveness, 
			facilities: facilities, 
			description: description
		}))) 		
	});
});




/**
// For Reviews 
var headings = ["nameOfLandlord", "cleanliness", "responsiveness", "facilities", "description"]   
var values = []

for (i = 0; i<headings.length; i++) { 
	var temp = firebase.database().ref(decodeURI("landlords/"+ address + "/address/" +  headings[i]));
	temp.on('value', function(snapshot) {
	values += snapshot.val()
	});
}


var database2 = firebase.database().ref("users/")
database2.update( { 
	user: { 
		username: "UserNameTest1", 
		password: "MyTerribleTestPassword"
	}
}); 

//For Uers 
var userHeading = ["username", "password"]
var userValue = [] 

for (i = 0; i<userHeading.length; i++) { 
	var temp = firebase.database().ref(decodeURI("users/user/" +  headings[i]));
	temp.on('value', function(snapshot) {
	userValue += snapshot.val()
	});
}
console.log(userValue);
*/