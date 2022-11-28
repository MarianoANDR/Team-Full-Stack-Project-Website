import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Information() {
    
  return (
    <>
      <div className='cards d'>
        <div className='icon'> <FontAwesomeIcon icon=" fa-location-dot" size='2x'/></div>
        <div className='inf'>
        <h4>Request a pickup</h4>
        <p>from your dashboard select a day and time for your food to be picked up.</p>
        </div>
      </div>
      <div className='cards d'>
        <div className='icon'><FontAwesomeIcon icon=" fa-earth-americas" size='2x' /></div>
        <div className='inf'>
        <h4>Request a pickup</h4>
        <p>from your dashboard select a day and time for your food to be picked up.</p>
        </div>
      </div>
      <div className='cards d'>
        <div className='icon'> <FontAwesomeIcon icon=" fa-newspaper" size='2x' /></div>
        <div className='inf'>
        <h4>Request a pickup</h4>
        <p>from your dashboard select a day and time for your food to be picked up.</p>
        </div>
      </div>
    </>
  )
}
