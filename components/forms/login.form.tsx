
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
import axios from 'axios'
import {login} from  '@/api/auth.api'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { Role } from '@/types/enum.types'
import { useRouter } from 'next/navigation'




// const loginSchema = yup.object({
//     email: yup.string().email('INVALID EMAIL!').required('EMAIL IS REQUIRED'),
//     password: yup.string().required('PASSWORD IS REQUIRED'),
//     phone: yup.string().required('PHONE IS REQUIRED')
// })

 
const Loginform = () => {
    const router=useRouter()

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
            
        },
        resolver: yupResolver(loginSchema),
        // resolver: zodResolver(loginSchema)
        mode:'all'
    })

    const {isPending,mutate}=useMutation({   //yo data ra uta login baata aako response eutai kura ho ra mutate vaneko login nai change vara aakofunction ho
        mutationFn:login,
        onSuccess:(response)=>{   //yo response chai uta login function success vaei aako response ho
            console.log('on mutation success',response)
            //navigate user based on role
            if(response.data.role===Role.ADMIN){
                router.replace('/admin')
            }else{
                router.replace('/')
            }

            //show toast msg
            toast.success(response.message??'login successful')
            
    },
        onError:(error)=>{
            console.log('on mutation error',error)
            //show toast msg 
            toast.error(error?.message??'something went wrong')
        }
    })
    // console.log('is loading',isPending)

    // console.log('form errors', errors)

    // console.log(watch('email')) 

    // const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    //     console.log('input changed')
        // setformdata({
        //     ...formdata,
        //     [e.target.name]:e.target.value
        // })
    
 

    //send post req,pass gareko data i.e js object lai json ma convert garne body ma add garne ra request send garne kaam axios le gaardinxa
    //axios+react query-react query  is a library that makes api integration simple,caches responses,manages status using hooks 
    const onSubmit:SubmitHandler<TLoginInput>=async (formdata)=>{
        // try{
             // e.preventDefault(); yo kaam aba hookform ko handlesubmit le afai grdiyo
        // console.log('form submitted',formdata)
         //api call
        // const data=await login(formdata)
        // console.log('response data',data) 
        // }catch(error){
        //     console.log(error)
        // }
        mutate(formdata)
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

                 

               <div className='w-full mt-3'>
                 <Button
                type='submit'
            
                // label='login'
                disabled={isPending}
                label={isPending?'logging in...':'login'}
                />
               </div>


                </form>
  )
}

export default Loginform
