import React from 'react'
import erdoganpng from './erdogan.png'
import kilicdaroglupng from './kilicdaroglu.png'

function SecondRound() {
  return (
    <div className='secondRound'>
      <hr className='mb-10 -mt-20 my-auto border-0 w-full h-3 bg-red-950 sm:-mt-8 md:mt-16'/>
      <strong className='text-5xl font-konkhmer text-red-700 flex flex-col'> İKİNCİ TUR SONUÇLARI </strong>
      <div className='flex flex-col mt-10 md:flex-row justify-between'>
        <div className='relative erdogan flex flex-row items-end border-8 border-yellow-400 h-44 rounded bg-yellow-700 md:w-[45%] lg:w-[25%]'>
          <img className='h-40 w-32' src={erdoganpng} alt="" />
          <strong className='absolute whitespace-nowrap font-konkhmer text-3xl top-[9%] left-[33%] sm:text-4xl lg:text-3xl sm:left-[17%] md:left-[27%] xl:left-[22%] lg:left-[33%] 2xl:left-[20%]'>R. T. ERDOĞAN</strong>
          <strong className='absolute whitespace-nowrap font-konkhmer text-xl right-0 bottom-[20%] mb-2 mr-1'>%52.18</strong>
          <div className="loadingakp relative w-full rounded mb-1 mr-1">
            <hr className="absolute h-11 w-0.5 left-[50%] bottom-[-7%] border-0 bg-black z-20"></hr>
            <div style={{width:"53.08%"}} className="absolute h-10 rounded-sm bg-gradient-to-br from-yellow-400 via-yellow-600 shim-akp"/>
          </div>
        </div>
        <div className='relative kilicdaroglu flex flex-row items-end border-8 mt-2 border-red-600 h-44 rounded bg-red-900 md:w-[45%] lg:w-[24.7%] lg:ml-2 lg:mt-0'>
          <img className='h-[8.9rem] w-[7.2rem]' src={kilicdaroglupng} alt="" />
          <strong className='absolute whitespace-nowrap font-konkhmer text-3xl top-[9%] left-[32%] sm:text-4xl lg:text-3xl sm:left-[17%] md:left-[27%] xl:left-[22%] lg:left-[33%] 2xl:left-[20%]'>KILIÇDAROĞLU</strong>
          <strong className='absolute whitespace-nowrap font-konkhmer text-xl right-0 bottom-[20%] mb-2 mr-1'>%47.82</strong>
          <div className="loadingchp relative w-full rounded mb-1 ml-[8px] mr-1">
            <hr className="absolute h-12 w-0.5 left-[50%] bottom-[-10%] border-0 bg-black"></hr>
            <div style={{width:"47.82%"}} className="absolute h-10 rounded-sm bg-gradient-to-br from-red-500 via-red-800 shim-chp"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondRound