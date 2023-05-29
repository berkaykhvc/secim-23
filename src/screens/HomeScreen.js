import React from 'react'
import Nav from '../Nav'
import Candidates from './Candidates'
import './Banner.css'
import MapCb from './MapCb.js'
import SecondRound from './SecondRound'
import MapSr from './MapSr'

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav />
        <Candidates />
        <MapCb />
        <SecondRound />
        <MapSr />
        <hr className='border-0 absolute w-full h-3 bg-red-950'/>
    </div>
  )
}

export default HomeScreen;