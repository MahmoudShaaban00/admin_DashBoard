import React from 'react'
import { Box } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { columns, rows } from './data'
import Header from '../../components/Header'


export default function Invoices() {
  return (
    <Box sx={{ height: 600, width: '98%', mx:'auto' }}>
      <Header isDashboard={false} title={'INVOICES'} subtitle={'List of invioce Balances'}/>

    <DataGrid  
    checkboxSelection
     slots={{
    toolbar: GridToolbar,
  }} rows={rows} 
    // @ts-ignore
    columns={columns} />
  </Box>
  )
}
