import React from 'react'
import Parties from './Parties'
import MapMv from './mapMv'
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