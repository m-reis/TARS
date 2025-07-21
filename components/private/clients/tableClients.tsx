'use client'

import { TableClientProps } from "@/models/props/iTableClientProps";
import { BrowserUpdatedOutlined, Delete, Edit, PersonAdd } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";

export default function TableGridClients({ clientes, onEditClient, onAddClient}: TableClientProps){

    const [paginationModel, setPaginationModel] = useState({
        pageSize: 10,
        page: 0,
    });

    const columns: GridColDef[] = [
        {
            field: 'nome',
            headerName: 'Nome',
            width: 250,
            flex: 1,
            disableColumnMenu: true,
        },
        {
            field: 'fone',
            headerName: 'Telefone',
            sortable: false,
            width: 160,
            disableColumnMenu: true,
            valueFormatter: (val, row) => {
                const digits = row.fone.toString().replace(/\D/g, '');

                if (digits.length === 11) {
                    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
                }
                
                return row.fone.toString();
            }
            // valueGetter: (value, cli) => `${cli.nome || ''} ${cli. fone|| ''}`,
        },
        {
            width: 150,
            field: 'cpf',
            sortable: false,
            headerName: 'CPF',
            disableColumnMenu: true
        },
        {
            field: ' ',
            align: 'center',
            headerName: '',
            width: 220,
            sortable: false,
            filterable: false,
            disableReorder: true,
            disableColumnMenu: true,
            renderCell: (params) => (
                <>
                    <IconButton onClick={() => onEditClient(params.row)}>
                        <Edit className='text-primary/80 ' />
                    </IconButton>

                    <IconButton>
                        <Delete className='text-red-500' />
                    </IconButton>
                </>        
            ),
            renderHeader: () => (
                <>
                    <IconButton>
                        <BrowserUpdatedOutlined className='text-blue-500' />
                    </IconButton>

                    <Button className=' px-2 mx-2' onClick={() => onAddClient() } variant="contained" startIcon={<PersonAdd />}>
                        Cadastrar
                    </Button>
                </>        
            )
        }
    ];

    return (
        <>
            <DataGrid
                rows={clientes}
                columns={columns}
                checkboxSelection
                disableRowSelectionOnClick
                paginationModel={paginationModel}
                pageSizeOptions={[10]}
                getRowId={(row) => row.idClientes}
                onPaginationModelChange={setPaginationModel}
                className='custom-datagrid rounded text-primary font-cinzel'  />
        </>    
    )
}