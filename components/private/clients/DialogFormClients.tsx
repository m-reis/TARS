import DialogDefault from '@/components/DialogDefault';
import { Client } from '@models/iClient';
import { AccountCircle, WhatsApp } from '@mui/icons-material';
import { Box, Button, DialogActions, FormControl, Input, InputAdornment, InputLabel, TextField } from '@mui/material';


export default function DialogFormClients( { client, modaStateOpened, handleClose }: { client?: Client, modaStateOpened : boolean, handleClose : () => void } ){
    

    console.log(client)

    return (
        <>
            <DialogDefault size='sm' title="Formulário de Clientes" opened={modaStateOpened} hadleOpen={() => {}} handleClose={handleClose} >
                <form className='px-5 pt-4'>
                    <div className='flex items-center' >
                        <AccountCircle className='mr-1'  />
                        <TextField fullWidth autoComplete='off' label="Nome" variant="standard" />
                    </div>

                    <div className='flex items-center mt-3' >
                        <WhatsApp className='mr-1'  />
                        <TextField fullWidth autoComplete='off' label="Whatsapp" variant="standard" />
                    </div>

                    <TextField
                        className='mt-5'
                        id="input-with-icon-textfield"
                        label="Nome"
                        fullWidth
                        slotProps={{
                        input: {
                            startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                            ),
                        },
                        }}
                        variant="standard"
                    />

                    <TextField
                        className='mt-3'
                        id="input-with-icon-textfield"
                        label="Whatsapp" 
                        fullWidth
                        slotProps={{
                        input: {
                            startAdornment: (
                            <InputAdornment position="start">
                                <WhatsApp />
                            </InputAdornment>
                            ),
                        },
                        }}
                        variant="standard"
                    />
                </form>
                <DialogActions className='pt-3'>
                    <Button color='error'>Fechar</Button>
                    <Button type="submit">Salvar</Button>
                </DialogActions>
            </DialogDefault>
        </>
    )

}