import MuiAppBar from '@mui/material/AppBar';
import { drawerWidth } from '@lib/appConstants';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { IconButton, Typography } from '@mui/material';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { DrawerComponentsProps } from '@/models/props/drawerComponetsProps';
import Image from 'next/image';

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open' })<{ open: boolean }>(({ theme, open }) => ({
  backgroundColor: '#dfcebc',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function TopAppBar({ open, toggleDrawer, handleDrawerClose }: DrawerComponentsProps ){
    return(
        <AppBar elevation={0} position="fixed" open={open} className="!bg-primary" sx={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }} >
            <Toolbar>
                <IconButton color="inherit" aria-label="open drawer" onClick={toggleDrawer} edge="start" sx={[ { mr: 2, } ]}>
                    <MenuIcon />
                </IconButton>
                <div className="flex flex-col relative">
                    <Link href="/" onClick={handleDrawerClose} >
                        <Typography className='flex font-cenzel'> SENSE  </Typography>

                        <Typography className="absolute font-amsterdam -right-6 top-1" fontSize={15} margin={0.5}>by</Typography>
                        
                        <Image src="/logo/C logo.png" width={60} height={22} alt='Charm' />
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    )
}