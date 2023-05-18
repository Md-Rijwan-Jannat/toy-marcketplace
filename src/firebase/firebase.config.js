// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// console.log('firebase config' , import.meta.env.FC_apiKey)
// const firebaseConfig = {
//   apiKey: import.meta.env.FC_apiKey,
//   authDomain: import.meta.env.FC_authDomain,
//   projectId: import.meta.env.FC_projectId,
//   storageBucket: import.meta.env.FC_storageBucket,
//   messagingSenderId: import.meta.env.FC_messagingSenderId,
//   appId: import.meta.env.FC_appId
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPtOATl7AeHXiJ3FraBuFQuDfNK9FpXrs",
  authDomain: "toys-marketplace-386bc.firebaseapp.com",
  projectId: "toys-marketplace-386bc",
  storageBucket: "toys-marketplace-386bc.appspot.com",
  messagingSenderId: "395471114305",
  appId: "1:395471114305:web:208441d8c59b0b999036c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;