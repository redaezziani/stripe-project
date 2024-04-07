'use client';
import { useToast } from "@/components/ui/use-toast";
import { DataTable } from "@/components/admin/table";
import { Checkbox } from "@/components/ui/checkbox";
import Copie from "../for-all/copie";
export interface ColumnDef {
    accessorKey: string;
    header: string;
    cell: ({ row }: { row: any }) => JSX.Element;
}
import useSWR from 'swr';
//@ts-ignore
const fetcher = (url) => fetch(url).then((res) => res.json());
const Transaction = () => {
    const {data:transaction , error} = useSWR('/api/user/transactions', fetcher,{refreshInterval: 15000 });
    
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
            accessorKey: 'email',
            header: 'Email',
            cell: ({ row }: { row: any }) =>
            <div
            className=" flex flex-col gap-1 justify-start items-start"
            >
                
                <h5
                className="text-muted-foreground text-xs "
                >
                {row.getValue('email')}
                </h5>
            </div>,
        },
        {
            accessorKey: 'amount',
            header: 'Amount',
            cell: ({ row }: { row: any }) =>
            <div
            className=" text-muted-foreground"
            
            >
                {row.getValue('amount')} USD
            </div>,
        },
        {
            accessorKey: 'type',
            header: 'Status',
            cell: ({ row }: { row: any }) =>
            <div
            className={`flex text-xs  font-medium items-center w-fit rounded-sm  px-4 p-0.5 gap-2 ${row.getValue('type')==='PAID'?'text-[#217005] bg-[#d1fab3]':row.getValue('type')==='REFUND'?' text-amber-500 bg-amber-500/10':row.getValue('type')==='CANCELLED'?'text-blue-500 bg-blue-500/10':' text-destructive bg-destructive/10'}`}
            >
                {row.getValue('type')}
            </div>,
        },
        {
            accessorKey: 'code',
            header: 'Code',
            cell: ({ row }: { row: any }) =>
            <div
            className=" text-muted-foreground"
            >
                {row.getValue('code')}
            </div>,
        },
        {
            accessorKey: 'createdAt',
            header: 'Transaction Date',
            cell: ({ row }: { row: any }) =>
            <div
                className="text-muted-foreground"
            >
                {new Date(row.getValue('createdAt')).toLocaleString()}
            </div>,
        },
        {
            accessorKey: 'action',
            header: 'Action',
            cell: ({ row }: { row: any }) =>
            <div
            className=" text-muted-foreground"
            >
               <Copie text={row.getValue('code')} />
            </div>,
        },

    ];

  return (
    <div
    className=" flex justify-start items-center gap-3 flex-col w-full"
    >

       {transaction&& <div className="w-full  bg-background rounded-xl ">
            {transaction?.data?.length>0 &&
            <DataTable
            total={transaction?.data?.length}
            data={transaction?.data} columns={columns}
            />
            }
        </div>}
    </div>
  )
}

export default Transaction