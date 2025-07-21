import DialogDefault from '@/components/DialogDefault';
import { Client } from '@models/iClient';
import { TextField } from '@mui/material';

export default function DialogFormClients( { client, modaStateOpened, handleClose }: { client?: Client, modaStateOpened : boolean, handleClose : () => void } ){
    

    console.log(client)

    return (
        <>
            <DialogDefault size='md' title="Formulário de clientes" opened={modaStateOpened} hadleOpen={ () => {} } handleClose={handleClose} >
                <form>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        />
                </form>
            </DialogDefault>
        </>
    )

}