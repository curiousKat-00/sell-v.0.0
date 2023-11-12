import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAQRvNw9BUdzCDM_UF3A6QB_RD2JsQp-i0',
  authDomain: 'sell-v-a-a.firebaseapp.com',
  projectId: 'sell-v-a-a',
  storageBucket: 'sell-v-a-a.appspot.com',
  messagingSenderId: '780499378810',
  appId: '1:780499378810:web:25817f4b6cc1e7643451c3',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase
