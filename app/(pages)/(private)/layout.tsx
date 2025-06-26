import Box from '@mui/material/Box';
import DrawerLayputPage from '@components/DrawerLayoutPage';



export default function PrivateLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <Box className="flex">
            <DrawerLayputPage>
                {children}
            </DrawerLayputPage>
        </Box>
    );
}
