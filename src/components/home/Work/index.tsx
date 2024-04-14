"use client"
import Image from 'next/image';

interface workdata {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const workdata: workdata[] = [
    {
        imgSrc: '/images/Work/icon-one.svg',
        heading: 'Payment Solution',
        subheading: 'Streamlining transactions effortlessly, we provide secure and reliable payment solutions to power your business',
    },
    {
        imgSrc: '/images/Work/icon-two.svg',
        heading: 'Growth Business',
        subheading: 'Fueling growth seamlessly, our solutions empower businesses to thrive and expand with confidence.',
    },
    {
        imgSrc: '/images/Work/icon-three.svg',
        heading: 'Connected People',
        subheading: 'Connecting people seamlessly, our solutions foster strong connections and enable smooth interactions for all.',
    },

]

const Work = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative'>
                <div className="radial-bgone hidden lg:block"></div>
                <div className='text-center mb-14'>
                    <h3 className=' text-bluish md:text-lg text-primary text-3xl  font-bold mb-3'>
                    WHAT WE DO
                    </h3>
                    <p className=' font-normal md:text-4xl leading-8'>
                    Get Ready To Have Best Smart Payments in The World
                    </p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32'>

                    {workdata.map((items, i) => (
                        <div className='card-b  p-8' key={i}>
                            <div className='work-img-bg rounded-full flex justify-center absolute p-6'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={44} height={44} />
                            </div>
                            <div>
                                <Image src={'/images/Work/bg-arrow.svg'} alt="arrow-bg" width={85} height={35} />
                            </div>
                            <h3 className='text-2xl text text-white font-semibold text-center mt-8'>{items.heading}</h3>
                            <p className='text-base font-normal te text-white/60 text-center mt-2'>{items.subheading}</p>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Work;
