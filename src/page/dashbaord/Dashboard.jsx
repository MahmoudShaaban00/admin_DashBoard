import React from 'react'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'
import { Box, Button, Stack } from '@mui/material'
import { DownloadOutlined } from '@mui/icons-material'
import Header from '../../components/Header'

export default function Dashboard() {
  return (
    <div>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
      <Header isDashboard={true} title={'DASHBAORD'} subtitle={'Welcome To Dashboard'}/>
      <Box sx={{textAlign:'right'}}>
    <Button variant='contained' color='primary' >
    <DownloadOutlined />
    Download Reports
    </Button>
    </Box>
    </Stack>

      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  )
}
