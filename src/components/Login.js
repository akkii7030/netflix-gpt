import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/13551e76-4afc-4b08-9812-df5e793012a9/web_collection/IN-en-20241104-TRIFECTA-9992059c-6e92-4f31-9571-5a4ddcebc2eb_large.jpg' alt='logo' />
            </div>
            <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className='font-bolt text-3xl py-4 '>{isSignInForm ? "Sign In" : "Sing Up"}</h1>
                {!isSignInForm && (
                    <input type='text' placeholder='Full Name' className='p-4 my-4 bg-gray-700 w-full rounded-lg ' />)}
                <input type='text' placeholder='Email Address' className='p-4 my-4 bg-gray-700 w-full rounded-lg ' />
                <input type='password' placeholder='Password' className='p-4 my-4 bg-gray-700 w-full rounded-lg' />
                <button className='p-4 my-6 bg-red-600 w-full rounded-lg '>{isSignInForm ? "Sign In" : "Sing Up"}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login
