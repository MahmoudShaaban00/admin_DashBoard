import { useTheme } from '@emotion/react'
import { Box, IconButton, Paper, Stack, Typography } from '@mui/material'
import Line from '../line/Linechart'
import { DownloadOutlined } from '@mui/icons-material'
import { transactions } from './data'

export default function Row2() {
  const theme = useTheme()
  return (
   <Stack direction={'row'} flexWrap={'wrap'} gap={1.5} mt={3}>
    <Paper sx={{ maxwidth:900,minWidth:'400px' ,flexGrow:1}}>

      <Stack alignItems={'center'} direction={'row'} flexWrap={'wrap'} justifyContent={'space-between'} >
        <Box>
        <Typography
      color={theme.palette.secondary.main}
      mt={1}
      mb={2}
      ml={4}
      variant='h6'>
        Reveune Generated
      </Typography>
      <Typography variant='body2' ml={4}>
        $59,342.32 
      </Typography>
        </Box>
        <Box>
          <IconButton sx={{mr:3}}>
            <DownloadOutlined/>
          </IconButton>
        </Box>
      </Stack>
   <Line />
    </Paper>

    <Box sx={{overflow:'auto',height: 350 ,minWidth:'250px', flexGrow:1}}>
    <Paper>
      <Typography
      color={theme.palette.secondary.main}
      p={1.2}
      fontWeight={'bold'}
      variant='h6'>
        Recent Transactions
      </Typography>
      </Paper>

      {transactions.map((item)=>{
        return(
          <Paper 
          sx={{
            mt:1,
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center'
          }}>
            <Box p={1.2}>
              <Typography variant='body1' fontWeight="600">test </Typography>
              <Typography variant='body2'></Typography>
            </Box>
            <Typography variant='body1' ></Typography>
            <Typography borderRadius={1.4}
            p={1}
            bgcolor={theme.palette.error.main}
            variant='body2'>$</Typography>
    
          </Paper>    
        )
      })}

     
    </Box>
   </Stack>
  )
}
