import React from "react";
import Navbar from "./Navbar";
import WhyBuyFromUsSection from "../components/home/WhyBuyFromUsSection";
import WhatDoWeDoSection from "../components/home/WhatDoWeDo";
import RecentlyAddedSection from "../components/home/RecentlyAdded";
import PopularBrands from "../components/home/PopularBrands";
import HomeBlog from "./../components/home/HomeBlog";
function App() {
  return (
    <>
      <WhatDoWeDoSection />
      <WhyBuyFromUsSection />
      <PopularBrands />
      <RecentlyAddedSection />
      <HomeBlog />
    </>
  );
}

export default App;
