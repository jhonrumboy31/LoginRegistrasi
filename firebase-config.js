const firebaseConfig = {
  apiKey: "AIzaSyAEF9MfjL43nlt7vc78fKSgMM6t3-ygU4g",
  authDomain: "wisatajayapura-34bf8.firebaseapp.com",
  databaseURL: "https://wisatajayapura-34bf8-default-rtdb.firebaseio.com",
  projectId: "wisatajayapura-34bf8",
  storageBucket: "wisatajayapura-34bf8.firebasestorage.app",
  messagingSenderId: "227988793796",
  appId: "1:227988793796:web:ca1964d6c8535ae0badc91",
  measurementId: "G-6F51T81ZHM"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();