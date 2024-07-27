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
      <div className="grid grid-cols-3 justify-items-stretch">
        {fixedPriceItems.length > 0 ? (
          fixedPriceItems.map((fixedPriceItem) => {
            const calculatedMonthlyPrice = fixedPriceItem.price / 12;
            return (
              <div className="w-[330px] m-5 bg-white rounded-md shadow-md  hover:shadow-lg">
                <SwiperImageComponent
                  imageUrls={fixedPriceItem.images}
                  item={fixedPriceItem}
                />

                <div className="flex flex-col w-full items-start p-[10px_12px_16px_12px] self-stretch justify-between">
                  <div className="flex justify-between items-center text-grayDarkest pb-2 w-full">
                    {!fixedPriceItem.is_reserved ? (
                      <>
                        <p className="font-bold">
                          {fixedPriceItem.title.length < 18
                            ? fixedPriceItem.title
                            : fixedPriceItem.title.substring(0, 18) + "..."}
                        </p>
                        <span className="flex flex-col w-1/2">
                          <div className="flex items-center justify-end">
                            <span className="text-xs mr-1">
                              {fixedPriceItem.currency}
                            </span>
                            <span className="text-md font-bold">
                              {fixedPriceItem.price.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex items-center justify-end">
                            <span className="text-xs mr-0.5">
                              {fixedPriceItem.currency}
                            </span>
                            <span className="text-xs">
                              {calculatedMonthlyPrice.toLocaleString()} /
                              Month
                            </span>
                          </div>
                        </span>
                      </>
                    ) : (
                      <p className="font-bold">
                        {fixedPriceItem.title.length < 20
                          ? fixedPriceItem.title
                          : fixedPriceItem.title.substring(0, 20) + "..."}
                      </p>
                    )}
                  </div>

                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 mr-2"
                  >
                    <path d="M18 13V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2z" />
                  </svg> */}
                  <ul className="flex space-x-2">
                    {fixedPriceItem.specs.map((spec) => (
                      <li className="text-gray-700 flex items-center justify-center pl-3">
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
    </div>
  );
}
