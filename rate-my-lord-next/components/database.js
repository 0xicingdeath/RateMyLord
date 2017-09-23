import firebase from "firebase";

export function initializeApp() {
    /*
  const config = {
    apiKey: "AIzaSyCrJH1gsSpVSpipBiX2b4pD9FiWyuCH2bo",
    authDomain: "countertest-8c7c2.firebaseapp.com",
    databaseURL: "https://countertest-8c7c2.firebaseio.com",
    projectId: "countertest-8c7c2",
    storageBucket: "countertest-8c7c2.appspot.com",
    messagingSenderId: "62043164751"
  };
  */
  const config = {
    apiKey: 'AIzaSyCOsaB6-a0GwYtVnTy1dhwdzij3BgHhMrk',
    authDomain: 'fir-expo-firebase.firebaseapp.com',
    databaseURL: 'https://fir-expo-firebase.firebaseio.com',
    projectId: 'fir-expo-firebase',
    storageBucket: 'fir-expo-firebase.appspot.com',
    messagingSenderId: '706774196990',
  }
  try {
    firebase.initializeApp(config);
  } catch (e) {}
}
