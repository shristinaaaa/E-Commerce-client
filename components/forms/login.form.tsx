
'use client' //tala usestate by default server side render hunxa so testo nagarne and tellai client side render garna use 'use client'
//maximum possible cases ma server side nai render garna khojne
import React from 'react'
import Input from '../common/ui/inputs/input'
import Button from '../common/ui/button/button'
import { SubmitHandler, useForm ,} from 'react-hook-form'
import {  TLoginInput } from '@/types/auth.types'
import * as yup from 'yup'
import { PassThrough } from 'node:stream'
import {yupResolver} from '@hookform/resolvers/yup'
import { loginSchema } from '@/schema/auth.schema'


// const loginSchema = yup.object({
//     email: yup.string().email('INVALID EMAIL!').required('EMAIL IS REQUIRED'),
//     password: yup.string().required('PASSWORD IS REQUIRED'),
//     phone: yup.string().required('PHONE IS REQUIRED')
// })

 
const Loginform = () => {
    // const[formdata,setformdata]=useState({ //using usestate to handle user interactivity
    //     email:'',  //tala jj use vako xa name attribute ma tei haru rakhne yaha as fields
    //     password:'',
    //     phone:'',
    // }) 

    //?handleSubmit le duita func callback ma linxa ;form completely validated xa vane k garne(mandatory one),xaina vane k garne(optional one)
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors }
    } = useForm<TLoginInput>({
        defaultValues: {
            email: 'ram@gmail.com',
            password: '',
            phone: ''
        },
        resolver: yupResolver(loginSchema)
        // resolver: zodResolver(loginSchema)
    })

    console.log('form errors', errors)

    console.log(watch('email'))

    const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log('input changed')
        // setformdata({
        //     ...formdata,
        //     [e.target.name]:e.target.value
        // })
    }

    const onSubmit:SubmitHandler<TLoginInput>=(formdata)=>{
        // e.preventDefault(); yo kaam aba hookform ko handlesubmit le afai grdiyo
        console.log('form submitted',formdata)
        //api call
    }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
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

                    <Input<TLoginInput>
                    placeholder='johndoe@gmail.com'
                    name='email'
                    id='email'
                    label='Email'
                    type='email'
                    required={true}
                    error={errors.email?.message}
                    // onChange={onChange}
                    register={register}
                    />


        {/* password */} 
                    <Input<TLoginInput>
                        placeholder='Enter your password'
                        name='password'
                        id='password'
                        label='Password'
                        type='password'
                        required
                        error={errors.password?.message}
                        // onChange={onChange}
                        register={register}
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

                <Input<TLoginInput>
                        placeholder='Enter your phone'
                        name='phone'
                        id='phone'
                        label='Phone'
                        type='text'
                        error={errors.phone?.message}
                        // onChange={onChange}
                        register={register}
                    />    

                <Button
                type='submit'
                label='login'
                />

                </form>
  )
}

export default Loginform
