
import './sign-in.css'
export default function SignIn() {
    return (
        <div className='main'>
            <form className='signForm' >
                <div className='formFields'>
                    <label>Email</label>
                    <input type="email" />
                </div>
                <div className='formFields'>
                    <label>Password</label>
                    <input type="password" />
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