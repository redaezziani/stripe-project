'use client';
import { DataTable } from "@/components/admin/table";
export interface ColumnDef {
    accessorKey: string;
    header: string;
    cell: ({ row }: { row: any }) => JSX.Element;
}
import useSWR from 'swr';
import TransactionsTableActions from "./transactions-table-actions";
import { UpdateTransactionSideBar } from "./update-transactions-side-bar";
//@ts-ignore
const fetcher = (url) => fetch(url).then((res) => res.json());

const Transaction = () => {
    const {data:transaction , error} = useSWR('/api/admin/transactions', fetcher,{refreshInterval: 5000 });
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
            accessorKey: 'name',
            header: 'Name',
            cell: ({ row }: { row: any }) =>
            <div
            className=" text-muted-foreground"
            >
                {row.getValue('name')}
            </div>,
        },
        {
            accessorKey: 'phone',
            header: 'Phone',
            cell: ({ row }: { row: any }) =>
            <div
            className=" text-muted-foreground"
            >
                {row.getValue('phone')}
            </div>,  
        },
        {
            accessorKey: 'amount',
            header: 'Amount',
            cell: ({ row }: { row: any }) =>
            <div
            className=" text-muted-foreground"
            
            >
                {row.getValue('amount')} €
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
            header: 'Transaction Id',
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
                    className=" flex justify-start items-center gap-2 text-muted-foreground"
                >
                    <TransactionsTableActions
                        id={row.getValue('id')}
                        email={row.getValue('email')}
                        role={row.getValue('role')}
                        name={row.getValue('name')}
                    />
                    <UpdateTransactionSideBar
                        id={row.getValue('id')}
                        email={row.getValue('email')}
                        type={row.getValue('type')}
                        code={row.getValue('code')}
                        amount={row.getValue('amount')}
                        phone={row.getValue('phone')}
                        name={row.getValue('name')}
                    />
                    

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