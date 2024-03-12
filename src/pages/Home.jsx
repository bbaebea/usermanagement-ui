import { Box, Button, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import { index } from '../api/users'
import { Link } from 'react-router-dom'

export default function Home() {
    const [rows, setRows] = useState([])

    useEffect(() => {
        index().then(res => {
            if(res?.ok){
                setRows(res.data)
            }
            else{
                console.log(res?.message ?? "Something went wrong!")
            }
        })
    }, [])

    const columns = [
        {
            field: "id",
            headerName: "ID"
        },
        {
            field: "name",
            headerName: "Username",
            flex: 1
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1
        },
    ]

    return (
        <Box>
            <Box sx={{p: 2, display: 'flex', justifyContent: 'space-between'}}>
                <Typography variant="h4">
                    Users
                </Typography>
                <Box>
                    <Link to="/users/create">
                        <Button>Create User</Button>
                    </Link>
                </Box>
            </Box>
            <Box>
                <DataGrid columns={columns} rows={rows} />
            </Box>
        </Box>
    )
}
