import React from 'react'

interface IProps{
    label?:string
    type?:'reset'|'submit'|'button'
    disabled?: boolean
}

const Button = ({label='Button',type='button', disabled = false}:IProps) => {
  return (
    <div>
                        <button
                            className='transform-all duration-300 cursor-pointer py-2.5 w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold rounded-sm disabled:cursor-not-allowed '
                            type={type}
                            disabled={false}
                        >
                            {label}
                        </button>
                    </div>
  )
}

export default Button