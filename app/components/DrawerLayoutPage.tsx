'use client'

import { ReactNode, useState } from "react";
import SideMenuDrawer from "./layout/sideMenuDrawer";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Link from "next/link";
import { Home, PersonPinCircleOutlined } from "@mui/icons-material";
import TopAppBar from "./layout/topAppBar";
import MainContentDrawer from "./layout/mainContentDrawer";



export default function DrawerLayoutPage({ children }: Readonly<{ children: ReactNode}>){
    const [open, setOpen] = useState(false);

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const toggleDrawer = () => {
        setOpen(!open);
    };
    return(
        <>
            <TopAppBar open={open} toggleDrawer={toggleDrawer} handleDrawerClose={handleDrawerClose} ></TopAppBar>

            <SideMenuDrawer open={open} handleDrawerClose={handleDrawerClose}>
                <List>
                    <Link  href="/" onClick={handleDrawerClose} >
                        <ListItem disablePadding>
                            <ListItemButton >
                                <ListItemIcon>
                                    <Home />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link  href="/clients" onClick={handleDrawerClose} >
                        <ListItem disablePadding>
                            <ListItemButton >
                                <ListItemIcon>
                                    <PersonPinCircleOutlined />
                                </ListItemIcon>
                                <ListItemText primary="Clientes" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
            </SideMenuDrawer>

            <MainContentDrawer open={open}>
                {children}
            </MainContentDrawer>
        </>
    )
}