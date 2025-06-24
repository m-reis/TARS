import Box from '@mui/material/Box';
import DrawerLayputPage from '@/app/components/DrawerLayoutPage';



export default function PrivateLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <Box className="flex">
            <DrawerLayputPage>
                {children}
            </DrawerLayputPage>
        </Box>
    );
}
