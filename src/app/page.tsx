'use client';
import Link from 'next/link';
import React, { useRef } from 'react';

const Page = () => {
  

  return (
    <div className=' overflow-x-hidden'>
      <div className=""></div>

      <header className="myheader transform -skew-y-12 bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-300">

        <div className=" lg:px-28 lg:py-4 px-2 py-2 bg-gradient-to-r from-purple-500 via-red-600 to-yellow-300">
          <div className=" lg:px-28 lg:py-4 px-2 py-2  transform skew-y-12 ">
            <nav>
              <div className="flex justify-between text-white mt-40 lg:mt-28">

                <div>
                  <Link className="text-lg font-black" href="">stripe</Link>
                </div>
                <div className="lg:flex lg:justify-center lg:visible flex-none hidden">
                  <div>
                    <Link className="text-sm font-semibold px-4" href="">Products</Link>
                  </div>
                  <div>
                    <Link className="text-sm font-semibold px-4" href="">Use cases</Link>
                  </div>
                  <div>
                    <Link className="text-sm font-semibold px-4" href="">Developers</Link>
                  </div>
                  <div>
                    <Link className="text-sm font-semibold px-4" href="">Company</Link>
                  </div>
                  <div>
                    <Link className="text-sm font-semibold px-4" href="">Pricing</Link>
                  </div>
                </div>
                <div>
                  <Link
                  href={'/auth/signin'}
                  >
                  <button
                   className="flex bg-black py-2 px-4 text-sm bg-white bg-opacity-20 text-white rounded-full">
                    Sign in
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button></Link>
                </div>
              </div>
            </nav>


            <div className="lg:grid lg:grid-cols-2 block lg:px-30 lg:py-16 px-2 py-2">
              <div className="">
                <button
                 className="flex bg-black mt-4 py-1 px-4 mb-4 bg-opacity-20 text-xs text-white rounded lg:rounded-full">
                  Watch now • Sessions, our virtual conference, is on demand
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <h1 className="pt-10 mt-10 lg:text-7xl text-6xl py-10 lg:py-0 font-bold text-opacity-80 text-gray-900">Payments infrastructure for the internet</h1>
              </div>

              <div className="lg:visible invisible">
                <img className="absolute ml-40" width="850" src="https://i.ibb.co/q9rV42S/sdas.png" alt="" />
              </div>

            </div>
          </div>
        </div>

      </header>

      <main className="px-2 py-2 mt-4 lg:mt-12 ml-8 bg-white">
        <div className="">
          <div className="px-2 py-2 lg:px-28 lg:py-2 bg-white">
            <div className="lg:grid lg:grid-cols-2 block">
              <div className="">
                <p className="pt-20 pr-20 text-gray-600">Millions of businesses of all sizes – from startups to large enterprises – use Stripe's software and APIs to accept payments, send payouts, and manage their businesses online. </p>
                <div className="pt-10 flex">
                  <button
                  
                  className="flex bg-gray-800 py-2 px-4 text-sm font-semibold text-white rounded-full">
                    Start now
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button 
                   className="flex font-semibold  py-2 px-4 text-sm rounded-full">
                    Contact sales
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:grid lg:grid-cols-4 mt-20 lg:2 grid grid-cols-2 gap-x-32 gap-y-3 lg:px-20 lg:py-16">

            <div className="m-auto">
              <img width="100" src="https://i.ibb.co/31Fr6WV/Screen-Shot-2021-07-18-at-17-43-49.jpg" alt="" />
            </div>

            <div className="m-auto">
              <img width="100" src="https://i.ibb.co/HxnpdsR/Screen-Shot-2021-07-18-at-17-43-55.jpg" alt="" />
            </div>
            <div className="m-auto">
              <img width="100" src="https://i.ibb.co/JtPCF7V/Screen-Shot-2021-07-18-at-17-49-02.jpg" alt="" />
            </div>

            <div className="m-auto">
              <img width="100" src="https://i.ibb.co/FqMTzD6/Screen-Shot-2021-07-18-at-17-49-06.jpg" alt="" />
            </div>
            <div className="m-auto">
              <img width="100" src="https://i.ibb.co/3vmxNMh/Screen-Shot-2021-07-18-at-17-49-09.jpg" alt="" />
            </div>

            <div className="m-auto">
              <img width="100" src="https://i.ibb.co/s5pNP4y/Screen-Shot-2021-07-18-at-17-49-12.jpg" alt="" />
            </div>
            <div className="m-auto">
              <img width="100" src="https://i.ibb.co/wQXrYTL/Screen-Shot-2021-07-18-at-17-49-15.jpg" alt="" />
            </div>

            <div className="m-auto">
              <img width="100" src="https://i.ibb.co/W6KWXNY/Screen-Shot-2021-07-18-at-17-49-18.jpg" alt="" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Page;
