import { Breakpoint } from "@mui/material";
import { ReactNode } from "react";

export default interface DialogProps{
    children?: ReactNode,
    
    title: string | ReactNode

    opened: boolean

    hadleOpen: () => void

    handleClose: () => void

    size?: Breakpoint
}