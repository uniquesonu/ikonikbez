import React from 'react'
import Photos from './Photos'
import Videos from './Videos'

const Album = () => {
  return (
    <div className='className="py-2 px-6 mx-16 my-2 mt-6 text-[18px] border border-black rounded-md"
    style={{ fontFamily: "Roboto, sans-serif" }}'>
    <div className="text-black font-[400] text-[22px] mt-2">
        Listing Details
      </div>
    <Photos />
    <Videos />
    </div>
  )
}

export default Album
