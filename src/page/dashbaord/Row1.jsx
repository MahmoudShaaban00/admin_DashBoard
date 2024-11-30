import { Paper, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import Card from './Card'
import EmailIcon from '@mui/icons-material/Email'
import { PersonAdd, PointOfSale, Traffic } from '@mui/icons-material'
import { data1, data2, data3, data4 } from './data'

export default function Row1() {
  const theme = useTheme()
  return (
    <Stack direction={'row'} flexWrap={"wrap"} mt={2} gap={1} justifyContent={{ xs: 'center', sm: 'space-between' }}>

      <Card icon={<EmailIcon sx={{ fontSize: '23px', color: theme.palette.secondary.main }} />}
        title={"12,361"}
        subtitle={"Email Sent"}
        increase={'+14%'} 
        data={data1} 
        schema={'nivo'} />

      <Card icon={<PointOfSale sx={{ fontSize: '23px', color: theme.palette.secondary.main }} />}
        title={"431,255"}
        subtitle={"Sales obtained"}
        increase={'+21%'}
         data={data2}
         schema={'category10'} />

      <Card icon={<PersonAdd sx={{ fontSize: '23px', color: theme.palette.secondary.main }} />}
        title={"32,441"}
        subtitle={"New Clients"}
        increase={'+5%'}
         data={data3} 
         schema={'accent'}/>

      <Card icon={<Traffic sx={{ fontSize: '23px', color: theme.palette.secondary.main }} />}
        title={"1,351,143"}
        subtitle={"Traffic Received"}
        increase={'+43%'} 
        data={data4} 
        schema={'dark2'}/>

    </Stack>
  )
}
