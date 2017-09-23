import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import * as firebase from 'firebase';

import {Button} from 'react-bootstrap';

/*
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCgNwbZ95jrQx_HK_zzocr_pkFon5-_mHo",
    authDomain: "ratemylord.firebaseapp.com",
    databaseURL: "https://ratemylord.firebaseio.com",
    projectId: "ratemylord",
    storageBucket: "",
    messagingSenderId: "1067609814886"
  };
*/
const config = {
  apiKey: 'AIzaSyCOsaB6-a0GwYtVnTy1dhwdzij3BgHhMrk',
  authDomain: 'fir-expo-firebase.firebaseapp.com',
  databaseURL: 'https://fir-expo-firebase.firebaseio.com',
  projectId: 'fir-expo-firebase',
  storageBucket: 'fir-expo-firebase.appspot.com',
  messagingSenderId: '706774196990',
};




class App extends Component {

		componentWillMount() {
  firebase.initializeApp(config);
		}
				
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React. Hi guys</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		<CounterContainer />
      </div>
    );
  }
}

export default App;
class CounterContainer extends Component {
  state = {
    count: null,
  };

  componentWillMount() {
    firebase.database().ref('counter').on('value', snapshot => {
      let count = snapshot.val().count;
      this.setState({ count });
    });
  }

  render() {
    return <Counter count={this.state.count} />;
  }
}

class Counter extends Component {
  render() {
    let { count } = this.props;

    return (
      <div>
        <span>
          Current count: {count === null ? 'Zero' : count}
        </span>

    <Button bsSize="large" active onClick={this._increaseCount}>Add one</Button>


      </div>
    );
  }

  _increaseCount = () => {
		  console.log("blah"); 
    firebase.database().ref('counter').set({
      count: (this.props.count || 0) + 1,
    });
  };
}
