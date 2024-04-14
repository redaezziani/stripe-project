import Image from "next/image";

interface table {
    index: number;
    email: string;
    amount: string;
    status: string;
    Code: string;
    date: string;
    action: string;
}

const tableData: table[] = [
    {
        index: 1,
        email: "acount4@gmail.com",
        amount: '100 USD',
        status: 'FAILED',
        Code: '123456',
        date: '12/12/2021',
        action: 'delete',
        
    },
    {
        index: 2,
        email: "account5@gmail.com",
        amount: '200 USD',
        status: 'SUCCESS',
        Code: '654321',
        date: '12/13/2021',
        action: 'edit',
    }
  
]

const Table = () => {
    return (
        <>
            <div className='mx-auto max-w-7xl pt-40 px-6' id="exchange-section">
                <div className="w-full flex justify-center items-center">
                <h2
                className="text-offwhite text-3xl lg:text-4xl font-semibold leading-snug mb-6  md:text-start text-center"
                >
                Manage Everything in Your Hand
                </h2>
                </div>
                <div className="table-b z-10 bg-white p-8 overflow-x-auto">
                    <h3 className="text-offwhite text-2xl">
                        Transaction History
                    </h3>
                   <img
                     src='/table.png'
                        alt='table'
                        className="w-full"
                    />
                </div>
            </div>
        </>
    )
}

export default Table;
