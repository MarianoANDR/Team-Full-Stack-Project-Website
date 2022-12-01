import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Info() {
  return (
    <>
     <div className='cards d'>
        <div className='icon'> <FontAwesomeIcon className='blue' icon=" fa-location-dot" size='2x' bounce/></div>
        <div className='inf'>
        <h4>learn more</h4>
        <p>from your dashboard select a day and time for your food to be picked up.</p>
        </div>
      </div>
      <div className='cards d'>
        <div className='icon'><FontAwesomeIcon className='blue' icon=" fa-earth-americas" size='2x' /></div>
        <div className='inf'>
        <h4>Request a pickup</h4>
        <p>from your dashboard select a day and time for your food to be picked up.</p>
        </div>
      </div>
      <div className='cards d'>
        <div className='icon'> <FontAwesomeIcon className='blue' icon=" fa-newspaper" size='2x' /></div>
        <div className='inf'>
        <h4>Request a pickup</h4>
        <p>from your dashboard select a day and time for your food to be picked up.</p>
        </div>
      </div>
      </>
  )
}
