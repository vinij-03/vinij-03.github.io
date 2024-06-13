import React from 'react'

function Button( props) {
  return (
    <button className='button  py-2 px-4 inline-flex items-center  text-sm font-semibold rounded-lg border border-transparent hover:bg-[#111010] hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-[#111010] '>

          {props.children}
    </button>
  )
}

export default Button