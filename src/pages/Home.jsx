import React, { useState } from 'react'
import { FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { FiMail, FiGithub } from 'react-icons/fi'
import { BiLinkExternal } from 'react-icons/bi'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'

export default function Home() {
  const [projectsCom, setProjectsCom] = useState(false)
  const [skillsCom, setSkillsCom] = useState(true)

  return (
    <>
      <div class=''>
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
        <div class='flex justify-center space-x-10 mt-5'>
          <div class=''>
            <h1 class='text-xl font-bold'>Web Developer</h1>
            <ul class=''>
              <li class='text-sm font-bold text-gray-500'>Frontend</li>
              <li class='text-sm font-bold text-gray-500'>Backend</li>
            </ul>
          </div>
          <div>
            <h1 class='text-xl font-bold'>Baker</h1>
            <ul>
              <li class='text-sm font-bold text-gray-500'>Baking</li>
              <li class='text-sm font-bold text-gray-500'>Cake Decoration</li>
              <li class='text-sm font-bold text-gray-500'>Sugar Crafting</li>
            </ul>
          </div>
        </div>
        <div class='flex justify-center items-center space-x-5 m-5'>
          <FaLinkedin class='text-xl text-gray-500 hover:text-black hover:scale-150 transition duration-400 ease-in-out cursor-pointer ' />
          <FiGithub class='text-xl text-gray-500 hover:text-black hover:scale-150 transition duration-400 ease-in-out cursor-pointer ' />
          <FaTwitter class='text-xl text-gray-500 hover:text-black hover:scale-150 transition duration-400 ease-in-out cursor-pointer ' />
          <FaInstagram class='text-xl text-gray-500 hover:text-black hover:scale-150 transition duration-400 ease-in-out cursor-pointer ' />
        </div>
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
          <button class='text-white text-xl flex justify-center items-center bg-blue-600 hover:bg-blue-700 p-5 rounded-xl transition-all duration-250 ease-in-out '>
            Resume
            <BiLinkExternal class='text-white text-xl ml-2 ' />
          </button>
          <div class='p-3 bg-gray-200 hover:bg-gray-400 rounded-lg hover:rounded-xl cursor-pointer transition-all duration-250 ease-in-out'>
            <FiMail class='text-xl' />
          </div>
          <div class='p-3 bg-gray-200 hover:bg-gray-400 rounded-lg hover:rounded-xl cursor-pointer'>
            <FaWhatsapp class='text-xl' />
          </div>
        </div>
      </div>
      <hr class='mt-5 border-gray-700 mx-[5%] bg-center ' />
      <div class='flex justify-center items-center'>
        <div class='flex justify-center items-center bg-gray-300 p-1 space-x-2 rounded-2xl cursor-pointer my-5 transition duration-250 ease-in-out '>
          <p
            onClick={() => setProjectsCom(true) & setSkillsCom(false)}
            class='font-semibold text-lg hover:bg-white hover:font-bold hover:text-xl active:font-bold active:text-xl focus:bg-white py-4 px-20 rounded-2xl transition duration-250 ease-in-out '
          >
            Projects
          </p>
          <p
            onClick={() => setSkillsCom(true) & setProjectsCom(false)}
            class='font-semibold text-lg hover:bg-white hover:font-bold hover:text-xl active:font-bold active:text-xl active:bg-white py-4 px-20 rounded-2xl transition duration-250 ease-in-out '
          >
            Skills
          </p>
        </div>
      </div>
      <div>
        {projectsCom && <Projects />}
        {skillsCom && <Skills />}
      </div>
    </>
  )
}
