"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';


const Banner = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className=' w-full overflow-hidden relative' id="home-section">
            <div className='arrowOne'></div>
            <div className='radial-banner hidden lg:block'></div>

            <div className="mx-auto w-full lg:max-w-7xl pt-16 lg:pt-40 sm:pb-24 px-6">

                <div className='height-work'>
                    <div className='grid grid-cols-1 lg:grid-cols-12 my-16'>
                        <div className='arrowTwo'></div>
                        <div className='col-span-7'>
                            <h1 className="text-4xl lg:text-6xl font-bold mb-5 text-slate-700 md:4px md:text-start text-center">
                            The Smart Way for <span
                            className=' text-primary'
                            >Online Payment</span> Solution.
                            </h1>
                            <p className='text-slate-400 md:text-lg font-normal mb-10 md:text-start text-center'>
                            Trustworthy Payment Solutions for Every Business
                            </p>
                            <div className='flex align-middle justify-center md:justify-start'>
                               <Link href="/auth/signin">
                               <Button
                                size={'lg'}
                                >
                                    Get Started
                                </Button>
                                 </Link>
                            </div>
                        </div>

                        <div className='col-span-4 flex justify-end items-center lg:-m-48'>
                            
                            <Image
                            className=' border border-slate-300/45 rounded-md'
                            src="/dash.png" alt="nothing" width={600} height={360} />
                           
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
