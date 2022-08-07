import React from 'react'

function Login() {
    return (
        <div className='min-h-screen'>
            <div className='w-full h-auto flex items-center justify-center'>
                <div className='w-80 h-auto mt-20 pb-4 flex flex-col bg-white text-black text-opacity-90 rounded-md shadow-lg'>
                    <div className='h-16 mb-4 flex items-center justify-center bg-black bg-opacity-90 text-white rounded-t-md'>
                        <h1 className='font-bold text-lg'>ACCOUNT LOGIN</h1>
                    </div>
                    <form action="" className='w-full flex flex-col  py-2 px-8'>
                        <div className='flex flex-col mb-4'>
                            <label htmlFor="password">Username</label>
                            <div className='flex flex-col justify-center static'>
                                <input type="text" name="username" id="" className='h-10 py-4 px-8 border-b border-black border-opacity-40 mt-1 ' placeholder='Type your username' />
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute text-gray-500 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="password">Password</label>
                            <div className='flex flex-col justify-center static'>
                                <input type="password" name="password" id="" className='h-10 py-4 px-8 border-b border-black border-opacity-40 mt-1' placeholder='Type your password' />
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute text-gray-500 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                        </div>
                        <div className='w-full mt-6 flex items-center justify-center'>
                            <button className='w-full p-2 rounded-md text-white bg-black bg-opacity-90 hover:bg-black'>LOGIN</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login