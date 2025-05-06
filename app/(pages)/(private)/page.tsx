'use client'
import { Container, IconButton, TextField } from '@mui/material';
import ClientsCards from '@/app/components/clients/clientsCards'
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Delete, Edit } from '@mui/icons-material';

const columns: GridColDef<(typeof rows)[number]>[] = [
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    flex: 1,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: ' ',
    align: 'center',
    width: 100,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: (params) => (
        <>
            <IconButton>
                <Edit className='text-primary/80' />
            </IconButton>
            <IconButton>
                <Delete className='text-red-500' />
            </IconButton>
        </>        
    )
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function Home() {
  return (
    <Container className="w-10/12 mx-auto">
        <ClientsCards />

        <Box className="rounded-xl overflow-hidden border border-gray-200" sx={{ maxHeight: 600}}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: { paginationModel: {pageSize: 20} }
                }}
                checkboxSelection
                className='rounded text-primary font-cinzel'
                disableRowSelectionOnClick />
        </Box>
    </Container>
  );
}
