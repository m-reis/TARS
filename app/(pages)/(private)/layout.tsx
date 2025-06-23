

import Link  from 'next/link'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import PersonPinIcon from '@mui/icons-material/PersonPin'

import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';


export default function PersistentDrawerLeft({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <Box className="flex">
            <AppBar elevation={0} position="fixed" open={open} className="!bg-primary" sx={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }} >
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer" onClick={toggleDrawer} edge="start" sx={[ { mr: 2, } ]}>
                        <MenuIcon />
                    </IconButton>
                    <div className="flex flex-col relative">
                        <Link href="/" onClick={handleDrawerClose} >
                            <Typography className='flex font-cenzel'>
                                SENSE  
                            </Typography>
                            <Typography className="absolute font-amsterdam -right-6 top-1" fontSize={15} margin={0.5}>by</Typography>
                            <img src="/logo/C logo.png" width={60} />
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open} >
                <DrawerHeader className='flex justify-between justify-items-center'>
                    <img src='/logo/C sublogo preta.png' width={50} />

                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </DrawerHeader>
                <List>
                    <Link  href="/clients" onClick={handleDrawerClose} >
                        <ListItem disablePadding>
                            <ListItemButton >
                                <ListItemIcon>
                                    <PersonPinIcon />
                                </ListItemIcon>
                                <ListItemText primary="Clientes" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
            <Main className='html-body-content min-h-dvh pt-0' open={open}>
                <DrawerHeader />

                {children}
            </Main>
        </Box>
    );
}
