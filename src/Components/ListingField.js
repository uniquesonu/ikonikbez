import React from 'react'
import InputField from './InputField'

const ListingField = () => {
  return (
    <div
      className="py-2 px-6 flex flex-col mx-16 my-2 mt-6 text-[18px] border border-black rounded-md "
      style={{ fontFamily: "Roboto, sans-serif" }}
    >
      <div className="text-black font-[400] text-[22px] mt-2">Listing Details</div>

      <div className="space-y-4 mt-4">
        <div className="flex flex-col gap-2 items-start">
          <label htmlFor="title" className="font-[400]">
            Title: *
          </label>
          <input
            type="text"
            id="title"
            className="border border-gray-400 rounded-[5px] py-2 px-3 w-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-2 items-start">
            <label htmlFor="category" className="font-[400]">
              Category: *
            </label>
            <input
              type="text"
              id="category"
              className="border border-gray-400 rounded-[5px] py-2 px-3 w-full"
            />
          </div>
          <div className="flex flex-col gap-2 items-start">
            <label htmlFor="occasion" className="font-[400]">
              Occasion: *
            </label>
            <input
              type="text"
              id="occasion"
              className="border border-gray-400 rounded-[5px] py-2 px-3 w-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <label htmlFor="collection" className="font-[400]">
            Collection: *
          </label>
          <input
            type="text"
            id="collection"
            className="border border-gray-400 rounded-[5px] py-2 px-3 w-full"
          />
        </div>
        <div className="flex flex-col gap-2 items-start">
          <label htmlFor="description" className="font-[400]">
            Description: *
          </label>
          <textarea
            type="text"
            id="description"
            className="border block w-full h-200 border-gray-400 rounded-[5px] py-2 px-3 h-200" rows={4}
          />
        </div>
        <div className="grid grid-cols-2 gap-12">
        <InputField title="Material: " placeholder="Note: Put search keywords on which this will appear"/>
        <InputField title="Fabric: " placeholder="Note: Put search keywords on which this will appear"/>
        <InputField title="Tags: " placeholder="Note: Put search keywords on which this will appear"/>
        <InputField title="Color: " placeholder="Note: Put search keywords on which this will appear"/>
        <InputField title="Customization Options" placeholder="Note: Put search keywords on which this will appear"/>
        <InputField title="Work: " placeholder="Note: Put search keywords on which this will appear"/>
        <InputField title="Price: " placeholder="Enter the Price" />
        <InputField title="SKU: " placeholder="Enter the SKU" />
      </div>

      </div>
      
    </div>
  )
}

export default ListingField
