'use client'
import style from './page.module.css';
import Header from "@/components/Header/Header";
import { Avatar, Button, TextField } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Reg() {
    const [inp, setInp] = useState({ name: '', surname: '', age: '', email: '', password: '' });
    const route = useRouter();
    function changeInput(e) {
        setInp({ ...inp, [e.target.name]: e.target.value })
    };

    async function regUser() {
        const res = await axios.post('http://localhost:3001/user/', inp, {
            withCredentials: true,
        });
        route.push('/home');
    };

    return (
        <div className={style.main}>
            <Header />
            <div className={style.avatar}>
                <Avatar src="/broken-image.jpg" />
                <h1>Registration</h1>
            </div>
            <TextField onChange={changeInput} id="standard-basic" label="name..." variant="standard" name="name" />
            <TextField onChange={changeInput} id="standard-basic" label="surname..." variant="standard" name="surname" />
            <TextField onChange={changeInput} id="standard-basic" label="age..." variant="standard" name="age" />
            <TextField onChange={changeInput} id="standard-basic" label="email..." variant="standard" name="email" />
            <TextField onChange={changeInput} id="standard-basic" label="password..." type="password" autoComplete="current-password" variant="standard" name="password" />

            <Button onClick={regUser} variant="outlined" color="warning">Sign Up</Button>
        </div>
    );
};