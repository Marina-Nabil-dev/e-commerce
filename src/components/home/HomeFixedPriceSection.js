import React, { useEffect, useState } from "react";
import { HomeRoutes } from "../../routes/home";
import { sellTypes } from "../../enum/SellTypeEnum";
import { getApiData } from "../../helpers/getApiData";
import SwiperImageComponent from "../SwiperImageComponent";
import CarNotFound from "../ItemNotFound";

export default function HomeFixedPriceSection() {
  const [fixedPriceItems, setFixedPriceItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchFixedPriceItems = async () => {
    try {
      setLoading(true);
      const response = await getApiData(
        HomeRoutes.sellTypeItems + sellTypes.FIXED_PRICE
      );
      setFixedPriceItems(response);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFixedPriceItems();
  }, []);

  return (
    <div className="grid p-[104px_80px_0px_80px] flex-col justify-items-center self-stretch">
      <h2 className="text-primaryDarkest text-[48px] font-bold font-[Alexandria] leading-relaxed tracking-tight">
        Buy Now
      </h2>
      <h3 className="text-black text-[20px] font-bold font-[Alexandria]">
        Buy unique vehicles with affordable prices
      </h3>
      <div className="grid grid-cols-3 gap-4 justify-items-stretch">
        {fixedPriceItems.length > 0 ? (
          fixedPriceItems.map((fixedPriceItem) => {
            return (
              <div className="w-full h-full m-5 bg-white rounded-md shadow-md  hover:shadow-lg">
                <div className="relative text-gray-500">
                <SwiperImageComponent imageUrls={fixedPriceItem.images} item={fixedPriceItem} />
                </div>
                <div className="flex flex-col items-start p-[10px_12px_16px_12px] self-stretch">
                  <div className=" flex text-grayDarkest font-bold pb-2 justify-content:space-between">
                    <p>{fixedPriceItem.title.length < 10  ? fixedPriceItem.title : fixedPriceItem.title.substring(0, 20) + '...'}</p>
                    <span className="ml-auto">ss</span>
                  </div>
                  <ul className="flex space-x-2">
                    {fixedPriceItem.specs.map((spec) => (
                      <li className="text-gray-700 flex items-center justify-center pl-3">
                       {spec.icon != "" ?  <img className="pr-1 size-5" src={spec.icon} /> : <p></p> } {spec.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })
        ) : (
          <CarNotFound/>
        )}
      </div>
    </div>
  );
}
