import { TextField } from '@mui/material'
import React from 'react'

function Input({placeholder, ...proops}) {
  return (
    <>
        <TextField id="outlined-basic" label={placeholder} variant="outlined" />
    </>
  )
}

export default Input