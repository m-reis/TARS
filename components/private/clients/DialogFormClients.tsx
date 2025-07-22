import DialogDefault from '@/components/DialogDefault';
import { Client } from '@models/iClient';
import { Button, DialogActions, TextField } from '@mui/material';

export default function DialogFormClients( { client, modaStateOpened, handleClose }: { client?: Client, modaStateOpened : boolean, handleClose : () => void } ){
    

    console.log(client)

    return (
        <>
            <DialogDefault size='sm' title="Formulário de Clientes" opened={modaStateOpened} hadleOpen={() => {}} handleClose={handleClose} >
                <form className='px-5 pt-4'>
                    <TextField required id="nome" name="nome" autoComplete="off" label="Nome" fullWidth variant="standard"
                        slotProps={{
                            input: {
                                className: 'text-sm'
                            }
                        }} />
                </form>
                <DialogActions className='pt-3'>
                    <Button color='error'>Fechar</Button>
                    <Button type="submit">Salvar</Button>
                </DialogActions>
            </DialogDefault>
        </>
    )

}