import React from 'react'
import { Button } from '@mui/material'

function MyButton({children, ...proops}) {
  return (
    <>
    <Button variant="contained" {...proops} >{children}</Button>
    </>
  )
}

export default MyButton
