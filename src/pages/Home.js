import React from "react";
import HomeAuctionSection from "../components/home/HomeAuctionSection";
import Navbar from "./Navbar";
import HomeSearchSection from "../components/home/HomeSearchSection";
import WhyBuyFromUsSection from "../components/home/WhyBuyFromUsSection";
import HomeFixedPriceSection from "../components/home/HomeFixedPriceSection";

function App() {
  return (
    <div className="flex flex-row justify-center self-stretch text-white">
      <div className="absolute w-full h-full ">
        <div
          className="relative w-full h-162 
        bg-[linear-gradient(0deg,_rgba(0,_6,_14,_0.16)_0%,_rgba(0,_6,_14,_0.16)_100%)] bg-lightgray
         rounded-b-[24px] backdrop-blur-lg bg-cover bg-no-repeat"
          style={{ backgroundImage: 'url("/home/home2.jpg")' }}
        >
          <Navbar />
          <HomeSearchSection />
        </div>
        <HomeAuctionSection />

        <WhyBuyFromUsSection />

        <HomeFixedPriceSection />
      </div>
    </div>
  );
}

export default App;
