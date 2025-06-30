'use client'

import FredGrugPage from "@components/fredGrugPage";
import { Button, Container, Paper} from '@mui/material';
import ClientsCards from '@/components/private/clients/clientsCards'
import Box from '@mui/material/Box';
import { PersonAdd } from '@mui/icons-material';
import { Client } from "@/models/iClient";
import { useEffect, useState } from "react";
import TableGridClients from "@/components/private/clients/tableClients";
import ClientService from "@/services/clientSerivce";
import { globalLoading } from "@/lib/globalLoading";

export default function Home() {

    const setGlobalLoading = globalLoading( s => s.setLoading)

    const [clientesLoad, setClientesLoad] = useState(false)

    const [clientes, setClientes] = useState<Client[]>([])

    const hadleEditClient = (client: Client) => {
        setClientes(clientes.map((cli) => cli.idClientes == client.idClientes ? { ...cli, nome: 'Novo Nome' } : cli ))
    }

    useEffect(() => {
        setGlobalLoading(true)

        const getAllClientes = async () => {
            const res = await ClientService.getAll()

            setClientes(res);

            setGlobalLoading(false);

            setClientesLoad(true);
        }

        getAllClientes()
  }, [setGlobalLoading]);

    return (
        <FredGrugPage>
            <Container className="w-10/12 my-0 py-0  sm:mx-auto">
                <ClientsCards total={clientes.length} />

                <Box className="rounded-xl my-4 overflow-hidden">
                    {clientes.length > 0 ? (
                        <TableGridClients clientes={clientes} onEditClient={hadleEditClient} />
                    ) : clientesLoad ? (
                        <Paper className="my-4 p-10 bg-secondary/20 max-w-xl mx-auto backdrop-blur-md rounded-2xl shadow-lg">
                            <div className="text-center mx-auto">
                                <p className="text-lg text-primary/80 mb-6">
                                    Ainda não há clientes cadastrados no sistema, tenha a honra de cadastrar o primeiro cliente na base dedos do sistema
                                </p>

                                <Button variant="contained" startIcon={<PersonAdd />}>
                                    Cadastrar
                                </Button>
                            </div>
                        </Paper>
                    ) : null}
                </Box>
            </Container>
        </FredGrugPage>
    );
}

