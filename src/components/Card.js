import React, { useState } from 'react'
import Information from './Information'
import Info from './Info'

export default function Card() {
    const [info,setinfo] = useState(<Information/>)
  return (
    <>
    <div className='crd '>
    <div className='titles'>
        <p style={{cursor:'pointer'}} className='act1' id='act1' onClick={ () =>{
            setinfo(<Information/>);
            document.getElementById('act1').style.color = "green";
            document.getElementById('act2').style.color = "black";
            document.getElementById('color').style.background = 'rgba(34,176,129,0.1)';


            
        }}>For Buisness</p>
        <p style={{cursor:'pointer'}} className = 'act2' id='act2' onClick={ () => {
            setinfo(<Info/>);
            document.getElementById('act1').style.color = "black";
            document.getElementById('act2').style.color = "#0064B5";
            document.getElementById('color').style.background = 'rgba(0,100,181,0.1)';
            
        }}>For NonProfits</p>
    </div>
    <div className='crd2'>
      {info}
    </div>
    </div>
    </>
  )
}
