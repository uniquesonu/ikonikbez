import React from 'react'
import NewListing from './NewListing';
import ListingField from './ListingField';
import Album from './Album';

export default function ListingDetails (){
  return (
    <div className='w-full'>
    {/* <NewListing /> */}
    <ListingField />
    <Album />
    </div>
  );
}
