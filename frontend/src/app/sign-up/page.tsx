'use client'
import { useRef, useState } from 'react';
import './sign-up.css'
export default function SignUp() {
    const userName = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const confirmPassword = useRef(null)
    const [error, setError] = useState<string | null>(null);
    async function handleSubmit(event: any) {
        event.preventDefault();
        let userNameVal = userName.current.value;
        let emailVal = email.current.value;
        let passwordVal = password.current.value;
        let confirmPasswordVal = confirmPassword.current.value;

        if (passwordVal !== confirmPasswordVal) {

            setError("Password must be same");
            return;
        }
        setError(null);
        let url = ""
        let userData = {
            name: userNameVal,
            email: emailVal,
            password: passwordVal
        }
        let response = await fetch(url, {
            data:userData
        })

        if(!response.ok){
            setError("Something went wrong. Unable to sign up")
        }
        
        
    }
    return (
        <div className="main">
            <form className="signForm" onSubmit={handleSubmit}>
                <div className="formFields">
                    <label>Username</label>
                    <input type="text" ref={userName} />
                </div>
                <div className="formFields">
                    <label>Email</label>
                    <input type="email" ref={email} />
                </div>
                <div className="formFields">
                    <label>Password</label>
                    <input type="password" ref={password} />

                </div>
                <div className="formFields">
                    <label>Confirm Password</label>
                    <input type="password" ref={confirmPassword} />

                </div>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Submit</button>
                </div>
            </form>
            <div>
                <p>Already have an account <a href='/sign-in'>Sign In</a></p>
            </div>
        </div>
    )
}