
'use client'

import React from 'react'
import {  useForm } from 'react-hook-form'
import Input from '../common/ui/inputs/input'
import Button from '../common/ui/button/button'
import { TRegisterInput } from '@/types/auth.types'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from '@/schema/auth.schema'

const Registerform = () => {
  const { register, handleSubmit ,formState:{errors} } = useForm<TRegisterInput>({
    defaultValues:{
      fullname:'',
      email:'',
      password:'',
      c_password:'',
      phone:'' 
    },
    resolver:yupResolver(registerSchema),
    mode:'all'
  })

  console.log('form errors',errors);

  const onSubmit = (data:TRegisterInput ) => {  //data parameter contains the form values that pass validation 
    console.log('register form submitted',data)
  }

  return (
    <form
      className='flex flex-col gap-3'
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input<TRegisterInput>
        placeholder='John Doe'
        name='fullname'
        id='fullname'
        label='Full Name'
        type='text'
        required={true}
        register={register}
        error={errors?.fullname?.message}
      />

      {/* email */}

      <Input<TRegisterInput>
        placeholder='johndoe@gmail.com'
        name='email'
        id='email'
        label='Email'
        type='email'
        required={true}
        register={register}
        error={errors?.email?.message}
      />

      {/* password */}

      <Input<TRegisterInput>
        placeholder='Enter your password'
        name='password'
        id='password'
        label='Password'
        type='password'
        required
        register={register}
        error={errors?.password?.message}
      />

      <Input<TRegisterInput>
        placeholder='Retype your password'
        name='c_password'
        id='c_password'
        label='Confirm Password'
        type='password'
        required
        register={register}
        error={errors?.c_password?.message}
      />

      <Input<TRegisterInput>
        placeholder='Enter your phone'
        name='phone'
        id='phone'
        label='Phone' 
        type='number'
        register={register}
        error={errors?.phone?.message}
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
