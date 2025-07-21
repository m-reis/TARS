import { PersonAdd } from "@mui/icons-material";
import { Button, Paper } from "@mui/material";


export default function JumbotronAdd( { onClickEvent } : { onClickEvent : () => void } ){
    return (
        <Paper className="my-4 p-10 bg-secondary/20 max-w-xl mx-auto backdrop-blur-md rounded-2xl shadow-lg">
            <div className="text-center mx-auto">
                <p className="text-lg text-primary/80 mb-6">
                    Ainda não há clientes cadastrados no sistema, tenha a honra de cadastrar o primeiro cliente na base dedos do sistema
                </p>

                <Button variant="contained" onClick={() => onClickEvent() } startIcon={<PersonAdd />}>
                    Cadastrar
                </Button>
            </div>
        </Paper>
    )
}