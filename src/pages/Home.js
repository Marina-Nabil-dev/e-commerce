import React, { useEffect } from "react";
import { useState } from "react";
import { ApiRoutes } from "../routes/apiRoutes";
import {getApiData} from "../helpers/getApiData"
import  Navbar  from './Navbar';

function App() {
  const [selectedBrand, setBrand] = useState("");
  const [priceCategory, setPriceCategory] = useState("");
  const [sellType, setSellType] = useState("");

  const [brandList, setBrands] = useState([]);
  const [priceCategories, setPriceCategories] = useState([]);
  const [sellTypes, setSellTypes] = useState([]);

  const fetchBrands = async () => {
    const response = await getApiData(ApiRoutes.BRANDS);
    setBrands(response)
  }

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const fetchPriceCategories = async() =>{
    const response =await getApiData(ApiRoutes.PRICE_CATEGORIES);
    setPriceCategories(response);
  }
  const fetchSellTypes = async() =>{
    const response = await getApiData(ApiRoutes.SEARCH_FILTERS + "sale_types");
    setSellTypes(response[0]) 
  }

  useEffect(() => {
    fetchBrands();
  }, []);

  useEffect(()=>{fetchPriceCategories()}, [])

  useEffect(()=>{fetchSellTypes()}, [])



  return (
    <div className="flex flex-row justify-center self-stretch text-white">
    <div className="absolute w-full h-full ">
      <div className="relative w-full h-162 
      bg-[linear-gradient(0deg,_rgba(0,_6,_14,_0.16)_0%,_rgba(0,_6,_14,_0.16)_100%)] bg-lightgray
       rounded-b-[24px] backdrop-blur-lg bg-cover bg-no-repeat" style={{ backgroundImage: 'url("/home/home2.jpg")' }}>
      <Navbar/>
        <div className="flex flex-col items-center p-[250px_80px_40px_80px] justify-center">
          <h1 className="pb-2 text-5xl font-bold  ">
           Welcome to Biddex
          </h1>
          <h2 className="text-2xl font-semibold items-center w-auto">
            We are a platform that is user-friendly, making it easy to sell or buy a car without any hassle. Additionally, we provide you with a variety of sales, including auction sales.
          </h2>
        </div>
    
      <form className="relative flex items-start justify-center m-[26px_80px_26px_80px] text-gray-500 p-[10px_10px_40px_10px] gap-5 rounded-[10px] border-1	">
        <div className="flex flex-col space-y-2  bg-white rounded-[10px] border-2">
          <select
            id="brand"
            value={selectedBrand}
            onChange={handleBrandChange}
            className="p-2 rounded-lg border-none text-gray-500 bg-white bg-opacity-20 cursor-pointer"
          >
            <option value="">All Brands</option>
            {brandList.map((brand) => (
              <option key={brand.slug} value={brand.slug}>{brand.name}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col space-y-2 bg-white text-gray-500 rounded-[10px] border-2">
          <select
            id="sellType"
            value={sellType}
            onChange={(e) => setSellType(e.target.value)}
            className="p-2 rounded-lg border-none bg-white bg-opacity-20 cursor-pointer"
          >
            <option value="">All Sale Types</option>
            {sellTypes.map((saleType) => (
              <option key={saleType.key} value={saleType.slug}>{saleType.name}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col space-y-2  bg-white  text-gray-500 rounded-[10px] border-2">
          <select
            id="priceCategory"
            value={priceCategory}
            onChange={(e) => setPriceCategory(e.target.value)}
            className="p-2 rounded-lg border-none bg-white bg-opacity-20 cursor-pointer"
          >
            <option value="">All Price Categories</option>
            {priceCategories.map((priceCategory) => (
              <option key={priceCategory.id} value={priceCategory.id}>{priceCategory.name}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="flex items-center px-4 py-2 bg-primary text-white rounded-full font-bold border-1">
          <span className="mr-2">🔍</span>Search Cars
        </button>
      </form>
      </div>
    </div>
    </div>
  );
}

export default App;
