import { drawerWidth } from "@/app/config/layout";
import { DrawerComponentsProps } from "@/app/types/drawerComponetsProps";
import { styled } from "@mui/material";


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
    return(
        <Main className='html-body-content min-h-dvh p-0' open={open}>
            <div className="flex items-center px-2 h-14 md:h-16"></div>

            {children}
        </Main>
    )
}