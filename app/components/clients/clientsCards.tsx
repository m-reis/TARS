import styles from '@/app/components/clients/clientsCards.module.css';

import { PersonAdd, Groups  } from '@mui/icons-material';


export default function ClientsCards(){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
            <div className={`${styles.card} bg-secondary/60 text-white`}>
                <div className="flex items-center justify-between mb-2 z-10 relative">
                    <div className="p-2 rounded-lg bg-white/20">
                        <PersonAdd className="text-white" />
                    </div>
                </div>
                <div className="text-3xl font-semibold z-10 relative">42</div>
                <div className="text-sm text-white/80 z-10 relative">Novos Clientes</div>
            </div>
            <div className={`${styles.card} bg-primary/80 text-white`}>
                <div className="flex items-center justify-between mb-2 z-10 relative">
                    <div className="p-2 rounded-lg bg-[#DFCEBC]/20">
                        <Groups className="text-white" />
                    </div>
                </div>
                <div className="text-3xl font-semibold z-10 relative">180</div>
                <div className="text-sm text-white/80 z-10 relative">Total de Clientes</div>
            </div>
        </div>
    )
}



