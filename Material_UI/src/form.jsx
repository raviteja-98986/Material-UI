import { Button, TextField,FormControl,FormControlLabel, Checkbox, InputLabel,Select,MenuItem,RadioGroup,Radio,FormLabel} from '@mui/material'
import React, { useState } from 'react'

export  function Login() {
  const [login, setLogin] = useState({
    userName: "",
    email: "",
    pwd: "",
    isagree:false,
    gender:""
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
        
        <FormControl>
          <FormControlLabel label="Agree term & Conditions" control={<Checkbox/>} onChange={(e)=>{setLogin({
      ...login,
      isagree:!login.isagree
    })}}/>
        </FormControl>

        <FormControl>
            <InputLabel id="label">Age</InputLabel>
            <Select labelId="label" id="select" value="20" name="age" onChange={handleInput}>
              <MenuItem value="10">Ten</MenuItem>
              <MenuItem value="20">Twenty</MenuItem>
            </Select>

        </FormControl>
        <br/>
              <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="gender" onChange={handleInput}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
    </FormControl>

     <br/>
    <Button type="submit"variant='contained'sx={{mt:2}}>Submit</Button>
      </form>
    </div>
  )
}