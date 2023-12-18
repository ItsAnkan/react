import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyDnIHLzf_d23eMglLRzC178XrXrEjC0gic',
	authDomain: 'catch-of-the-day-8ac46.firebaseapp.com',
	databaseURL: 'https://catch-of-the-day-8ac46-default-rtdb.firebaseio.com',
});
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
