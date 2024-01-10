'use client'
import Header from "@/components/Header/Header";
import { Avatar, Button, TextField } from "@mui/material";
import style from './page.module.css'

export default function Auth() {
    return (
        <div className={style.main}>
            <Header />
            <div className={style.avatar}>
                <Avatar src="/broken-image.jpg" />
                <h1>Authorization</h1>
            </div>
            <TextField id="standard-basic" label="email..." variant="standard" helperText="Please enter your email" />
            <TextField id="standard-basic" label="password..." type="password" autoComplete="current-password" variant="standard" helperText="Please enter your password" />

            <Button variant="outlined" color="warning">Sign In</Button>
        </div>
    )
}