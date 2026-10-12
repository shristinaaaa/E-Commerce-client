import React from 'react'

interface IProps{
    label?:string
    type?:'reset'|'submit'|'button'
}

const Button = ({label='Button',type='button'}:IProps) => {
  return (
    <div>
                        <button
                            className='cursor-pointer py-2.5 w-full bg-blue-500 text-white font-bold rounded-md'
                            type={type}
                        >
                            {label}
                        </button>
                    </div>
  )
}

export default Button