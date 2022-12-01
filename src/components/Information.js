import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Information() {
    
  return (
    <>
      <div className='cards d'>
        <div className='icon'> <FontAwesomeIcon icon=" fa-location-dot" className='green' size='2x' bounce/></div>
        <div className='inf'>
        <h4>Request a pickup</h4>
        <p>from your dashboard select a day and time for your food to be picked up.</p>
        </div>
      </div>
      <div className='cards d'>
        <div className='icon'><FontAwesomeIcon icon=" fa-earth-americas" className='green' size='2x' spin/></div>
        <div className='inf'>
        <h4>Request a pickup</h4>
        <p>from your dashboard select a day and time for your food to be picked up.</p>
        </div>
      </div>
      <div className='cards d'>
        <div className='icon'> <FontAwesomeIcon icon=" fa-newspaper" className='green' size='2x' shake /></div>
        <div className='inf'>
        <h4>Request a pickup</h4>
        <p>from your dashboard select a day and time for your food to be picked up.</p>
        </div>
      </div>
    </>
  )
}
