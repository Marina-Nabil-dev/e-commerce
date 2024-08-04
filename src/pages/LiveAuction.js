import React, { useEffect, useState } from 'react'
import Navbar from '../pages/Navbar'
import { HomeRoutes } from '../routes/home';
import { getApiData } from '../helpers/getApiData';
import { sellTypes } from '../enum/SellTypeEnum';
import formatTime from '../helpers/formatTime';

export default function LiveAuction() {
  const [LiveAuctions , setLiveAuctions] = useState([])
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
  }
  useEffect(() => {
    fetchLiveAuctions();
  }, [])
  return (
    <>
    <Navbar/>
    <div className='container h-[100vh] mx-auto items-start self-stretch p-8 gap-6'>
      <h1 className='text-3xl leading-relaxed tracking-tight text-primaryDarkest font-semibold'>Live Auctions</h1>
      <table className='w-full table-fixed m-10 text-center'>
        <thead className='bg-gray-50 border-b'>
          <tr className='text-primaryDarkest p-2'>
            <th>Vehicle</th>
            <th>Ends In</th>
            <th>Auction Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className=''>
          {LiveAuctions.length > 0 ? (
            LiveAuctions.map((auction) => {
              return (
                <tr className='border-b border-gray-200 text-grayDarkest font-semibold px-20'>
                  <td>{auction.title}</td>
                  <td>{formatTime(auction.auction_data.end_time)}</td>
                  <td>{auction.sale_type.name}</td>
                  <td>{auction.auction_data.is_upcoming ? "Upcoming" : "Active"}</td>
                </tr>
              )
            })
          ) : (
            <div>No live auction</div>
          )}
            </tbody>
      </table>
      
    </div>
    </>
  )
}
