import { useState } from 'react';
import './section2.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const Section2 = () => {

    const [text, setText] = useState('1.1M');
    const [text2, setText2] = useState('3.3k');
    const [text3, setText3] = useState('8.2k');
  

    // const handleClick = (e) => {
        
    //     e.target.style.backgroundColor = 'turquoise';
    // }

        

    return(
        <div className="section2">
            <h2 className='section2h2'>What Impact can you make?</h2>
            <p className='section2Par'>Our unique calculator shows the benefits your company can receive by using Replate.</p>
            <h3 className='section2h3'>Pounds Donated</h3>
            <div className='buttonsDiv'>
                
                <button onClick={(e) => {
                    //document.getElementById('b1').style.backgroundColor = 'turquoise';
                    document.getElementById('b2').classList.remove('active');
                    document.getElementById('b3').classList.remove('active');
                    document.getElementById('b1').classList.add('active');
                    setText('27.3k');
                    setText2('84');
                    setText3('205');         
                    // handleClick(e)
                }}className='button1' id= 'b1'>
                    <span>100 lbs</span>
                    <p>Leftovers after an event</p>
                   
                </button>
                <button type='button' className='button2' id='b2' onClick={(e) => {
                                    document.getElementById('b1').classList.remove('active');
                                    document.getElementById('b3').classList.remove('active');
                                    document.getElementById('b2').classList.add('active');
                    setText('1.1M');
                    setText2('3.3k');
                    setText3('8.2k'); 
                    // handleClick(e)

                }}>
                <span>4000 lbs</span>
                <p>Avg monthly donation</p>
                </button>
                <button type='button' className='button3' id='b3' onClick={(e) => {
                  document.getElementById('b1').classList.remove('active');
                  document.getElementById('b2').classList.remove('active');
                  document.getElementById('b3').classList.add('active');


                    setText('5.5M');
                    setText2('16.7k');
                    setText3('41k');
                    // handleClick(e)
                                     
                }}>
                <span>20000 lbs</span>
                <p>Avg yearly donation</p>
                </button> 
            </div>
            <div className='review1'>
            <div className='greenBox'>
            <h3 className='h3green'>Your Impact</h3>

            <div className='subGreen'>
                <div className='green1'>
                    <p className='pDiv'><FontAwesomeIcon icon='droplet' size = '2x'/></p>
                    <p className='pDiv text'>{text}</p>
                    <p className='pDiv subtext'>gal of water saved</p>
                </div>
                <div className='green2'>
                <p className='pDiv'><FontAwesomeIcon icon='utensils' size = '2x'/></p>
                <p className='pDiv text'>{text2}</p>
                <p className='pDiv subtext'>meals served</p>
                </div>
                <div className='green3'>
                <p className='pDiv'><FontAwesomeIcon icon='industry' size = '2x'/></p>
                <p className='pDiv text'>{text3}</p>
                <p className='pDiv subtext'>pounds CO2 diverted</p>
                </div>
            </div>
            </div>
            
            
            </div>
            
            </div>
        
        
        
        
    )
}

export default Section2;


