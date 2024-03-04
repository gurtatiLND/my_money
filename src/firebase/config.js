import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAMJ9RwEs9WUwLM5FfP80Wbf-RKxlXfoY8",
    authDomain: "mymoney-4f185.firebaseapp.com",
    projectId: "mymoney-4f185",
    storageBucket: "mymoney-4f185.appspot.com",
    messagingSenderId: "598516410660",
    appId: "1:598516410660:web:779b88be374495bc94abb1"
}

//init firebase
firebase.initializeApp(firebaseConfig)

//init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }