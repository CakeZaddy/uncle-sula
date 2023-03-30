import React from 'react'
import { TiTick } from 'react-icons/ti'

export default function Skills() {
  return (
    <>
      <div class='md:flex justify-center md:space-x-20'>
        <div class='flex flex-col items-center '>
          <h1 class='font-bold text-xl mb-5'>Web Developer</h1>
          <div class=''>
            <ul class='grid grid-cols-2 gap-x-20 lg:gap-x-30'>
              <li class='mb-3 flex space-x-2'>
                <TiTick class='border border-1 border-green-500 text-green-500 rounded-[50%] mt-1.5 ' />
                <div>
                  <h1 class='font-semibold text-gray-800'>HTML</h1>
                  <p class='text-sm text-gray-500  '>Intermediate</p>
                </div>
              </li>
              <li class='mb-3 flex space-x-2'>
                <TiTick class='border border-1 border-green-500 text-green-500 rounded-[50%] mt-1.5 ' />
                <div>
                  <h1 class='font-semibold text-gray-800'>Git</h1>
                  <p class='text-sm text-gray-500  '>Advanced</p>
                </div>
              </li>
              <li class='mb-3 flex space-x-2'>
                <TiTick class='border border-1 border-green-500 text-green-500 rounded-[50%] mt-1.5 ' />
                <div>
                  <h1 class='font-semibold text-gray-800'>CSS</h1>
                  <p class='text-sm text-gray-500  '>Intermediate</p>
                </div>
              </li>
              <li class='mb-3 flex space-x-2'>
                <TiTick class='border border-1 border-green-500 text-green-500 rounded-[50%] mt-1.5 ' />
                <div>
                  <h1 class='font-semibold text-gray-800'>JavaScript</h1>
                  <p class='text-sm text-gray-500  '>Basic</p>
                </div>
              </li>
              <li class='mb-3 flex space-x-2'>
                <TiTick class='border border-1 border-green-500 text-green-500 rounded-[50%] mt-1.5 ' />
                <div>
                  <h1 class='font-semibold text-gray-800'>BootStrap</h1>
                  <p class='text-sm text-gray-500  '>Basic</p>
                </div>
              </li>
              <li class='mb-3 flex space-x-2'>
                <TiTick class='border border-1 border-green-500 text-green-500 rounded-[50%] mt-1.5 ' />
                <div>
                  <h1 class='font-semibold text-gray-800'>TailwindCSS</h1>
                  <p class='text-sm text-gray-500  '>Advanced</p>
                </div>
              </li>
              <li class='mb-3 flex space-x-2'>
                <TiTick class='border border-1 border-green-500 text-green-500 rounded-[50%] mt-1.5 ' />
                <div>
                  <h1 class='font-semibold text-gray-800'>React</h1>
                  <p class='text-sm text-gray-500  '>Basic</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class='flex flex-col items-center md:items-top '>
          <h1 class='font-bold text-xl mb-5'>Baker</h1>
          <ul class='grid grid-cols-2 gap-x-'>
            <li class='mb-3 flex space-x-2'>
              <TiTick class='border border-1 border-green-500 text-green-500 rounded-[50%] mt-1.5 ' />
              <div>
                <h1 class='font-semibold text-gray-800'>Baking</h1>
                <p class='text-sm text-gray-500  '>Intermediate</p>
              </div>
            </li>
            <li class='mb-3 flex space-x-2'>
              <TiTick class='border border-1 border-green-500 text-green-500 rounded-[50%] mt-1.5 ' />
              <div>
                <h1 class='font-semibold text-gray-800'>Cake Decorating</h1>
                <p class='text-sm text-gray-500  '>Expert</p>
              </div>
            </li>
            <li class='mb-3 flex space-x-2'>
              <TiTick class='border border-1 border-green-500 text-green-500 rounded-[50%] mt-1.5 ' />
              <div>
                <h1 class='font-semibold text-gray-800'>Cream Cakes</h1>
                <p class='text-sm text-gray-500  '>Intermediate</p>
              </div>
            </li>
            <li class='mb-3 flex space-x-2'>
              <TiTick class='border border-1 border-green-500 text-green-500 rounded-[50%] mt-1.5 ' />
              <div>
                <h1 class='font-semibold text-gray-800'>Fondant Cakes</h1>
                <p class='text-sm text-gray-500  '>Expert</p>
              </div>
            </li>
            <li class='mb-3 flex space-x-2'>
              <TiTick class='border border-1 border-green-500 text-green-500 rounded-[50%] mt-1.5 ' />
              <div>
                <h1 class='font-semibold text-gray-800'>Sugar Craft</h1>
                <p class='text-sm text-gray-500  '>Expert</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
