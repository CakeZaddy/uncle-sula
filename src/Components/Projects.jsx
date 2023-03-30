import React from 'react'
import { FiLink } from 'react-icons/fi'

export default function Projects() {
  return (
    <>
      <div class='flex justify-center items-center mb-5 '>
        <a href='http://'>
          <div class='w-[400px] relative rounded-xl '>
            <img
              class='w-full rounded-xl'
              src='https://res.cloudinary.com/dwgberjxq/image/upload/v1680006839/EE9CA710-ECA3-4953-9D70-DBB3587963E3_y3eqnf.jpg'
              alt=''
            />
            <div class='absolute bottom-0 bg-gray-600/80 w-full h-[20%] rounded-b-xl '>
              <div class='flex items-center absolute bottom-2 left-2'>
                <p class='font-semibold text-lg'>Real Estate WebApp</p>
                <FiLink class='font-bold text-green-400 ml-5' />
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  )
}
