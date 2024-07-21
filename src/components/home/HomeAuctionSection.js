import React, { useEffect, useState } from "react";
import { getApiData } from "../../helpers/getApiData";
import { HomeRoutes } from "../../routes/home";
import { sellTypes } from "../../enum/SellTypeEnum";

import { FaClock } from "react-icons/fa";
import AuctionIcon from "../icons/AuctionIcon";
import formatTime from "../../helpers/formatTime";
import SwiperImageComponent from "../SwiperImageComponent";


export default function HomeAuctionSection() {
  const [auctions, setAuctions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchAuctions = async () => {
    try {
      setLoading(true);
      const response = await getApiData(
        HomeRoutes.sellTypeItems + sellTypes.TIME_BASED_DYNAMIC_AUCTION
      );
      setAuctions(response);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAuctions();
  }, []);
  if (loading) {
    console.log("loading");
  }

  if (error) {
    console.log(error);
  }

  return (
    <div className="grid p-[104px_80px_0px_80px] flex-col justify-items-start gap-12 self-stretch">
      <h2 className="text-primaryDarkest text-3xl font-bold font-[Alexandria] leading-relaxed tracking-tight">
        Biddex's Auctions
      </h2>
      <div className="flex flex-row justify-items-stretch gap-2 ">
        {auctions.length > 0 ? (
          auctions.map((auction) => {
            return (
              <div className="w-[330px] h-[360px] flex flex-col gap-4 pr-2 items-center bg-white rounded-md shadow-sm shadow-dark-700 mb-2">
                <div className="relative text-gray-500">
                  <SwiperImageComponent imageUrls={auction.images} item={auction} />

                  <div className="max-w-[360px]">
                    {auction.auction_data.is_upcoming ? (
                      <div
                        className="flex p-2 justify-center items-center 
                    bg-gradient-to-b from-[#E88B00] to-[#D59A00] rounded-b-xl
                    gap-4 text-white font-bold text-sm  "
                      >
                        <span className="">
                          Upcoming auction{" "}
                          <FaClock className="inline-block mr-1" />
                          {formatTime(auction.auction_data.start_time)}
                        </span>
                      </div>
                    ) : (
                      <div
                        className="flex p-2 justify-center items-center 
                    bg-gradient-to-b from-[#36a769] to-[#28ce16] rounded-b-xl
                    gap-4 text-white font-bold text-sm  "
                      >
                        <AuctionIcon />{" "}
                        <span className="">
                          Highest Bid <FaClock className="inline-block mr-1" />
                          {formatTime(auction.auction_data.end_time)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col items-start p-[10px_12px_16px_12px] self-stretch">
                  <p className="text-grayDarkest font-bold pb-2">
                    {auction.title}
                  </p>
                  <ul className="flex space-x-2">
                    {auction.specs.map((spec) => (
                      <li className="text-gray-700 flex items-center justify-center pl-3">
                        <img className="pr-3" src={spec.icon} /> {spec.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })
        ) : (
          <div>No Data</div>
        )}
      </div>
      <div className="flex flex-col-2 gap-4 justify-center self-stretch items-center w-full">
        <button className="bg-primary rounded-full text-white font-bold p-3 hover:bg-[#376195] ">
          View All Auctions
        </button>
        <button className="bg-white rounded-full text-primary font-bold hover:bg-[#c8ddf6] border-2 border-primary p-3">
          View Upcoming Auctions
        </button>
      </div>
    </div>
  );
}
