import styles from '@components/clients/clientsCards.module.css';

import { PersonAdd, Groups  } from '@mui/icons-material';


export default function ClientsCards(){
    return (
        <div className="mb-5 grid grid-cols-1 gap-y-2 justify-center md:gap-y-0 md:grid-cols-2 sm:place-items-center">
            <div className={`${styles.card} md:max-w-xs w-full p-2 rounded-md shadow-sm overflow-hidden bg-secondary/30 text-primary/80`}>
                <div className="flex items-start relative">
                    <div className="p-3 mr-3 rounded-lg bg-secondary/20">
                        <PersonAdd className="text-secondary" />
                    </div>
                    <div>
                        <div className="text-sm relative">Total de Clientes</div>
                        <div className="text-xl font-semibold relative">42</div>
                    </div>
                </div>
            </div>
            <div className={`${styles.card} md:max-w-xs w-full p-2 rounded-md shadow-sm overflow-hidden bg-secondary/30 text-primary/80`}>
                <div className="flex items-start relative">
                    <div className="p-3 mr-3 rounded-lg bg-secondary/20">
                        <Groups className="text-secondary" />
                    </div>
                    <div>
                        <div className="text-sm relative">Total de Clientes</div>
                        <div className="text-xl font-semibold relative">42</div>
                    </div>
                </div>
            </div>
        </div>
    )
}



