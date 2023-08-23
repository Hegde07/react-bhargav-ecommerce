import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
  {/* component */}
  <div className=" w-full ">
    <div className="flex flex-col md:flex-row justify-between items-center p-10 bg-gray-900 text-white">
      <div className="m-auto">
        <div className="text-center">
          <p>Made by bhargav .</p>
          <h2 className="font-bold">Download the E-commerce app now</h2>
        </div>
        <div className="pt-2 flex justify-center gap-x-3">
          <Link
            t0=''
            className="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80"
          >
            <img
              src="https://www.logo.wine/a/logo/App_Store_(iOS)/App_Store_(iOS)-Badge-Logo.wine.svg"
              alt="App Store"
              className="w-36 lg:w-44 xl:w-60"
              width={209}
              height={60}
            />
          </Link>
          <Link to=''
            className="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80"
          >
            <img
              src="https://www.logo.wine/a/logo/Google_Play/Google_Play-Badge-Logo.wine.svg"
              alt="App Store"
              className="w-36 lg:w-44 xl:w-60"
              width={209}
              height={60}
            />
          </Link>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Footer