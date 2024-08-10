import React from "react";
import Navbar from "./Navbar";
import WhyBuyFromUsSection from "../components/home/WhyBuyFromUsSection";
import WhatDoWeDoSection from "../components/home/WhatDoWeDo";
import RecentlyAddedSection from "../components/home/RecentlyAdded";
import Footer from "../components/footer";
import PopularBrands from "../components/home/PopularBrands";
function App() {
  return (
    <div className="flex flex-row justify-center h-full relative self-stretch text-white">
      <div className="absolute w-full h-full ">
        <div
          className="relative w-full h-162 
        bg-[linear-gradient(0deg,_rgba(0,_6,_14,_0.16)_0%,_rgba(0,_6,_14,_0.16)_100%)] bg-lightgray
         rounded-b-[24px] backdrop-blur-lg bg-cover bg-no-repeat"
          style={{ backgroundImage: 'url("/home/home2.jpg")' }}
        >
          <Navbar />
          {/* <HomeSearchSection /> */}
        </div>

        <WhatDoWeDoSection/>

        <WhyBuyFromUsSection />
        <PopularBrands/>
        <RecentlyAddedSection />
        <Footer />

        {/* <HomeAuctionSection /> */}


        {/* <HomeFixedPriceSection /> */}
      </div>
    </div>
  );
}

export default App;
