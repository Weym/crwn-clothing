import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA-pOKKzRoGCohHT23IK1qoJU7ykc8kIGY',
  authDomain: 'angular2-course-5ad82.firebaseapp.com',
  databaseURL: 'https://angular2-course-5ad82.firebaseio.com',
  projectId: 'angular2-course-5ad82',
  storageBucket: 'angular2-course-5ad82.appspot.com',
  messagingSenderId: '877500303454',
  appId: '1:877500303454:web:5415ee725d3db11f'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
