import Carousel from "./Carousel";
import Footer from "./Footer";
import Header from "./Header";
import PopularCourses from "./PopularCourses";
import Testemonials from "./Testemonials";

function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <PopularCourses />
      <Testemonials />
      <Footer />
    </>
  );
}

export default Home;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB5rSQmnah3xSYaSCEpad-DEI8NBn008-w",
//   authDomain: "ilearn-tutorial.firebaseapp.com",
//   projectId: "ilearn-tutorial",
//   storageBucket: "ilearn-tutorial.appspot.com",
//   messagingSenderId: "398579743922",
//   appId: "1:398579743922:web:2b9a3b370fa509bfb5ddab",
//   measurementId: "G-101T3L862G"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);