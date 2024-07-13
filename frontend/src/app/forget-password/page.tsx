'use client'
import { useRef, useState } from 'react';
import './forget-password.css'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function ForgetPassword() {
    const email = useRef(null);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter()
    async function handleSubmit(event: any) {
        event.preventDefault();
        let emailVal = email?.current?.value
        let url = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/user/forget-password`
        let resp = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: emailVal })
        })
        if (resp.ok) {
            //redirect to login page
            router.push('/sign-in')
        }
        // set error;
    }
    return (
        <div className='main'>
            <form className='signForm' onSubmit={handleSubmit}>
                <div className='formFields'>
                    <label>Email</label>
                    <input type="email" ref={email} required />
                </div>
                <div className='buttons'>
                    <Link href='/sign-in' className="bg-red-500 hover:bg-red-700 text-white font-bold py-2.5 px-4 border border-red-700 rounded">
                        Cancel
                    </Link>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        Send email
                    </button>
                </div>
            </form>
        </div>
    )
}