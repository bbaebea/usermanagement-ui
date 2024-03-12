import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useCallback, useState } from 'react'
import { store } from '../api/users'
import $ from 'jquery'
import { useNavigate } from 'react-router-dom'

export default function UserCreate() {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const onSubmit = useCallback((e) => {
        e.preventDefault()
        if(!loading){
            setLoading(true)
            store({
                name: $("#name").val(),
                email: $("#email").val(),
                password: $("#password").val(),
                password_confirmation: $("#password_confirmation").val(),
            }).then(res => {
                if(res?.ok){
                    navigate("/")
                }

            }).finally(() => {
                setLoading(false)
            })
        }
    }, [])
    return (
        <Box sx={{ p: 2}}>
            <Typography align="center" variant="h4">
                Create User
            </Typography>
            <Box>
                <Box onSubmit={onSubmit} component="form" sx={{mt: 2}}>
                    <Box align="center" sx={{mt: 1}}>
                        <TextField id="name" required label="Username" />
                    </Box>
                    <Box align="center" sx={{mt: 1}}>
                        <TextField id="email" required type="email" label="Email" />
                    </Box>
                    <Box align="center" sx={{mt: 1}}>
                        <TextField id="password" required type="password" label="Password" />
                    </Box>
                    <Box align="center" sx={{mt: 1}}>
                        <TextField id="password_confirmation" required type="password" label="Confirm Password" />
                    </Box>
                    <Box align="center" sx={{mt: 2}}>
                        <Button disabled={loading} type="submit" variant="contained" color="success">Create</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
