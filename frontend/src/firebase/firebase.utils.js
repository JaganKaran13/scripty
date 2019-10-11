import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCD_orGXfpjqB4Bm9f5fMAebXmqXLBRvP0",
    authDomain: "crwn-db-3.firebaseapp.com",
    databaseURL: "https://crwn-db-3.firebaseio.com",
    projectId: "crwn-db-3",
    storageBucket: "",
    messagingSenderId: "639262688271",
    appId: "1:639262688271:web:9ae275e1c66d0694dd0f7a"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${ userAuth.uid }`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, 
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating message ', error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;