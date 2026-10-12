import React from 'react'
import Input from '../common/ui/inputs/input'
import Button from '../common/ui/button/button'

const Loginform = () => {
  return (
    <form className='flex flex-col gap-3'>
        {/* email */}
                    {/* <div className='flex flex-col gap-1'>
                        <label
                            className='text-[14px] text-gray-600 font-semibold'
                            htmlFor='email'
                        >
                            Email
                        </label>

                        <input
                            className='border border-gray-200 py-2 px-2.5 rounded-md focus:border-blue-500 focus:outline-blue-500'
                            placeholder='johndoe@gmail.com'
                            name='email'
                            id='email'
                        />
                    </div> */}

                    <Input 
                    placeholder='johndoe@gmail.com'
                    name='email'
                    id='email'
                    label='Email'
                    type='email'
                    required={true}
                    />


        {/* password */} 
                    <Input
                        placeholder='Enter your password'
                        name='password'
                        id='password'
                        label='Password'
                        type='password'
                        required
                    />

                    {/* <div>
                        <button
                            className='cursor-pointer py-2.5 w-full bg-blue-500 text-white font-bold rounded-md'
                            type='submit'
                        >
                            Login
                        </button>
                    </div> */}

                    {/* button */}

                <Input
                        placeholder='Enter your phone'
                        name='password'
                        id='password'
                        label='Phone'
                        type='password'
                    />    

                <Button
                type='submit'
                label='login'
                />

                </form>
  )
}

export default Loginform