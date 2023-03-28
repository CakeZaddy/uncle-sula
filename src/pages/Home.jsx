import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { BiLinkExternal } from 'react-icons/bi'

export default function Home() {
  return (
    <>
      <div className=''>
        <div className='flex items-center justify-center m-5 '>
          <img
            class='h-[250px] md:h-[350px] lg:h-[450px] '
            src='https://res.cloudinary.com/dwgberjxq/image/upload/v1679934731/Udemy/susu_vdmwnx.png'
            alt=''
          />
        </div>
        <h1 class='font-bold text-[30px] text-center uppercase '>
          Sulaimon Omotosho
        </h1>
        <p class='text-center text-sm font-bold text-gray-500'>
          Frontend Developer, UI/UX Designer, Baker
        </p>
        <div></div>
        <div class='flex justify-center'>
          <ul class='flex justify-between px-10 items-center text-center my-5 space-x-10 md:spa '>
            <li>
              <h1 class='font-bold text-l'>6</h1>
              <p class='font-medium text-gray-500 text-sm '>
                Months of <br /> work
              </p>
            </li>
            <li>
              <h1 class='font-bold text-l'>+40</h1>
              <p class='font-medium text-gray-500 text-sm '>
                Completed <br /> projects
              </p>
            </li>
            <li>
              <h1 class='font-bold text-l'>+8</h1>
              <p class='font-medium text-gray-500 text-sm '>
                Satisfied <br /> customers
              </p>
            </li>
          </ul>
        </div>
        <div class='flex justify-center items-center space-x-3 transition-all '>
          <div class='flex justify-center items-center bg-blue-600 hover:bg-blue-700 p-5 rounded-xl space-x-2 transition-all duration-250 ease-in-out '>
            <button class='text-white text-xl'>Resume</button>
            <BiLinkExternal class='text-white text-xl ' />
          </div>
          <div class='p-3 bg-gray-200 hover:bg-gray-400 rounded-lg hover:rounded-xl cursor-pointer transition-all duration-250 ease-in-out'>
            <FiMail class='text-xl' />
          </div>
          <div class='p-3 bg-gray-200 hover:bg-gray-400 rounded-lg hover:rounded-xl cursor-pointer'>
            <FaWhatsapp class='text-xl' />
          </div>
        </div>
      </div>
      <div class='flex justify-center items-center'>
        <div class='flex justify-center items-center bg-gray-300 p-1 space-x-2 rounded-2xl cursor-pointer my-5 '>
          <p class='font-semibold text-lg hover:bg-white active:bg-white py-4 px-20 rounded-2xl transition duration-250 ease-in-out '>
            Projects
          </p>
          <p class='font-semibold text-lg hover:bg-white active:bg-white py-4 px-20 rounded-2xl transition duration-250 ease-in-out '>
            Skills
          </p>
        </div>
      </div>
    </>
  )
}
