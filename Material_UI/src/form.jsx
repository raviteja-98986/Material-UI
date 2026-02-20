import { Button, TextField,FormControl,FormControlLabel, Checkbox} from '@mui/material'
import React, { useState } from 'react'

export  function Login() {
  const [login, setLogin] = useState({
    userName: "",
    email: "",
    pwd: ""
  })

  function handleInput(e) {
    const { name, value } = e.target

    setLogin({
      ...login,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()   // prevent page refresh
    console.log(login)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        
        <TextField
          name="userName"
          type="text"
          placeholder="Username"
          variant="standard"
          onChange={handleInput}
          value={login.userName}
          sx={{margin:2}}
        />
        <br></br>

        <TextField
          name="email"
          type="text"
          placeholder="Email"
          variant="outlined"
          onChange={handleInput}
          value={login.email}
          sx={{margin:2}}
        />
        <br></br>
        <TextField
          name="pwd"
          type="password"
          placeholder="Password"
          variant="filled"
          onChange={handleInput}
          value={login.pwd}
          sx={{margin:2}}
        />
        <br></br>
        <Button type="submit">Submit</Button>
        <FormControl>
          <FormControlLabel lable="Agree term & Conditions" control={<Checkbox/}></FormControlLabel>
        </FormControl>
      </form>
    </div>
  )
}