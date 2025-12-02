import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import Price from "./Price/Price";
import Review from "./Review/Review";

const Home = () => {
  return (<div className="overflow-hidden">
    <Hero />
    <Features />
    <Price />
    <Review />
  </div>
  );
};

export default Home;
