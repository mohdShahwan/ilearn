import React from "react";
import Header from "../components/Header";
import Testimonials from "../components/Testemonials";
import Carousel from "../components/Carousel";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <Cards title="Most popular courses"/>
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
