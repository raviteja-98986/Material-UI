import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Typography ,Button, TextField } from "@mui/material"
import {Login} from './form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Typography variant='h3'component={"h2"} sx={{color:'red'}}>hello materials</Typography>
    <Button variant='contained'color="success">click me</Button>
    <Button variant='text'>click me</Button>
    <Button variant='outlined'onClick={()=>{alert('you clicked the outlined button')}}>click me for action</Button>
    <h1>Material UI</h1>
    <br></br>
    <Login/>
    </>
  )
}

export default App
