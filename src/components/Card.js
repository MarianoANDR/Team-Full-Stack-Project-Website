import React, { useState } from 'react'
import Information from './Information'
import Info from './Info'
export default function Card() {
    const [info,setinfo] = useState(<Information/>)
  return (
    <>
    <div className='crd'>
    <div className='titles'>
        <p className='act1' id='act1' onClick={ () =>{
            setinfo(<Information/>);
            document.getElementById('act1').style.color = "green";
            document.getElementById('act2').style.color = "black";

            
        }}>For Buisness</p>
        <p className = 'act2' id='act2' onClick={ () => {
            setinfo(<Info/>);
            document.getElementById('act1').style.color = "black";
            document.getElementById('act2').style.color = "blue";
            
        }}>For NonProfits</p>
    </div>
    <div className='crd2'>
      {info}
    </div>
    </div>
    </>
  )
}
