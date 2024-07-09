
import './forget-password.css'
export default function ForgetPassword() {
    return (
        <div className='main'>
            <form className='signForm' >
                <div className='formFields'>
                    <label>Email</label>
                    <input type="email" />
                </div>
                <div className='formFields'>
                    <label>Enter OTP</label>
                    <input type="text" />
                </div>
                <div className='buttons'>
                    <a href='/sign-in' className="bg-red-500 hover:bg-red-700 text-white font-bold py-2.5 px-4 border border-red-700 rounded">
                        Cancel
                    </a>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}