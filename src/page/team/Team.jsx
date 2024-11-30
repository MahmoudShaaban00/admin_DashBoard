import * as React from 'react';
import { DataGrid} from '@mui/x-data-grid';
import {  rows } from './data';
import { Box, Typography, useTheme } from '@mui/material';
import { AdminPanelSettingsOutlined ,LockOpenOutlined ,SecurityOutlined } from '@mui/icons-material';
import Header from '../../components/Header'

 


export default function Team() {
  const theme = useTheme()

  const columns = [
    { field: 'id', headerName: 'ID', flex:1 ,align:'center' , headerAlign:'center'},
    { field: 'name', headerName: 'name', flex:1 ,align:'center' , headerAlign:'center'},
    { field: 'email', headerName: 'email', flex:1 ,align:'center' , headerAlign:'center'},
    { field: 'age', headerName: 'age', flex:1 ,align:'center' , headerAlign:'center'},
    { field: 'phone', headerName: 'phone', flex:1 ,align:'center' , headerAlign:'center'},
    { field: 'access', headerName: 'access', flex:1 ,align:'center' , headerAlign:'center',
      renderCell: ({row : {access}}) =>{
        return(
          <Box sx={{
            p:'5px',
             width:"99px",
            borderRadius:'3px',
            textAlign:"center",
            display:'flex',
            justifyContent:'space-evenly',

            backgroundColor: access === 'Admin' ? theme.palette.primary.dark : access === 'Manager' ? theme.palette.secondary.dark :"#3da58a"
          }}>
            {access === 'Admin' && (
              <AdminPanelSettingsOutlined fontSize='small'/>
            )}

             {access === 'Manager' && (
              <SecurityOutlined fontSize='small'/>
            )}

             {access === 'User' && (
              <LockOpenOutlined fontSize='small'/>
            )}
            <Typography sx={{fontSize:'13px' ,color:'#fff'}}>{access}</Typography>
          </Box>
        )
      }
    },
  ];
  return (
    <Box sx={{ height: 600, width: '98%', mx:'auto' }}>
            <Header isDashboard={false} title={'TEAM'} subtitle={'Manage The Team Mmembers'}/>

      <DataGrid rows={rows} 
// @ts-ignore
      columns={columns} />
    </Box>
  );
}
