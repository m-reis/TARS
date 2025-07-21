'use client'

import FredGrugPage from "@components/fredGrugPage";
import { Container } from '@mui/material';
import ClientsCards from '@/components/private/clients/clientsCards'
import Box from '@mui/material/Box';
import { Client } from "@/models/iClient";
import { useEffect, useState } from "react";
import TableGridClients from "@/components/private/clients/tableClients";
import ClientService from "@/services/clientSerivce";
import { globalLoading } from "@/lib/globalLoading";
import DialogFormClients from "@/components/private/clients/DialogFormClients";
import JumbotronAdd from "@/components/private/clients/jumbotronAdd";

export default function Home() {

    const setGlobalLoading = globalLoading( s => s.setLoading)

    const [clientesLoaded, setClientesLoaded] = useState(false)

    const [clientes, setClientes] = useState<Client[]>([])

    const [selectedClient, setSelectedClient] = useState<Client>()

    const [opened, setOpened] = useState(false);

    const hadleEditClient = (client: Client) => {
        setSelectedClient(client)
    }

    const handleAddClient = () => {
        setSelectedClient(undefined)

        setOpened(true)
    }

    useEffect(() => {
        setGlobalLoading(true)

        const getAllClientes = async () => { 
            const res = await ClientService.getAll()

            setClientes(res);

            setGlobalLoading(false);

            setClientesLoaded(true);
        }

        getAllClientes()
  }, [setGlobalLoading]);

    return (
        <FredGrugPage>
            <Container className="w-10/12 my-0 py-0  sm:mx-auto">
                <ClientsCards total={clientes.length} />

                <Box className="rounded-xl my-4 overflow-hidden">
                    {clientes.length > 0 ? (
                        <TableGridClients clientes={clientes} onEditClient={hadleEditClient} onAddClient={handleAddClient} />
                    ) : clientesLoaded ? (
                        <JumbotronAdd onClickEvent={() => setOpened(true )} />
                    ) : null}
                </Box>

                <DialogFormClients client={selectedClient} modaStateOpened={opened} handleClose={() => setOpened(false) } />
            </Container>
        </FredGrugPage>
    );
}

