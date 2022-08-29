import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfrPHy9NsZkAtjDPyUDFTvpAXo-ifGFiU",
  authDomain: "ypg-security.firebaseapp.com",
  projectId: "ypg-security",
  storageBucket: "ypg-security.appspot.com",
  messagingSenderId: "283393304181",
  appId: "1:283393304181:web:a9a9ac4fcced3eb3d13a3c",
  measurementId: "G-ND5ZCGNRRT"
};

const app = initializeApp(firebaseConfig, "main");
const employeeApp = initializeApp(firebaseConfig, "employee-instance");
export const auth = getAuth(app);
export const employeeAuth = getAuth(employeeApp);
export const db = getFirestore(app);