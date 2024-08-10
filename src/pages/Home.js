import React from "react";
import Navbar from "./Navbar";
import WhyBuyFromUsSection from "../components/home/WhyBuyFromUsSection";
import WhatDoWeDoSection from "../components/home/WhatDoWeDo";
import RecentlyAddedSection from "../components/home/RecentlyAdded";
import Footer from "../components/footer";
import PopularBrands from "../components/home/PopularBrands";
function App() {
  return (
    <>
     
          <Navbar />
          
           {/* <HomeSearchSection /> */}
        

         {/* <WhatDoWeDoSection/> */}

         <WhyBuyFromUsSection />
         <PopularBrands/>
         <RecentlyAddedSection />
         <Footer />

         {/* <HomeAuctionSection /> */}


         {/* <HomeFixedPriceSection /> */}
        
      </>
  );
}

export default App;
