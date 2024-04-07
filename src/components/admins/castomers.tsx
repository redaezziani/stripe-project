'use client';
import { DataTable } from "@/components/admin/table";
export interface ColumnDef {
    accessorKey: string;
    header: string;
    cell: ({ row }: { row: any }) => JSX.Element;
}
import useSWR from 'swr';
import CastomersTableActions from "./castomers-table-actions";
import { UpdateUserSideBar } from "./update-users-side-bar";
//@ts-ignore
const fetcher = (url) => fetch(url).then((res) => res.json());
const Castomers = () => {
    const { data: castomers, error } = useSWR('/api/admin/castomers', fetcher, { refreshInterval: 5000 });
    if (error){
        return(
            <h1>
                errr
            </h1>
        )
    }
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
            header: 'name',
            cell: ({ row }: { row: any }) =>
                <div
                    className=" text-muted-foreground"

                >
                    {row.getValue('name')}
                </div>,
        },
        {
            accessorKey: 'role',
            header: 'Role',
            cell: ({ row }: { row: any }) =>
                <div
                    className={`flex text-xs  font-medium items-center w-fit rounded-sm  px-4 p-0.5 gap-2 ${row.getValue('role') === 'admin' ? 'text-[#217005] bg-[#d1fab3]' : 'text-[#b27826] bg-[#f9e7d1]'}`}
                >
                    {row.getValue('role')}
                </div>,
        },
        {
            accessorKey: 'createdAt',
            header: 'Castomers Date',
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
                    <CastomersTableActions
                        id={row.getValue('id')}
                        email={row.getValue('email')}
                        role={row.getValue('role')}
                        name={row.getValue('name')}
                    />
                    <UpdateUserSideBar
                        id={row.getValue('id')}
                        email={row.getValue('email')}
                        role={row.getValue('role')}
                        name={row.getValue('name')}
                    />

                </div>,
        },

    ];

    return (
        <div
            className=" flex justify-start items-center gap-3 flex-col w-full"
        >

            {castomers && <div className="w-full  bg-background rounded-xl ">
                {castomers?.data?.length > 0 &&
                    <DataTable
                        total={castomers?.data?.length}
                        data={castomers?.data} columns={columns}
                    />
                }
            </div>}
        </div>
    )
}

export default Castomers