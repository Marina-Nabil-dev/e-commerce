import React, { useState, useEffect } from "react";
import { HomeRoutes } from "../../routes/home";
import { getApiData } from "../../helpers/getApiData";
import SwiperImageComponent from "../SwiperImageComponent";
import CarNotFound from "./../ItemNotFound";
import { Link } from "react-router-dom";

function RecentlyAdded() {
  const [recentlyAddedItems, setRecentlyAddedItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecentlyAddedItems = async () => {
    try {
      setLoading(true);
      const response = await getApiData(HomeRoutes.ALL_ITEMS);
      setRecentlyAddedItems(response);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchRecentlyAddedItems();
  }, []);

  return (
    <div className="grid p-[100px_80px] flex-col justify-items-start self-stretch">
      <h2 className="text-primaryDarkest text-[60px] font-bold font-[Alexandria] leading-relaxed tracking-tight ">
        Recently Added
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-stretch self-stretch">
        {recentlyAddedItems.length > 0 ? (
          recentlyAddedItems.map((recentlyAddedItem) => {
            const calculatedMonthlyPrice = recentlyAddedItem.price / 12;
            return (
              <div className="w-[330px] m-5 bg-white rounded-md shadow-md  hover:shadow-lg">
                <SwiperImageComponent key={recentlyAddedItem.id}
                  imageUrls={recentlyAddedItem.images}
                  item={recentlyAddedItem}
                />

                <div className="flex flex-col w-full items-start p-[10px_12px_16px_12px] self-stretch justify-between">
                  <div className="flex justify-between items-center text-grayDarkest pb-2 w-full">
                    {!recentlyAddedItem.is_reserved ? (
                      <>
                        <p className="font-bold">
                          {recentlyAddedItem.title.length < 18
                            ? recentlyAddedItem.title
                            : recentlyAddedItem.title.substring(0, 18) + "..."}
                        </p>
                        <span className="flex flex-col w-1/2">
                          <div className="flex items-center justify-end">
                            <span className="text-xs mr-1">
                              {recentlyAddedItem.currency}
                            </span>
                            <span className="text-md font-bold">
                              {recentlyAddedItem.price.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex items-center justify-end">
                            <span className="text-xs mr-0.5">
                              {recentlyAddedItem.currency}
                            </span>
                            <span className="text-xs">
                              {calculatedMonthlyPrice.toLocaleString()} / Month
                            </span>
                          </div>
                        </span>
                      </>
                    ) : (
                      <span className="font-bold pb-4">
                        {recentlyAddedItem.title.length < 20
                          ? recentlyAddedItem.title
                          : recentlyAddedItem.title.substring(0, 20) + "..."}
                      </span>
                    )}
                  </div>
                  <div className="w-full border-b-[1px] border-gray-300"></div>

                  <ul className="flex space-x-2 max-h-[60px] pt-2">
                    {recentlyAddedItem.specs.map((spec) => (
                      <li className="text-gray-700 flex items-center justify-center pl-3" key={spec.id}>
                        {spec.icon != "" ? (
                          <img className="pr-1 size-5" src={spec.icon} />
                        ) : (
                          <p></p>
                        )}{" "}
                        {spec.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })
        ) : (
          <CarNotFound />
        )}
      </div>
      <div className="flex justify-center items-center self-stretch pb-2 w-full pt-[40px]">
        <Link
          to={HomeRoutes.SEARCH}
          className="bg-primary rounded-full text-white text-[18px] w-[320px] text-center font-bold p-[16px_28px] hover:bg-[#376195]"
        >
          View More
        </Link>
      </div>
    </div>
  );
}

export default RecentlyAdded;
