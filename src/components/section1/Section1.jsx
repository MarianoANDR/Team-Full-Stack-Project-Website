import './section1.css'
import { Link } from 'react-router-dom';


const Section1 = () => {
    return(
        <div className='sectionDiv'>
            <div className='div1'>
            <div className="div1a">
            <h2 className='h2'>Create a World that doesn't expire</h2>
            <p><Link>Sign Up</Link>  Today</p>
            </div>
            </div>
            
            <div className='div2'>
                <div className="divAb">
                <div className='div2a'>
                <a href='/'>
                <span className='spanDonate'>Donate Food</span>
                
                <img className='imageArrow' src='https://www.di-da.eus/wp-content/uploads/2018/07/arrow-icon-28.png' alt='arrow'></img></a>
                
                <p className='par'>Business</p></div>
                <div className='div2b'>
                <a href='/'>
                <span className='spanReceive'>Receive Food</span>
                <img className='imageArrow' src='https://www.di-da.eus/wp-content/uploads/2018/07/arrow-icon-28.png' alt='arrow'></img></a>
                <i className="fa-solid fa-arrow-right"></i>

                <p className='par'>NonProfit</p></div>
            </div>
        </div>
        </div>
    ) 
}

export default Section1;