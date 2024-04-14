import Image from "next/image";


interface featuresdata {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const featuresdata: featuresdata[] = [
    {
        imgSrc: '/images/Features/featureOne.svg',
        heading: 'User Friendly',
        subheading: 'Simplify your experience with our intuitive, user-friendly interface. Navigate effortlessly and get things done with ease',
    },
    {
        imgSrc: '/images/Features/featureTwo.svg',
        heading: 'Best Support',
        subheading: 'Count on us for unparalleled support whenever you need it. Our dedicated team is here to provide you with the best support experience.',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'Secure',
        subheading: 'Rest assured with our ironclad security measures. Your data is safeguarded with the utmost care and diligence',
    },
]

const Features = () => {
    return (
        <div className="mx-auto max-w-7xl my-0 md:my-40 pt-36 px-6 relative" id="features-section">
            <div className="radial-bg hidden lg:block"></div>
            <div className="grid lg:grid-cols-2 gap-x-4 gap-y-4">
                {/* Column-1 */}
                <div
                className=" col-span-2 flex justify-center items-center w-full flex-col gap-2"
                >
                    <h3 className="feature-font text-lg font-semibold mb-4 text-center md:text-start">FEATURES</h3>
                    <h2 className="text-offwhite text-3xl lg:text-5xl font-semibold leading-snug mb-6 text-center md:text-start">The most trusted GetWay </h2>
                    <p className="lg:text-lg font-normal text-bluish text-center md:text-start">
                        the best way to buy, sell and manage your payments and transactions with digital assets
                    </p>
                </div>
                <div
                className=" col-span-2 flex justify-center items-center w-full flex-col gap-2"
                >
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:-mr-56">
                        {featuresdata.map((items, i) => (
                            <div className=" border border-blue-300 py-10 pr-12 bg-white pl-6 rounded-lg" key={i}>
                                <div className="rounded-full gg h-16 w-16 flex items-center justify-center mb-10">
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={24} height={30} />
                                </div>
                                <h5 className="text-offwhite text-lg font-medium mb-4">{items.heading}</h5>
                                <p className="text-lightblue text-sm font-normal">{items.subheading}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
