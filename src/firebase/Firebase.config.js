import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyD-FR01fVdgdxtDP3rKux6wH56Fp9twdl4",
  authDomain: "my-one-b5e43.firebaseapp.com",
  projectId: "my-one-b5e43",
  storageBucket: "my-one-b5e43.appspot.com",
  messagingSenderId: "304733724699",
  appId: "1:304733724699:web:80e22cf863dc204e02d8be",
  measurementId: "G-WRZ3NBP6C4"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;