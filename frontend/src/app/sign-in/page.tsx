'use client'
import { useRef, useState } from 'react'
import './sign-in.css'
export default function SignIn() {
    const email = useRef(null)
    const password = useRef(null)
    const [error, setError] = useState<string | null>(null);
    async function handleSubmit(event: any) {
        event.preventDefault();
        let emailVal = email.current.value;
        let passwordVal = password.current.value;
        setError(null);
        let url = ""
        let userData = {
            email: emailVal,
            password: passwordVal
        }
        let response = await fetch(url, {
            data: userData
        })

        if (!response.ok) {
            setError("Something went wrong. Unable to sign In")
        }
    }
    return (
        <div className='main'>
            <form className='signForm' onSubmit={handleSubmit}>
                <div className='formFields'>
                    <label>Email</label>
                    <input type="email" ref={email} />
                </div>
                <div className='formFields'>
                    <label>Password</label>
                    <input type="password" ref={password} />
                </div>
                <div className='forgetPassword'>
                    <a href='/forget-password'><small>Forget password</small></a>
                </div>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        Submit
                    </button>
                </div>
            </form>
            <div>
                <p>Create a new account <a href='/sign-up'>Sign Up</a></p>
            </div>
        </div>
    )
}