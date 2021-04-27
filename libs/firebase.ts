import firebase from "firebase";

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

if (!firebase.apps.length) {
  try {
    firebase.initializeApp(config);
  } catch (error) {
    console.log("Firebase admin initialization error", error.stack);
  }
}

const db = firebase.firestore();

export { db };
