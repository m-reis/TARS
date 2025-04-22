'use client'

import React from 'react';
import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  ListItemButton,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

export default function ResponsiveDrawer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const drawerContent = (
    <div>
      <List>
        {['Item 1', 'Item 2'].map((text, index) => (
            <ListItemButton  key={text}>
                <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                
                <ListItemText primary={text} />
            </ListItemButton>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
        <AppBar
            position="fixed"
            sx={{
            ml: !isMobile && open ? `${drawerWidth}px` : 0,
            width: !isMobile && open ? `calc(100% - ${drawerWidth}px)` : '100%',
            transition: theme.transitions.create(
                    ['width', 'margin'], 
                    {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.enteringScreen,
                    }
                ),
            }}
      >
        <Toolbar>
            <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
                <Box display="flex" alignItems="center" gap={2}>
                    <Box>
                        <Typography variant="h6">Nome da Empresa</Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                            Seu subtítulo aqui
                        </Typography>
                    </Box>
                </Box>

                <LogoutIcon/>
            </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant={isMobile ? 'temporary' : 'persistent'}
        open={open}
        onClose={handleDrawerToggle}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        ModalProps={{
          keepMounted: true, // melhora desempenho mobile
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}
