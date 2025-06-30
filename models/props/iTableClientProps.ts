import { Client } from "../iClient"

export interface TableClientProps {
    clientes: Client[]
    onEditClient: (cliente: Client) => void
}