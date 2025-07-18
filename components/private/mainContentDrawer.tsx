'use client'
import { drawerWidth } from "@lib/appConstants";
import { DrawerComponentsProps } from "@/models/props/drawerComponetsProps";
import { LinearProgress, styled } from "@mui/material";
import { globalLoading } from "@/lib/globalLoading";

const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})<{open : boolean}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: `-${drawerWidth}px`,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function MainContentDrawer({open, children}: DrawerComponentsProps){
    const loading = globalLoading((state) => state.loading);

    return(
        <Main className='html-body-content flex flex-col  min-h-dvh p-0' open={open}>
            <div className="flex items-center px-2 h-14 md:h-16"></div>

            <div className="flex-1">
                { loading &&  <LinearProgress className='h-0.5' color="primary" /> }

                {children}
            </div>
        </Main>
    )
}