import React from 'react'
import kilicdaroglupng from './kilicdaroglu.png'
import erdoganpng from './erdogan.png'
import incepng from './ince.png'
import oganpng from './ogan.png'
import './Banner.css'

function Candidates() {
  return (
    <div className='flex flex-col lg:flex-row'>
        <div className='relative erdogan flex flex-row items-end border-8 border-yellow-400 h-44 rounded bg-yellow-700 lg:w-[24.7%]'>
          <img className='h-40 w-32' src={erdoganpng} alt="" />
          <strong className='absolute whitespace-nowrap font-konkhmer text-3xl top-[9%] left-[33%] sm:text-4xl lg:text-3xl sm:left-[17%] xl:left-[8%] lg:left-[33%] 2xl:left-[20%]'>R. T. ERDOĞAN</strong>
          <strong className='absolute whitespace-nowrap font-konkhmer text-xl right-0 bottom-[20%] mb-2 mr-1'>%49.52</strong>
          <div className="loadingakp relative w-full rounded mb-1 mr-1">
        <div style={{width:"49.52%"}} className="absolute h-10 rounded-sm bg-gradient-to-br from-yellow-400 via-yellow-600 shim-akp"/>
      </div>
        </div>
        <div className='relative kilicdaroglu flex flex-row items-end border-8 mt-2 border-red-600 h-44 rounded bg-red-900 lg:w-[24.7%] lg:ml-2 lg:mt-0'>
          <img className='h-[8.9rem] w-[7.2rem]' src={kilicdaroglupng} alt="" />
          <strong className='absolute whitespace-nowrap font-konkhmer text-3xl top-[9%] left-[32%] sm:text-4xl lg:text-3xl sm:left-[17%] xl:left-[8%] lg:left-[33%] 2xl:left-[20%]'>KILIÇDAROĞLU</strong>
          <strong className='absolute whitespace-nowrap font-konkhmer text-xl right-0 bottom-[20%] mb-2 mr-1'>%44.88</strong>
          <div className="loadingchp relative w-full rounded mb-1 ml-[8px] mr-1">
        <div style={{width:"44.88%"}} className="absolute h-10 rounded-sm bg-gradient-to-br from-red-500 via-red-800 shim-chp"/>
        </div>
        </div>
        <div className='relative ogan flex flex-row items-end border-8 mt-2 border-green-600 h-44 rounded bg-emerald-900 lg:w-[24.7%] lg:ml-2 lg:mt-0'>
          <img className='h-36 w-[7.4rem]' src={oganpng} alt="" />
          <strong className='absolute whitespace-nowrap font-konkhmer text-3xl top-[9%] left-[33%] sm:text-4xl lg:text-3xl sm:left-[17%] xl:left-[8%] lg:left-[35%] 2xl:left-[20%]'>SİNAN OĞAN</strong>
          <strong className='absolute whitespace-nowrap font-konkhmer text-xl right-0 bottom-[20%] mb-2 mr-1'>%5.17</strong>
          <div className="loadingogan relative w-full rounded mb-1 ml-[6px] mr-1">
        <div style={{width:"5.17%"}} className="absolute h-10 rounded-sm bg-gradient-to-br from-green-500 via-green-600 shim-ogan"/>
        </div>
        </div>
        <div className='relative ince flex flex-row items-end border-8 mt-2 border-blue-600 h-44 rounded bg-blue-900 lg:w-[24.7%] lg:ml-2 lg:mt-0'>
          <img className='h-[9.5rem] w-[7.4rem]' src={incepng} alt="" />
          <strong className='absolute whitespace-nowrap font-konkhmer text-3xl items-start top-[8%] left-[31%] lg:text-3xl sm:text-4xl sm:left-[17%] xl:left-[8%] lg:left-[28.3%] 2xl:left-[20%]'>MUHARREM İNCE</strong>
          <strong className='absolute whitespace-nowrap font-konkhmer text-xl right-0 bottom-[20%] mb-2 mr-1'>%0.43</strong>
          <div className="loadingince relative w-full rounded mb-1 ml-[6px] mr-1">
        <div style={{width:"1.05%"}} className="absolute h-10 rounded-sm bg-gradient-to-br from-blue-500 via-blue-600 shim-ince"/>
        </div>
        </div>
    </div>
  )
}

export default Candidates