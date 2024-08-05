import React, { useEffect, useState } from "react";
import Navbar from "../pages/Navbar";
import { HomeRoutes } from "../routes/home";
import { getApiData } from "../helpers/getApiData";
import { sellTypes } from "../enum/SellTypeEnum";
import formatTime from "../helpers/formatTime";
import CheckIcon from "./../components/icons/CheckIcon";

export default function LiveAuction() {
  const [LiveAuctions, setLiveAuctions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchLiveAuctions = async () => {
    try {
      const response = await getApiData(
        HomeRoutes.sellTypeItems + sellTypes.TIME_BASED_DYNAMIC_AUCTION
      );
      setLiveAuctions(response);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchLiveAuctions();
  }, []);

  const thStyle = "text-primaryDarkest p-2";
  //set backround color a dymanic var to optimize the performance ${}
  return (
    <>
      <Navbar />
      <div className="container h-[100vh] mx-auto items-start self-stretch p-8 gap-6">
        <h1 className="text-3xl leading-relaxed tracking-tight text-primaryDarkest font-semibold">
          Live Auctions
        </h1>
        <table className="w-full table-fixed m-10 text-center">
          <thead className="bg-gray-50 border-b">
            <tr className = {thStyle}>
              <th className={thStyle}>Vehicle</th>
              <th className={thStyle}>Ends In</th>
              <th className={thStyle}>Auction Type</th>
              <th className={thStyle}>Status</th>
            </tr>
          </thead>
          <tbody className="">
            {LiveAuctions.length > 0 ? (
              LiveAuctions.map((auction) => {
                return (
                  <tr className="border-b border-gray-200 text-grayDarkest font-semibold px-20">
                    <td className="px-4 py-3">{auction.title}</td>
                    <td className="px-4 py-3">
                      {formatTime(auction.auction_data.end_time)}
                    </td>
                    <td className="px-4 py-3">{auction.sale_type.name}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center rounded-full bg-green-50 max-w-[100px] mx-auto">
                        <CheckIcon />
                        <span className="font-medium mx-2 ">
                          Active
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <div>No live auction</div>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
