import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
// const firebaseConfig = {
//     apiKey: "AIzaSyAAzmZKF-HHUJwQj9jyiaEWFIQ_3MexdcA",
//     authDomain: "ttest-faedd.firebaseapp.com",
//     databaseURL: "https://ttest-faedd-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "ttest-faedd",
//     storageBucket: "ttest-faedd.appspot.com",
//     messagingSenderId: "924557979276",
//     appId: "1:924557979276:web:49258872d35031fd7695a9",
//     measurementId: "G-929NVF3KPG"
//   };
const firebaseConfig = {
  apiKey: "AIzaSyDxq6mrk4tcjyinpHlh4HZQLmr4ewQPZtM",
  authDomain: "test-4d493.firebaseapp.com",
  projectId: "test-4d493",
  storageBucket: "test-4d493.appspot.com",
  messagingSenderId: "266221728601",
  appId: "1:266221728601:web:74623dd5c91e38c782d248",
  measurementId: "G-ZM9RZBQV64"
};
  export const firebaseApp=firebase.initializeApp(firebaseConfig)
  export const googleprovider=new firebase.auth.GoogleAuthProvider()
  export const facebookprovider = new firebase.auth.FacebookAuthProvider()
  export const auth =firebaseApp.auth()
  export default firebaseApp.firestore()