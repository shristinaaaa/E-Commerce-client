 import React from 'react'
import Input from '../common/ui/inputs/input'
import Button from '../common/ui/button/button'

const Registerform = () => {
  return (
    <form className='flex flex-col gap-3'>
                   <Input 
                    placeholder='John Doe'
                    name='fullname'
                    id='fullname'
                    label='Full Name'
                    type='text'
                    required={true} 
                   />
        
        {/* email */}

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

                    <Input
                        placeholder='Retype your password'
                        name='password'
                        id='c_password'
                        label='Confirm Password'
                        type='password'
                        required
                    />

                <Input
                        placeholder='Enter your phone'
                        name='Phone'
                        id='Phone'
                        label='Phone'
                        type='number'
                    />    

                <div className='w-full mt-3'>
                <Button
                type='submit'
                label='Create Account'
                />
                </div>

                </form>
  )
}

export default Registerform