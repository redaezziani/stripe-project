'use client';
import * as React from 'react';
import { DataTable,ColumnDef } from '../table';
interface Manga {
  id: string;
  title: string;
  description: string;
  poster: string;
  rate: number;
  author: string;
  artist: string;
  genres: string[];
  lastChapter: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  websiteId: string;
}

const MangaDataTable: React.FC<{ mangaData: Manga[] }> = ({ mangaData }) => {
  const [data, setData] = React.useState<Manga[]>([]);
  const columns: ColumnDef<Manga>[] = [
    {
      accessorKey: 'id',
      header: 'ID',
      cell: ({ row }) => <div>{row.getValue('id')}</div>,
    },
    {
      accessorKey: 'title',
      header: 'Title',
      cell: ({ row }) => <div>{row.getValue('title')}</div>,
    },
    {
      accessorKey: 'description',
      header: 'Description',
      cell: ({ row }) => <div
      className=' line-clamp-1 truncate max-w-md'
      >{row.getValue('description')}</div>,
    },
    {
      accessorKey: 'poster',
      header: 'Poster',
      cell: ({ row }) => <img
      className='w-10 h-10 rounded-full object-cover'
      src={row.getValue('poster')} alt={row.getValue('title')} />,
    },
    {
      accessorKey: 'rate',
      header: 'Rate',
      cell: ({ row }) => <div>{row.getValue('rate')}</div>,
    },
    {
      accessorKey: 'author',
      header: 'Author',
      cell: ({ row }) => <div>{row.getValue('author')}</div>,
    },
    {
      accessorKey: 'artist',
      header: 'Artist',
      cell: ({ row }) => <div>{row.getValue('artist')}</div>,
    },
    {
      accessorKey: 'lastChapter',
      header: 'Last Chapter',
      cell: ({ row }) => <div>{row.getValue('lastChapter')}</div>,
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => <div>{row.getValue('status')}</div>,
    },
  ];
  React.useEffect(() => {
    setData(mangaData);
  }
  ,[mangaData]);
    
  return <DataTable
  //@ts-ignore
   columns={columns} data={data} />;
};

export default MangaDataTable;
