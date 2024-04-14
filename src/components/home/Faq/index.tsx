"use client"
import Image from "next/image";
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

interface faqdata {
    heading: string;
    subheading: string;
}

const faqdata: faqdata[] = [
    {
        heading: "1. What is a payment gateway?",
        subheading: "A payment gateway is a technology that allows merchants to accept online payments from customers. It acts as a middleman between the merchant's website and the financial institutions that process the payment. By integrating a payment gateway into your website, you can securely manage transactions and receive payments directly into your account."
    },
    {
        heading: "2. How does a payment gateway work?",
        subheading: "When a customer makes a purchase on your website, the payment gateway securely collects the customer's payment information and sends it to the payment processor. The payment processor then communicates with the customer's bank to authorize the transaction. Once the transaction is approved, the payment gateway notifies you and transfers the funds to your account."
    },
    {
        heading: "3. What are the benefits of using a payment gateway?",
        subheading: "Using a payment gateway offers several benefits, including: \n\n- Secure transactions: Payment gateways use encryption and other security measures to protect sensitive customer data. \n- Increased sales: By accepting online payments, you can reach a wider audience and provide a convenient checkout experience. \n- Streamlined operations: Payment gateways automate the payment process, reducing manual effort and improving efficiency. \n- Integration options: Payment gateways can be integrated with various e-commerce platforms and shopping carts, making it easier to manage your online business."
    }
];

const Faq = () => {
    return (
        <div className="my-20 px-6" id="faq-section">
            <h3 className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-3">Frequently Asked And Question</h3>
            <p className="text-center lg:text-lg font-normal text-bluish">
                Here are some common questions about payment gateways and how they work. If you have any other questions, feel free to contact us.
            </p>

            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2">
                    {/* Column-1 */}
                    <div>
                        <div className="w-full px-4 pt-16">

                            {faqdata.map((items, i) => (
                                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-blue py-8 px-6 mb-5" key={i}>
                                    <Disclosure>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between rounded-lg text-offwhite sm:px-4 sm:py-2 text-left md:text-2xl font-medium">
                                                    <span>{items.heading}</span>
                                                    <ChevronUpIcon
                                                        className={`${open ? 'rotate-180 transform' : ''
                                                            } h-5 w-5 text-blue-500`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 md:text-lg text-bluish font-normal opacity-50">{items.subheading}</Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Column-2 */}
                    <div className="mt-32">
                        <Image src={'/images/Faq/faq.svg'} alt="faq-image" width={941} height={379} />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Faq;
