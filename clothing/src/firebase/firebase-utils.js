import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDm6lfdKpaG7-NRDUHN8ftetFYZXDVmIHw",
    authDomain: "crown-db-fa43e.firebaseapp.com",
    databaseURL: "https://crown-db-fa43e.firebaseio.com",
    projectId: "crown-db-fa43e",
    storageBucket: "crown-db-fa43e.appspot.com",
    messagingSenderId: "611000267465",
    appId: "1:611000267465:web:69523fb82ca53bf341d318",
    measurementId: "G-49WS3D159R"   
};

export const createUserProfileDocument = async (userAuth, additionData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createDate = new Date();

        try {
            await userRef.set(
                {
                    displayName,
                    email,
                    createDate,
                    ...additionData
                }
            )
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters(
    {promt: 'select_account'}
);
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
}

export default firebase;