import {Chip, Stack } from "@mui/material";
import Link from "next/link";


export default function Header() {
    return (
        <div>
            <Stack direction="row" spacing={1}>
                <Link href={'/auth'}><Chip variant="text" label="GO to authorization page" color="warning" /></Link>
                <Link href={'/reg'}><Chip label="GO to registration page" color="warning" /></Link>
                <Link href={'/'}><Chip label="GO to main page" color="warning" /></Link>
            </Stack>
        </div>
    )
}