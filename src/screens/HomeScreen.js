import React from 'react'
import Nav from '../Nav'
import Candidates from './Candidates'
import './Banner.css'
import Map from './mapCb'

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav />
        <Candidates />
        <Map />
    </div>
  )
}

export default HomeScreen;