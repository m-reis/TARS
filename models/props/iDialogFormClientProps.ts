import { Client } from "@models/iClient"
import { ReactNode } from "react"

export interface DialogFormClientProps {
    opened: boolean

    client?: Client

    title: string

    callbackSave: ( client : Client ) => void

    children: ReactNode
}