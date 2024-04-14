import Link from "next/link";


const Simple = () => {
    return (
        <div className=" bg-blue-200 w-full relative">
            <div className="simpleone"></div>
            <div className="simpletwo"></div>
            <div className="simplethree"></div>
            <div className="simplefour"></div>
            <div className="simplefive"></div>
            <div className="mx-auto max-w-5xl py-24 px-6">
                <h3 className="text-center text-offwhite text-3xl lg:text-5xl font-semibold mb-6">
                    Simple and easy to use
                </h3>
                <p className="text-center text-bluish text-lg font-normal mb-8">
                    a good user experience is what we strive for. <br /> Our platform is easy to use and navigate, so you can focus on what matters most.
                </p>
                <div className="flex justify-center ">
                  <Link href="/auth/signup">
                    <button className="bg-primary text-white px-6 py-3 rounded-lg">Get Started</button>
                    </Link>
                </div>
            </div>
            <div className="simplesix"></div>
            <div className="simpleseven"></div>
            <div className="simpleeight"></div>
            <div className="simplenine"></div>
            <div className="simpleten"></div>
        </div>
    )
}

export default Simple;
