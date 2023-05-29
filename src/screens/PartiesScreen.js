import React from 'react'
import Parties from './Parties'
import MapMv from './MapMv'
import Nav from '../Nav'

function PartiesScreen() {
  return (
    <div className='partiesScreen'>
      <Nav />
      <Parties />
      <MapMv />
      <hr className='-mt-20 border-0 absolute w-full h-3 bg-red-950 sm:-mt-8 md:mt-16'/>
    </div>
  )
}

export default PartiesScreen;