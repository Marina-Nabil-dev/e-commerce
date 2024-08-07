import React from 'react'
import NotFoundIcon from './icons/NotFoundIcon'

export default function NotFound() {
  return (
    <div className='container grid mx-auto max-w-[1366px] items-center text-center justify-center m-2 p-4'>
        <h1 className='text-3xl font-bold'>Nothing here?</h1>
        <p className='text-xl'>No Live Auctions Items</p>
        <NotFoundIcon />
    </div>
  )
}
