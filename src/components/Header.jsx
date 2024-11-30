import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Header({title ,subtitle,isDashboard=false}) {
    const theme = useTheme()
  return (
    <Box mb={isDashboard? 1 : 4}>
        <Typography sx={{color:theme.palette.info.light,
            fontWeight:'bold'
        }}
        variant='h5'>
           {title}
        </Typography>

        <Typography variant='body1'>
{subtitle}
        </Typography>
    </Box>
  )
}
