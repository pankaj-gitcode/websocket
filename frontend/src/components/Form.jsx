import React from 'react'

export default function Form() {
  return (
    <div className='h-screen relative'>
        <div className='flex items-center justify-start absolute bottom-0
        bg-gray-300 w-[100vw] py-3 pl-3 '>
            <form action="">

                <input type="text" className='w-[80vw] lg:w-[90vw] rounded-xl py-2 px-3 mr-2 focus:outline-none font-semibold' />

                <button className='text-gray-300 bg-black px-5 py-2 rounded-lg'>Send</button>
            </form>
            
        </div>
    
    </div>
  )
}
