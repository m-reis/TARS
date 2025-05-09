'use client'

import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Link  from 'next/link'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import PersonPinIcon from '@mui/icons-material/PersonPin'
import BreadcrumbsBar from '@/app/components/breadcrumbs';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import RouteProgressBar from '@/app/components/routeProgressBar';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{ open?: boolean }>(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
        {
            props: ({ open }) => open,
            style: {
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginLeft: 0,
            },
        },
    ],
}));


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<{ open?: boolean }>(({ theme }) => ({
    backgroundColor: '#dfcebc',
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: `${drawerWidth}px`,
                transition: theme.transitions.create(['margin', 'width'], {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
}));

export default function PersistentDrawerLeft({ children }: Readonly<{ children: React.ReactNode }>) {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const toggleDrawer = () => {
        setOpen(!open);
    };

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
            <Main className='html-body-content min-h-dvh' open={open}>
                <DrawerHeader />

                <BreadcrumbsBar />
                {children}
            </Main>
        </Box>
    );
}
