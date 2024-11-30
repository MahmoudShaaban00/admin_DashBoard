import { useTheme } from '@emotion/react'
import { Typography } from '@mui/material'
import React from 'react'

export default function NotFound() {
    const theme = useTheme()
  return (
    <Typography align='center' variant='body1' color={theme.palette.error.main} >
        there is no design yet
        <br/>
        <br/>
        Please try again later..

    </Typography>
  )
}
