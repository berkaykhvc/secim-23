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
    </div>
  )
}

export default PartiesScreen;