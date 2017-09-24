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
	var address = "FakeAddress1"   //this string comes from angular front end, this is just a test 
	var database = firebase.database().ref("landlords/" + address); 
	database.update( { 
			address: {
			nameOfLandlord: "I dont know", 
			cleanliness: 1 , 
			responsiveness: 2 , 
		 	facilities: 1, 
			description: "No.", 
		} 
	});

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
