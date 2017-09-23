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
	var address = "insert address here"   //this string comes from angular front end, this is just a test 
	var database = firebase.database().ref("landlords/" + address); 
	database.update( { 
		address: {
		nameOfLandlord: "I dont know", 
		clean: 1 , 
		responsive: 2 , 
		description: "No.", 
		} 
});

var headings = ["nameOfLandlord", "clean", "responsive", "description"]   
var values = []

for (i = 0; i<headings.length; i++) { 
	var temp = firebase.database().ref(decodeURI("landlords/"+ address + "/address/" +  headings[i]));
	temp.on('value', function(snapshot) {
	values += snapshot.val()
	});
}

console.log(values);
