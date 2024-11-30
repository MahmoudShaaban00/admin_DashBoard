import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Alert, Button, MenuItem, Snackbar, Stack } from '@mui/material';
import Header from '../../components/Header'
import { useForm } from "react-hook-form"

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const phonenum = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g

const data = [
  {
    value: 'Admin',
    label: 'Admin',
  },
  {
    value: 'Manager',
    label: 'Manager',
  },
  {
    value: 'User',
    label: 'User',
  }
];
export default function Form() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const onSubmit = () => {
    console.log('done')
    handleClick()
  }

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
      noValidate
      autoComplete="off"
    >
            <Header isDashboard={false} title={'CREATE USER'} subtitle={'Create a New User Profile'}/>

      <Stack sx={{ gap: 2 }} direction={"row"}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={Boolean(errors.firstName) ? 'Please enter valid first name' : null}
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }} label="First Name" variant="filled" />

        <TextField sx={{ flex: 1 }} label="Last Name" variant="filled"
          error={Boolean(errors.lastName)}
          helperText={Boolean(errors.lastName) ? 'Please enter valid last name' : null}
          {...register("lastName", { required: true, minLength: 3 })} />
      </Stack>

      <TextField error={Boolean(errors.email)}
        helperText={Boolean(errors.email) ? 'Please enter valid email ' : null}
        {...register("email", { required: true, minLength: 3, pattern: regEmail })} label="Email" variant="filled" />

      <TextField error={Boolean(errors.CantactNumber)}
        helperText={Boolean(errors.CantactNumber) ? 'Please enter valid phone number' : null}
        {...register("CantactNumber", { required: true, minLength: 3, pattern: phonenum })} label="Cantact Number" variant="filled" />

      <TextField label="Address 1" variant="filled" />
      <TextField label="Address 2" variant="filled" />

      <TextField
        variant="filled"
        id="outlined-select-currency"
        select
        label="Select"
        defaultValue="User"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: 'right' }}>
        <Button type='submit' sx={{ textTransform: 'capitalize' }} variant='contained'>create new user</Button>

        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="info"
            sx={{ width: '100%' }}
          >
            This is a success Alert inside a Snackbar!
          </Alert>
        </Snackbar>

      </Box>
    </Box>
  )
}
