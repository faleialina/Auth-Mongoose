'use client'
import style from './page.module.css'
import Header from "@/components/Header/Header"
import { Avatar, Button, TextField } from '@mui/material'

export default function Reg() {
    return (
        <div className={style.main}>
            <Header />
            <div className={style.avatar}>
                <Avatar src="/broken-image.jpg" />
                <h1>Registration</h1>
            </div>
            <TextField id="standard-basic" label="name..." variant="standard" />
            <TextField id="standard-basic" label="surname..." variant="standard" />
            <TextField id="standard-basic" label="age..." variant="standard" />
            <TextField id="standard-basic" label="email..." variant="standard" />
            <TextField id="standard-basic" label="password..." type="password" autoComplete="current-password" variant="standard" />

            <Button variant="outlined" color="warning">Sign Up</Button>
        </div>
    )
}