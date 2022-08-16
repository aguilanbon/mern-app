import React from 'react'
import Footer from '../Includes/Footer'

function Login() {
    return (
        <div className='min-h-screen'>
            <div className='w-full h-auto flex md:flex-row flex-col'>
                <div className='md:w-2/5 w-full md:h-screen h-80 bg-primary'>

                </div>
                <div className='md:w-3/5 w-full flex flex-col'>
                    <div className='w-full md:h-full xl:px-72 md:px-16 px-4 flex flex-col items-center justify-center md:mt-0 mt-10'>
                        <div className='w-full flex flex-col mb-10'>
                            <h1 className='text-2xl font-bold mb-2' >Login</h1>
                            <p className='text-sm italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <form action='' className='w-full flex flex-col'>
                            <div className='flex flex-col mb-4'>
                                <label htmlFor="username" className='mb-2 after:content-["*"] after:text-pink-800 font-semibold'>Username</label>
                                <input type="text" name="username" id="" className='h-12 p-4 border border-slate-300 rounded-full text-sm shadow-md' placeholder='yourname@email.com' />
                            </div>
                             <div className='flex flex-col mb-8'>
                                <label htmlFor="password" className='mb-2 after:content-["*"] after:text-pink-800 font-semibold'>Password</label>
                                <input type="password" name="password" id="" className='h-12 p-4 border border-slate-300 rounded-full text-sm shadow-md' placeholder='Min. 6 characters' />
                            </div>
                            <div className='flex flex-col mb-8'>
                                <input type="submit" value="Login" className='bg-primary hover:bg-secondary ease-in-out duration-200 hover:scale-105 text-white p-3 rounded-full font-semibold cursor-pointer' />
                            </div>
                        </form>
                        <div className='flex w-full items-center'>
                            <h3 className='text-sm'>Not registered yet?</h3>
                            <a href="/" className='text-sm ml-2 font-semibold text-primary hover:underline'>Create an account</a>
                        </div>
                    </div>
                    <div className='flex'>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login