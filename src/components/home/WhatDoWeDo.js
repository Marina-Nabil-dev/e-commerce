import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function WhatDoWeDoSection() {
  const [selectedTab, setSelectedTab] = useState("Buy");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="container mx-auto px-24 py-16">
      <div className="flex justify-center mb-8">
        <div className="flex items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-primaryDarkest">
            What do you want to do?
          </h1>
        </div>
      </div>

      <Tabs className="">
        <TabList className="grid grid-cols-4 gap-4 justify-center items-center border-b-2  text-center">
          <Tab
            className="text-primaryDarkest font-semibold pb-2.5 border-b-0
             aria-selected:text-primaryDarkest aria-selected:border-b-primary aria-selected:border-b-2 aria-selected:font-bold"
            onClick={() => handleTabClick("Buy")}
            selected={selectedTab === "Buy"}
          >
            Buy
          </Tab>
          <Tab
            className="text-primaryDarkest font-semibold pb-2.5 border-b-0
            aria-selected:text-primaryDarkest aria-selected:border-b-primary aria-selected:border-b-2 aria-selected:font-bold"
            onClick={() => handleTabClick("Sell")}
            selected={selectedTab === "Sell"}
          >
            Sell
          </Tab>
          <Tab
            className="text-primaryDarkest font-semibold pb-2.5 border-b-0
             aria-selected:text-primaryDarkest aria-selected:border-b-primary aria-selected:border-b-2 aria-selected:font-bold"
            onClick={() => handleTabClick("Import")}
            selected={selectedTab === "Import"}
          >
            Import
          </Tab>
          <Tab
            className="text-primaryDarkest font-semibold pb-2.5 border-b-0
             aria-selected:text-primaryDarkest aria-selected:border-b-primary aria-selected:border-b-2 aria-selected:font-bold"
            onClick={() => handleTabClick("Auction")}
            selected={selectedTab === "Auction"}
          >
            Auction
          </Tab>
        </TabList>
        <TabPanel className="justify-end text-primaryDarkest font-bold p-2">
          <div className="flex items-stretch justify-start">
            <div className="flex-1 w-2/3 ">
              <h2 className="text-3xl font-bold mb-4 text-primaryDarkest">
                Buying in easy &amp; simple steps
              </h2>
              <div className="text-start flex flex-col">
                <p className="text-lg text-gray-600 w-[80%]">
                  Lorem ipsum dolor sit amet consectetur. Consectetur purus
                  netus purus viverra posuere nibh sed. Congue eget tellus
                  fringilla egestas lobortis donec quis augue faucibus.
                </p>
              </div>
              <button
                className="bg-primary hover:bg-primaryDarkest text-white font-bold py-2 px-4 rounded-full 
              mb-2 justify-start my-2 w-[20%]"
                type="button"
              >
                Buy Now
              </button>
            </div>
            <div className="flex-initial w-1/3">
              <img src="/home/BuyNow.png" alt="Car" className="size- mx-auto" />
            </div>
          </div>
        </TabPanel>
        <TabPanel className='justify-end text-primaryDarkest font-bold p-2'>
          <div className="flex items-stretch justify-start">
            <div className="flex-1 w-2/3 ">
              <h2 className="text-3xl font-bold mb-4 text-primaryDarkest">
              Sell in easy &amp; simple steps
              </h2>
              <div className="text-start flex flex-col">
                <p className="text-lg text-gray-600 w-[80%]">
                  Lorem ipsum dolor sit amet consectetur. Consectetur purus
                  netus purus viverra posuere nibh sed. Congue eget tellus
                  fringilla egestas lobortis donec quis augue faucibus.
                </p>
              </div>
              <button
                className="bg-primary hover:bg-primaryDarkest text-white font-bold py-2 px-4 rounded-full 
              mb-2 justify-start my-2 self-stretch w-[20%]"
                type="button"
              >
                Sell Now
              </button>
            </div>
            <div className="flex-initial w-[20%]">
              <img src="/home/sell.png" alt="Car" className="size-60 mx-auto" />
            </div>
          </div>
        </TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
}
