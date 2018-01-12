import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
	  // Initialize Firebase
	  const config = {
	    apiKey: "AIzaSyDKT1isLqE_F0OyV4rhcyduYcDfJveh7GI",
	    authDomain: "manager-ba12c.firebaseapp.com",
	    databaseURL: "https://manager-ba12c.firebaseio.com",
	    projectId: "manager-ba12c",
	    storageBucket: "",
	    messagingSenderId: "222344409599"
	  };
		
	  firebase.initializeApp(config);
		
	}
	
	render() {
		return (
			<Provider store={createStore(reducers)}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;