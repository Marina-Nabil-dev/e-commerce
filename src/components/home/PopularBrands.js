import React , {useState, useEffect} from 'react'
import { HomeRoutes } from './../../routes/home';
import { getApiData } from '../../helpers/getApiData';

export default function PopularBrands() {
    const [brands, setBrands] = useState([])

    const fetchBrands = async () => {
        try {
            const response = await getApiData(HomeRoutes.All_BRANDS);
            setBrands(response);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchBrands()
    }, [])

  return (
    <div className='text-center  p-[80px_100px]'>
        <h2 className='text-primaryDarkest text-[48px] font-semibold font-[Alexandria] leading-relaxed tracking-tight pb-10'>Popular Brands</h2>
        <div className='grid xl:grid-cols-4 lg:grid-col-3 sm:grid-col-2 md:grid-cols-3 gap-4 items-center justify-center'>
            {brands.slice(0, 7).map((brand) => (
                <div key={brand.id} className='grid p-[32px] items-center justify-center rounded-2xl h-[210px] border-[1px] '>
                    <img src={brand.image} alt={brand.name} className='object-contain h-[100px]' />
                    <p className='text-black text-[20px] font-semibold font-[Alexandria]'>{brand.name}</p>
                </div>
            ))}
            <div className='grid p-[32px] items-center justify-center rounded-2xl h-[210px] border-[1px] '>
                    <p className='text-primaryDarkest text-[20px] font-semibold font-[Alexandria] '>And More ...</p>
                </div>
        </div>
      
    </div>
  )
}
