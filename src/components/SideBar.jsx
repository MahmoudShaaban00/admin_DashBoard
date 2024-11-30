import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import MuiDrawer from '@mui/material/Drawer';
import { Avatar, styled, Tooltip, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HelpOutlineOutlined, HomeOutlined, LineAxisOutlined, Map, MapOutlined, PeopleAltOutlined, Person2Outlined, PieChartOutlineOutlined, ReceiptLongOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';


const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
  // @ts-ignore
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));




const Array1 = [
  { text: 'Dashboard', icon: <HomeOutlined />, path: '/' },
  { text: 'Manage Team', icon: <PeopleAltOutlined />, path: '/team' },
  { text: 'Contacts Information', icon: <ContactsOutlined />, path: '/contacts' },
  { text: 'Invoices Balances', icon: <ReceiptLongOutlined />, path: '/invoices' }
]

const Array2 = [
  { text: 'Profile Form', icon: <Person2Outlined />, path: '/form' },
  { text: 'Calender', icon: <CalendarTodayOutlined />, path: '/calender' },
  { text: 'FAQ page', icon: <HelpOutlineOutlined />, path: '/faq' }
]

const Array3 = [
  { text: 'Bar Chart', icon: <BarChartOutlined />, path: '/bar' },
  { text: 'Pie Chart', icon: <PieChartOutlineOutlined />, path: '/Pie' },
  { text: 'Line Chart', icon: <LineAxisOutlined />, path: '/line' },
  { text: 'Geography Chart', icon: <MapOutlined />, path: '/geography' },
]

export default function SideBar({ open, handleDrawerClose }) {
  const theme = useTheme()
  let navigate = useNavigate()

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.
            // @ts-ignore
            direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Avatar sx={{ mx: "auto", width: open ? 88 : 44, height: open ? 88 : 44, my: 1, border: "solid 2px gray", transition: '0.25s' }} alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ73nD_xhS615P7Zm5wgAs1bunXM0tJTBpfYA&s" />
      <Typography align='center' sx={{ fontSize: open ? 17 : 0, transition: '0.25s' }}>Ali</Typography>
      <Typography align='center' sx={{ fontSize: open ? 17 : 0, transition: '0.25s', color: theme.palette.info.main, }}>Admain</Typography>
      <Divider />
      <List>
        {Array1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
            <Tooltip title={open ? null : item.text} placement='left'>
              <ListItemButton onClick={() => { navigate(item.path) }} sx={{ minHeight: 48, px: 2.5, ...(open ? { justifyContent: 'initial' } : { justifyContent: 'center' }) }}>
                <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', ...(open ? { mr: 3 } : { mr: 'auto' }) }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ ...(open ? { opacity: 1 } : { opacity: 0 }) }} />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        {Array2.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>

            <Tooltip title={open ? null : item.text} placement='left'>
              <ListItemButton onClick={() => { navigate(item.path) }} sx={{
                minHeight: 48, px: 2.5, ...(open ? { justifyContent: 'initial' } : {
                  justifyContent: 'center',
                  px: 2.5, bgcolor: location.pathname === item.path ? theme.palette.mode === 'dark' ? grey[800] : grey[300] : null
                })
              }}>
                <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', ...(open ? { mr: 3 } : { mr: 'auto' }) }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ ...(open ? { opacity: 1 } : { opacity: 0 }) }} />
              </ListItemButton>
            </Tooltip>


          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {Array3.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
            <Tooltip title={open ? null : item.text} placement='left'>
              <ListItemButton onClick={() => { navigate(item.path) }} sx={{ minHeight: 48, px: 2.5, ...(open ? { justifyContent: 'initial' } : { justifyContent: 'center' }) }}>
                <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', ...(open ? { mr: 3 } : { mr: 'auto' }) }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ ...(open ? { opacity: 1 } : { opacity: 0 }) }} />
              </ListItemButton>
            </Tooltip>

          </ListItem>
        ))}
      </List>
    </Drawer>)
}
