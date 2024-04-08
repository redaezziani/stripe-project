'use client';
import { DataTable } from "@/components/admin/table";
export interface ColumnDef {
    accessorKey: string;
    header: string;
    cell: ({ row }: { row: any }) => JSX.Element;
}

import useSWR from 'swr';
//@ts-ignore
const fetcher = (url) => fetch(url).then((res) => res.json());
const Transfare = () => {
    const {data:transfare , error} = useSWR('/api/admin/transfare', fetcher,{refreshInterval: 5000 });
    
    const columns: ColumnDef[] = [
        {
            accessorKey: 'id',
            header: 'ID',
            cell: ({ row }: { row: any }) =>
            <div>
                {row.getValue('id')}
            </div>,
        },
        {
            accessorKey: 'amount',
            header: 'Amount',
            cell: ({ row }: { row: any }) =>
            <div
            className=" flex flex-col gap-1 justify-start items-start"
            >
                
                <h5
                className="text-muted-foreground text-xs "
                >
                {row.getValue('amount')} USD
                </h5>
            </div>,
        },
        {
            accessorKey: 'status',
            header: 'Status',
            cell: ({ row }: { row: any }) =>
            <div
            className={`flex text-xs  font-medium items-center w-fit rounded-sm  px-4 p-0.5 gap-2 ${row.getValue('status')==='PENDING'?'text-[#217005] bg-[#d1fab3]':row.getValue('status')==='SUCCESS'?' text-amber-500 bg-amber-500/10':row.getValue('status')==='FAILED'?'text-blue-500 bg-blue-500/10':' text-destructive bg-destructive/10'}`}
            
            >
                {row.getValue('status')} 
            </div>,
        },
        {
            accessorKey: 'bankAccount',
            header: 'BankAccount',
            cell: ({ row }: { row: any }) =>
            <div
            className=" text-muted-foreground"
            >
                {row.getValue('bankAccount')}
            </div>,
        },
        {
            accessorKey: 'createdAt',
            header: 'Transfare Date',
            cell: ({ row }: { row: any }) =>
            <div
                className="text-muted-foreground"
            >
                {new Date(row.getValue('createdAt')).toLocaleString()}
            </div>,
        },
       

    ];

  return (
    <div
    className=" flex justify-start items-center gap-3 flex-col w-full"
    >
        
       {transfare&& <div className="w-full  bg-background rounded-xl ">
       <h1
        className="text-lg m-2 font-semibold text-slate-600 dark:text-gray-200 w-full"
        >
            Total Users Transfare
        </h1>
            {transfare?.data?.length>0 &&
            <DataTable
            total={transfare?.data?.length}
            data={transfare?.data} columns={columns}
            />
            }
        </div>}
    </div>
  )
}

export default Transfare