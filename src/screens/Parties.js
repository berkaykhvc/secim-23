import React from 'react'
import './Banner.css'
import bbppng from './bbp.png'
import yrppng from './yrp.png'
import mhppng from './mhp.png'
import akppng from './akp.png'
import chppng from './chp.png'
import zppng from './zp.png'
import ysppng from './ysp.png'
import iyipng from './iyi.png'
import tippng from './tip.png'
import appng from './ap.png'

function Parties() {
  return (
    <div className='flex flex-col lg:flex-row'>
        <div className='relative cumhur flex flex-row items-end border-8 border-orange-700 h-44 rounded bg-orange-900 lg:w-[24.7%]'>
          <strong className='absolute whitespace-nowrap font-konkhmer text-3xl top-[5.3%] left-[21%] sm:text-4xl sm:left-[36%] xl:left-[41%] lg:left-[21%] 2xl:left-[27%]'>Cumhur İttifakı</strong>
          <strong className='absolute font-konkhmer text-xl left-0 bottom-[20%] mb-2 ml-[0.320rem]'>323 Mv.</strong>
          <strong className='absolute whitespace-nowrap font-konkhmer text-xl right-0 bottom-[20%] mb-2 mr-1'>%49.47</strong>
          <div className="loadingcumhur relative w-full rounded mb-1 ml-1 mr-1">
            <div style={{width:"49.47%"}} className="absolute h-10 rounded-sm bg-gradient-to-br from-orange-500 via-orange-700 shim-cumhur"/>
          </div>
        </div>
        <div className='flex flex-col lg:absolute lg:mt-[11.05rem] lg:left-[2.2%] lg:w-[20%]'>
          <div className='relative border-8 items-end flex flex-row border-yellow-400 mx-auto h-36 border-t-0 w-[90%] erdogan bg-yellow-700'>
            <img className='h-[4.76rem] w-20 mb-[2.25rem] ml-1' src={akppng} alt="" />
            <strong className='absolute font-konkhmer text-xl top-[5.3%] left-[22.8%] sm:text-2xl sm:left-[36%] xl:left-[38%] lg:left-[20%] 2xl:left-[20%]'>Adalet ve Kalkınma Partisi</strong>
            <strong className='whitespace-nowrap font-konkhmer text-lg left-0 mb-7'>268 Mv.</strong>
            <strong className='absolute whitespace-nowrap font-konkhmer text-lg right-0 bottom-[19%] mr-1'>%35.61</strong>
            <div className="loadingakp relative w-full rounded mb-1 -ml-[4.70rem] mr-1">
              <div style={{width:"35.61%"}} className="absolute h-7 rounded-sm bg-gradient-to-br from-yellow-500 via-yellow-600 shim-akp"/>
            </div>
          </div>
          <div className='relative border-8 ince items-end flex flex-row border-blue-400 mx-auto h-36 border-t-0 w-[90%] bg-blue-900'>
            <img className='h-[4.56rem] w-[5.50rem] mb-[2.20rem] ml-1' src={mhppng} alt="" />
            <strong className='absolute font-konkhmer text-xl top-[5.3%] left-[25.3%] sm:text-2xl sm:left-[36%] xl:left-[38%] lg:left-[22%] 2xl:left-[20%]'>Milliyetçi Hareket Partisi</strong>
            <strong className='whitespace-nowrap font-konkhmer text-lg left-0 mb-7'>50 Mv.</strong>
            <strong className='absolute whitespace-nowrap font-konkhmer text-lg right-0 bottom-[19%] mr-1'>%10.07</strong>
            <div className="loadingince relative w-full rounded mb-1 -ml-16 mr-1">
              <div style={{width:"10.07%"}} className="absolute h-7 rounded-sm bg-gradient-to-br from-blue-500 via-blue-600 shim-ince"/>
            </div>
          </div>
          <div className='relative border-8 yrp items-end flex flex-row border-green-500 mx-auto h-36 border-t-0 w-[90%] bg-green-900'>
            <img className='h-[4rem] w-[5rem] mb-[2.35rem] ml-1.5 mr-2' src={yrppng} alt="" />
            <strong className='absolute font-konkhmer text-xl top-[5.3%] left-[28.7%] sm:text-2xl sm:left-[36%] xl:left-[38%] lg:left-[23%] 2xl:left-[20%]'>Yeniden Refah Partisi</strong>
            <strong className='whitespace-nowrap font-konkhmer text-lg left-0 mb-7'>5 Mv.</strong>
            <strong className='absolute whitespace-nowrap font-konkhmer text-lg right-0 bottom-[19%] mr-1'>%2.81</strong>
            <div className="loadingogan relative w-full rounded mb-1 -ml-12 mr-1">
              <div style={{width:"2.81%"}} className="absolute h-7 rounded-sm bg-gradient-to-br from-green-500 via-green-600 shim-yrp"/>
            </div>
          </div>
          <div className='relative border-8 bbp items-end flex flex-row border-red-600 mx-auto h-36 border-t-0 w-[90%] bg-red-950'>
            <img className='h-[4rem] w-[5rem] mb-[2.20rem] ml-1.5 mr-2' src={bbppng} alt="" />
            <strong className='absolute font-konkhmer text-xl top-[5.3%] left-[31.3%] sm:text-2xl sm:left-[36%] xl:left-[38%] lg:left-[28%] 2xl:left-[20%]'>Büyük Birlik Partisi</strong>
            <strong className='whitespace-nowrap font-konkhmer text-lg left-0 mb-7'>0 Mv.</strong>
            <strong className='absolute whitespace-nowrap font-konkhmer text-lg right-0 bottom-[19%] mr-1'>%0.98</strong>
            <div className="loadingbbp relative w-full rounded mb-1 -ml-12 mr-1">
              <div style={{width:"0.98%"}} className="absolute h-7 rounded-sm bg-gradient-to-br from-red-500 via-red-600 shim-bbp"/>
            </div>
          </div>
        </div>
        <div className='relative bbp flex flex-row items-end border-8 mt-2 border-red-800 h-44 rounded bg-red-950 lg:w-[24.7%] lg:ml-2 lg:mt-0'>
          <strong className='absolute whitespace-nowrap font-konkhmer text-3xl top-[5.3%] left-[28%] sm:text-4xl sm:left-[40%] xl:left-[42%] lg:left-[27%] 2xl:left-[33%]'>Millet İttifakı</strong>
          <strong className='absolute whitespace-nowrap font-konkhmer text-xl left-0 ml-1.5 bottom-[24.8%]'>212 Mv.</strong>
          <strong className='absolute whitespace-nowrap font-konkhmer text-xl right-0 bottom-[24.8%] mr-1'>%35.02</strong>
          <div className="loadingbbp relative w-full rounded mb-1 ml-1 mr-1">
            <div style={{width:"35.02%"}} className="absolute h-10 rounded-sm bg-gradient-to-br from-red-500 via-red-600 shim-millet"/>
          </div>
        </div>
        <div className='flex flex-col lg:absolute lg:mt-[11.05rem] lg:left-[27.6%] lg:w-[20%]'>
          <div className='relative border-8 items-end flex flex-row border-red-600 mx-auto h-36 border-t-0 w-[90%] chp bg-red-900'>
            <img className='h-[3.90rem] w-[4.50rem] mb-[2.25rem] ml-1' src={chppng} alt="" />
            <strong className='absolute font-konkhmer text-xl top-[5.3%] left-[26%] sm:text-2xl sm:left-[36%] xl:left-[41%] lg:left-[20%] 2xl:left-[20%]'>Cumhuriyet Halk Partisi</strong>
            <strong className='whitespace-nowrap font-konkhmer text-lg left-0 mb-7'>169 Mv.</strong>
            <strong className='absolute whitespace-nowrap font-konkhmer text-lg right-0 bottom-[19%] mr-1'>%25.33</strong>
            <div className="loadingchp relative w-full rounded mb-1 -ml-[4.42rem] mr-1">
              <div style={{width:"25.33%"}} className="absolute h-7 rounded-sm bg-gradient-to-br from-red-500 via-red-700 shim-chp"/>
            </div>
          </div>
          <div className='relative border-8 iyip items-end flex flex-row border-cyan-400 mx-auto h-36 border-t-0 w-[90%] bg-cyan-700'>
            <img className='h-[4.60rem] w-[5rem] mb-[2.40rem] ml-0.5' src={iyipng} alt="" />
            <strong className='absolute font-konkhmer text-2xl top-[8.3%] left-[45.3%] sm:text-3xl sm:left-[45%] xl:left-[46%] lg:left-[42%] 2xl:left-[20%]'>İYİ Parti</strong>
            <strong className='whitespace-nowrap font-konkhmer text-lg left-0 mb-7 ml-1.5'>43 Mv.</strong>
            <strong className='absolute whitespace-nowrap font-konkhmer text-lg right-0 bottom-[19%] mr-1'>%9.69</strong>
            <div className="loadingiyip relative w-full rounded mb-1 -ml-[4rem] mr-1">
              <div style={{width:"9.69%"}} className="absolute h-7 rounded-sm bg-gradient-to-br from-cyan-500 via-cyan-600 shim-iyip"/>
            </div>
          </div>
        </div>
        <div className='relative eoi flex flex-row items-end border-8 mt-2 border-indigo-800 h-44 rounded bg-indigo-950 lg:w-[24.7%] lg:ml-2 lg:mt-0'>
          <strong className='absolute font-konkhmer text-2xl top-[4%] left-[13.5%] sm:text-4xl sm:left-[24%] lg:text-3xl 2xl:text-3xl xl:left-[32%] lg:left-[11%] 2xl:left-[18%]'>Emek ve Özgürlük İttifakı</strong>
          <strong className='absolute whitespace-nowrap font-konkhmer text-xl left-0 mb-2 ml-1.5 mr-1 bottom-[20%]'>65 Mv.</strong>
          <strong className='absolute whitespace-nowrap font-konkhmer text-xl right-0 bottom-[20%] mb-2 mr-1'>%10.55</strong>
          <div className="loadingeoi relative w-full rounded mb-1 ml-[6px] mr-1">
            <div style={{width:"10.55%"}} className="absolute h-10 rounded-sm bg-gradient-to-br from-indigo-600 via-indigo-800 shim-eoi"/>
          </div>
        </div>
        <div className='flex flex-col lg:absolute lg:mt-[11.05rem] lg:left-[52.7%] lg:w-[20%]'>
          <div className='relative border-8 items-end flex flex-row border-purple-600 mx-auto h-36 border-t-0 w-[90%] ysp bg-purple-950'>
            <img className='h-[4.60rem] w-[6rem] mb-[2.25rem] ml-1' src={ysppng} alt="" />
            <strong className='absolute font-konkhmer text-xl top-[6.3%] left-[38%] sm:text-2xl sm:left-[43%] xl:left-[38%] lg:left-[31%] 2xl:left-[20%]'>Yeşil Sol Parti</strong>
            <strong className='whitespace-nowrap font-konkhmer text-lg left-0 mb-7'>61 Mv.</strong>
            <strong className='absolute whitespace-nowrap font-konkhmer text-lg right-0 bottom-[19%] mr-1'>%8.82</strong>
            <div className="loadingysp relative w-full rounded -ml-[3.70rem] mb-1 mr-1">
              <div style={{width:"8.82%"}} className="absolute h-7 rounded-sm bg-gradient-to-br from-purple-500 via-purple-700 shim-ysp"/>
            </div>
          </div>
          <div className='relative border-8 bbp items-end flex flex-row border-red-700 mx-auto h-36 border-t-0 w-[90%] bg-red-950'>
            <img className='h-[4.70rem] w-[5rem] mb-[2.40rem] ml-1' src={tippng} alt="" />
            <strong className='absolute font-konkhmer text-xl top-[8.3%] left-[31.7%] sm:text-2xl sm:left-[40%] xl:left-[38%] lg:left-[25%] 2xl:left-[20%]'>Türkiye İşçi Partisi</strong>
            <strong className='whitespace-nowrap font-konkhmer text-lg left-0 mb-7'>4 Mv.</strong>
            <strong className='absolute whitespace-nowrap font-konkhmer text-lg right-0 bottom-[19%] mr-1'>%1.73</strong>
            <div className="loadingbbp relative w-full rounded -ml-[3.20rem] mb-1 mr-1">
              <div style={{width:"1.73%"}} className="absolute h-7 rounded-sm bg-gradient-to-br from-red-500 via-red-600 shim-bbp"/>
            </div>
          </div>
        </div>
        <div className='relative ogan flex flex-row items-end border-8 mt-2 border-green-600 h-44 rounded bg-emerald-900 lg:w-[24.7%] lg:ml-2 lg:mt-0'>
          <strong className='absolute whitespace-nowrap font-konkhmer text-3xl items-start top-[5.3%] left-[29%] sm:text-4xl lg:text-3xl sm:left-[37%] xl:left-[40%] lg:left-[33.5%] 2xl:left-[38%]'>ATA İttifakı</strong>
          <strong className='absolute whitespace-nowrap font-konkhmer text-xl left-0 bottom-[20%] mb-2 ml-1.5'>0 Mv.</strong>
          <strong className='absolute whitespace-nowrap font-konkhmer text-xl right-0 bottom-[20%] mb-2 mr-1'>%2.43</strong>
          <div className="loadingogan relative w-full rounded mb-1 ml-[6px] mr-1">
            <div style={{width:"2.43%"}} className="absolute h-10 rounded-sm bg-gradient-to-br from-green-500 via-green-600 shim-ogan"/>
          </div>
        </div>
        <div className='flex flex-col lg:absolute lg:mt-[11.05rem] lg:left-[78%] lg:w-[20%]'>
          <div className='relative border-8 items-end flex flex-row border-gray-600 mx-auto h-36 border-t-0 w-[90%] zp bg-gray-800'>
            <img className='h-[4.60rem] w-[5.50rem] mb-[2.25rem] ml-1' src={zppng} alt="" />
            <strong className='absolute font-konkhmer text-xl top-[6.3%] left-[40%] sm:text-2xl sm:left-[42%] xl:left-[38%] lg:left-[31%] 2xl:left-[20%]'>Zafer Partisi</strong>
            <strong className='whitespace-nowrap font-konkhmer text-lg left-0 mb-7'>0 Mv.</strong>
            <strong className='absolute whitespace-nowrap font-konkhmer text-lg right-0 bottom-[19%] mr-1'>%2.23</strong>
            <div className="loadingzp relative w-full rounded mb-1 -ml-[3.20rem] mr-1">
              <div style={{width:"2.73%"}} className="absolute h-7 rounded-sm bg-gradient-to-br from-gray-500 via-gray-700 shim-zp"/>
            </div>
          </div>
          <div className='relative border-8 ap items-end flex flex-row border-orange-500 mx-auto h-36 border-t-0 w-[90%] bg-orange-900'>
            <img className='h-[4.60rem] w-[5rem] mb-[2.40rem] ml-0.5' src={appng} alt="" />
            <strong className='absolute font-konkhmer text-xl top-[8.3%] left-[36.7%] sm:text-2xl sm:left-[41%] xl:left-[38%] lg:left-[31%] 2xl:left-[20%]'>Adalet Partisi</strong>
            <strong className='whitespace-nowrap font-konkhmer text-lg left-0 mb-7'>0 Mv.</strong>
            <strong className='absolute whitespace-nowrap font-konkhmer text-lg right-0 bottom-[19%] mr-1'>%0.20</strong>
            <div className="loadingap relative w-full rounded mb-1 -ml-[3.20rem] mr-1">
              <div style={{width:"0.50%"}} className="absolute h-7 rounded-sm bg-gradient-to-br from-yellow-500 via-yellow-600 shim-ap"/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Parties