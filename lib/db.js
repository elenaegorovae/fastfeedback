import firebase from './firebase';

const firestore = firebase.firestore();

export function createUser(user) {
  return firestore.collection('users').doc(user.uid).set(user, { merge: true });
}

export function createSite(data) {
  return firestore.collection('sites').add(data);
}

export function createFeedback(data) {
  return firestore.collection('feedback').add(data);
}

export function deleteFeedback(id) {
  return firestore.collection('feedback').doc(id).delete();
}
