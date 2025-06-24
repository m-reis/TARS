import { DrawerComponentsProps } from "@/app/types/drawerComponetsProps";
import { Drawer, IconButton } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Image from "next/image";


export default function SideMenuDrawer( { open, children, handleDrawerClose }: DrawerComponentsProps){
    return(
        <Drawer variant="persistent" anchor="left" open={open} className="w-drawer flex-shrink-0"
            slotProps={{
                paper: {
                    className: 'w-drawer box-border'
                }
            }}>

            <div className="flex items-center px-2 h-14 md:h-16 justify-between">
                <Image src='/logo/C sublogo preta.png' width={50} height={50} alt='Charm' />

                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>

            {children}
        </Drawer>
    )
}