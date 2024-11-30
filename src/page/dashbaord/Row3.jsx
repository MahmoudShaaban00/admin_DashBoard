import { Box, Paper, Stack, Typography, useTheme } from '@mui/material'
import Piechart from '../../page/pie/Piechart'
import Bar from '../bar/Bar'
import Geo from '../../page/geography/geo'

export default function Row3() {
  const theme = useTheme()
  return (
   <Stack direction={'row'} flexWrap={'wrap'} mt={2} gap={1} >
  
    <Paper sx={{minWidth:'400px',flexGrow:1, width:'25%' }}>
    <Typography color={theme.palette.secondary.main}
    sx={{padding:'30px 30px 0 30px'}}
    variant='h6'
    fontWeight={'600'}>
      Compaign
    </Typography>

      <Piechart isDashbaord ={true}/>

      <Typography  align='center'
    sx={{mt:'15px'}}
    variant='h6'
    fontWeight='600'>
      $48,352 revenue generated
    </Typography>

    <Typography  align='center'
    variant='body2'
    px={0.7}
    pb={3}
    fontWeight='600'>
      include extra misc expanditures and costs
    </Typography>

    </Paper>

    <Paper sx={{minWidth:'400px',flexGrow:1,width:'25%'}}>
    <Typography color={theme.palette.secondary.main}
    sx={{padding:'30px 30px 0 30px'}}
    variant='h6'
    fontWeight={'600'}>
      Sales Quantity
    </Typography>

    <Bar isDashbaord = {true}/>
    </Paper>

    <Paper sx={{minWidth:'400px',flexGrow:1,width:'25%'}}>
      <Geo isDashbaord ={true}/>
    </Paper>

   </Stack >
  )
}
