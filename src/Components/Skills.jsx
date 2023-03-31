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
                  <h1 class='font-semibold text-gray-800 dark:text-white '>
                    HTML
                  </h1>
                  <p class='text-sm text-gray-500  '>Intermediate</p>
                </div>
              </li>
              <li class='mb-3 flex space-x-2'>
                <TiTick class='border border-1 border-green-500 text-green-500 rounded-[50%] mt-1.5 ' />
                <div>
                  <h1 class='font-semibold text-gray-800 dark:text-white '>
                    Git
                  </h1>
                  <p class='text-sm text-gray-500  '>Advanced</p>
                </div>
              </li>
              <li class='mb-3 flex space-x-2'>
                <TiTick class='border border-1 border-green-500 text-green-500 rounded-[50%] mt-1.5 ' />
                <div>
                  <h1 class='font-semibold text-gray-800 dark:text-white '>
                    CSS
                  </h1>
                  <p class='text-sm text-gray-500  '>Intermediate</p>
                </div>
              </li>
              <li class='mb-3 flex space-x-2'>
                <TiTick class='border border-1 border-green-500 text-green-500 rounded-[50%] mt-1.5 ' />
                <div>
                  <h1 class='font-semibold text-gray-800 dark:text-white '>
                    JavaScript
                  </h1>
                  <p class='text-sm text-gray-500  '>Basic</p>
                </div>
              </li>
              <li class='mb-3 flex space-x-2'>
                <TiTick class='border border-1 border-green-500 text-green-500 rounded-[50%] mt-1.5 ' />
                <div>
                  <h1 class='font-semibold text-gray-800 dark:text-white '>
                    BootStrap
                  </h1>
                  <p class='text-sm text-gray-500  '>Basic</p>
                </div>
              </li>
              <li class='mb-3 flex space-x-2'>
                <TiTick class='border border-1 border-green-500 text-green-500 rounded-[50%] mt-1.5 ' />
                <div>
                  <h1 class='font-semibold text-gray-800 dark:text-white '>
                    TailwindCSS
                  </h1>
                  <p class='text-sm text-gray-500  '>Advanced</p>
                </div>
              </li>
              <li class='mb-3 flex space-x-2'>
                <TiTick class='border border-1 border-green-500 text-green-500 rounded-[50%] mt-1.5 ' />
                <div>
                  <h1 class='font-semibold text-gray-800 dark:text-white '>
                    React
                  </h1>
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
                <h1 class='font-semibold text-gray-800 dark:text-white '>
                  Baking
                </h1>
                <p class='text-sm text-gray-500  '>Intermediate</p>
              </div>
            </li>
            <li class='mb-3 flex space-x-2'>
              <TiTick class='border border-1 border-green-500 text-green-500 rounded-[50%] mt-1.5 ' />
              <div>
                <h1 class='font-semibold text-gray-800 dark:text-white '>
                  Cake Decorating
                </h1>
                <p class='text-sm text-gray-500  '>Expert</p>
              </div>
            </li>
            <li class='mb-3 flex space-x-2'>
              <TiTick class='border border-1 border-green-500 text-green-500 rounded-[50%] mt-1.5 ' />
              <div>
                <h1 class='font-semibold text-gray-800 dark:text-white '>
                  Cream Cakes
                </h1>
                <p class='text-sm text-gray-500  '>Intermediate</p>
              </div>
            </li>
            <li class='mb-3 flex space-x-2'>
              <TiTick class='border border-1 border-green-500 text-green-500 rounded-[50%] mt-1.5 ' />
              <div>
                <h1 class='font-semibold text-gray-800 dark:text-white '>
                  Fondant Cakes
                </h1>
                <p class='text-sm text-gray-500  '>Expert</p>
              </div>
            </li>
            <li class='mb-3 flex space-x-2'>
              <TiTick class='border border-1 border-green-500 text-green-500 rounded-[50%] mt-1.5 ' />
              <div>
                <h1 class='font-semibold text-gray-800 dark:text-white '>
                  Sugar Craft
                </h1>
                <p class='text-sm text-gray-500  '>Expert</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
