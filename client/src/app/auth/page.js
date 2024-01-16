'use client'
import Header from "@/components/Header/Header";
import { Avatar, Button, TextField } from "@mui/material";
import { useState } from "react";
import style from './page.module.css';
import axios from 'axios';
import { useRouter } from "next/navigation";

export default function Auth() {
    const [inp, setInp] = useState({ email: '', password: '' });
    const route = useRouter();

    function changeInput(e) {
        setInp({ ...inp, [e.target.name]: e.target.value });
    };

    async function authUser() {
        const res = await axios.post('http://localhost:3001/user/auth', inp, {
            withCredentials: true,
        });
        console.log(inp);
        route.push('/home');
    };

    return (
        <div className={style.main}>
            <Header />
            <div className={style.avatar}>
                <Avatar src="/broken-image.jpg" />
                <h1>Authorization</h1>
            </div>
            <TextField onChange={changeInput} id="standard-basic" label="email" variant="standard" name="email" />
            <TextField onChange={changeInput} id="standard-basic" label="password" type="password" autoComplete="current-password" variant="standard" name="password" />

            <Button onClick={authUser} variant="outlined" color="warning">Sign In</Button>
        </div>
    );
};