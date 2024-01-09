import Link from "next/link";

export default function Header() {
    return (
        <div>
            <p><Link href={'/auth'}>GO to authorization page</Link></p>
            <p><Link href={'/reg'}>GO to registration page</Link></p>
            <p><Link href={'/'}>GO to Main page</Link></p>
        </div>
    )
}