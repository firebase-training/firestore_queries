// TODO: Replace the firebaseUrl with your own Firestore URL
const fireStoreUrl = 'https://my-firebase-project-c1661.firebaseio.com';

const firestore = require('@google-cloud/firestore');

const serviceAccount = require('./firebase-admin-key.json');
const admin = require('firebase-admin');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: fireStoreUrl
});
const db = admin.firestore();

const query = createQuery(db);
query
	.get()
	.then(function(querySnapshot) {
		querySnapshot.forEach(function (doc) {
			console.log(doc.id, ' => ', doc.data());
		});
	});


function createQuery(db) {
	// TOOD: Try to implement different Queries here
	return db
		.collection('users');
}
