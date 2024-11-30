import { Box } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import React from 'react'
import { columns, rows } from './data'
import Header from '../../components/Header'


export default function Contacts() {
  return (
    <Box sx={{ height: 600, width: '98%', mx:'auto' }}>
      <Header isDashboard={false} title={'Contacts'} subtitle={'List of Contacts for Future Refernce'}/>

    <DataGrid   slots={{
    toolbar: GridToolbar,
  }} rows={rows} 
    // @ts-ignore
    columns={columns} />
  </Box>
  )
}
