


import React from 'react'
import { FaCheck } from 'react-icons/fa'


interface Props {
    text: string,
    Bg_Blue?: boolean,
    Bg_Orange?: boolean,
    Bg_Green?: boolean,
}


const CheckMark = ({text, Bg_Blue, Bg_Orange, Bg_Green }:Props) => {
  return (
    <div className='mt-8'>
             <div className='flex items-center space-x-2 mb-6 '>
                 <div className={`w-7 h-7 bg-blue-800 ${Bg_Orange ? 'bg-orange-800' : 'bg-blue-800'}
                    ${Bg_Green ? 'bg-green-800' : 'bg-blue-800'} flex flex-col items-center justify-center `}>
                  <FaCheck className='text-white'/>
                 </div>
                  <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>
                    {text}
                    {Bg_Blue}
                    {Bg_Orange}
                    {Bg_Green}
                  </p>
             </div>
          </div>
  )
}

export default CheckMark
