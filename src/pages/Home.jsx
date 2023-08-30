import Header from "../components/Header";
import Testimonials from "../components/Testemonials";
import Carousel from "../components/Carousel";
import PopularCourses from "../components/PopularCourses";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <PopularCourses />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
