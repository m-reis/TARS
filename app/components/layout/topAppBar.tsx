import MuiAppBar from '@mui/material/AppBar';
import { drawerWidth } from '@/app/config/layout';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { IconButton, Typography } from '@mui/material';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';

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

export default function TopAppBar({ open, toggleDrawer, handleDrawerClose }: TopAppBarProps ){
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
                        
                        <img src="/logo/C logo.png" width={60} />
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    )
}