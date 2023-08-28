
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqsakeswvYds-he1x-VEtse4nTobGDSBg",
  authDomain: "e-place-43b2f.firebaseapp.com",
  projectId: "e-place-43b2f",
  storageBucket: "e-place-43b2f.appspot.com",
  messagingSenderId: "713261654690",
  appId: "1:713261654690:web:20523ec8de8dbda30dadfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;

ReactDOM.createRoot(document.getElementById('root')).render(
      <>
      <App />
      <ToastContainer />
      </>
    
)
