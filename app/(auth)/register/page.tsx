
import Registerform from '@/components/forms/register.form'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
    title: 'Login|E Commerce',
    description: ''
}

const Register = () => {
    
    return (
        <main className='tracking-wider h-screen flex justify-center items-center flex-col'>
            <div className='border border-gray-300 p-4 rounded-md min-h-[300px] w-[300px] flex flex-col gap-4'>
                <div>
                    <h1 className='text-2xl font-semibold text-gray-600 text-center'>
                        Register
                    </h1>
                    <p className='text-xs text-gray-500 text-center'>
                        Fill the form below to continue
                    </p>
                </div>

                <Registerform />

                <div className='text-center'>
                    <Link href={'/forgot-password'}>
                        <small className='text-blue-500 text-center'>
                            Forgot Password
                        </small>
                    </Link>
                

                <p className='text-center mt-1'>
                    Already have an account?{' '}
                    <Link href={'/login'}>
                        <span className='text-blue-500 text-center'>
                           Login
                        </span>
                    </Link>
                </p>
                </div>
            </div>
        </main>
    )
}

export default Register
