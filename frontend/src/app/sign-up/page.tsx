'use client'
import { useRef, useState } from 'react';
import styles from './signUp.module.css'
import Header from '@/components/Header';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
export default function SignUp() {
    const userName = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const confirmPassword = useRef(null)
    const [error, setError] = useState<string | null>(null);
    const [passError, setPassError] = useState<string | null>(null);
    async function handleSubmit(event: any) {
        event.preventDefault();
        try {
            let userNameVal = userName?.current?.value;
            let emailVal = email?.current?.value;
            let passwordVal = password?.current?.value;
            let confirmPasswordVal = confirmPassword?.current?.value;

            if (passwordVal !== confirmPasswordVal) {
                setPassError("Confirm password not matched");
                return;
            }
            if (passwordVal.length < 6) {
                setPassError("Password must contain at least 6 digits")
                return;
            }
            setPassError(null);
            setError(null);
            let url = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/user/sign-up`
            let userData = {
                name: userNameVal,
                email: emailVal,
                password: passwordVal
            }
            let response = await fetch(url, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            });
            
        } catch (err) {
            alert("Something went wrong. please try again")
        }
    }
    return (
        <>
            <Header />
            <div className={`${styles.main}`}>
                <div className='px-10 pb-12 pt-5 rounded-xl bg-white text-black w-96'>
                    <div className='text-end'>
                        <Link href={'/'}>
                            <CloseIcon />
                        </Link>
                    </div>
                    <form className={`${styles.signForm}`} onSubmit={handleSubmit}>
                        <h1 className='text-2xl underline'>Sign Up</h1>
                        <div className={`flex flex-col w-full`}>
                            <label htmlFor='userEmail'>Email</label>
                            <input type="email" ref={email} className='border-black border-2 text-black rounded h-8' name='userEmail' />
                        </div>
                        <div className={`${styles.formFields}  w-full`}>
                            <label htmlFor='userpassword'>Password</label>
                            <input type="password" ref={password} className='border-black border-2 text-black rounded h-8' name='userPassword' />
                        </div>
                        <div className={`${styles.formFields} w-full`}>
                            <label htmlFor='confrimPass'>Confirm Password</label>
                            <input name='confrimPass' type="password" ref={confirmPassword} className='border-black border-2 text-black rounded h-8' />
                        </div>
                        <div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                Submit
                            </button>
                        </div>
                    </form>
                    <div className='pt-8'>
                        <p className='text-center'>Already have an account <Link href='/sign-in' className='underline text-blue-600'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}