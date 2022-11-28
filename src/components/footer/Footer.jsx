import './footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Footer = () => {
   
    return(
        
         <footer className='footer'>
        <div className = 'footDiv1'>
            <span>Helping Hand</span>
            <p>Helping Hand is a 501c3 nonprofit</p>
        </div> 
        <div className='links'>  
        <div className='footDiv2'>
        <ul>
            <li><a href='/'>Link</a></li>
            <li><a href='/'>Link</a></li>
            <li><a href='/'>Link</a></li>
        </ul>
        </div>
        <div className='footDiv3'>
        <ul>
        <li><a href='/'>Link</a></li>
            <li><a href='/'>Link</a></li>
            <li><a href='/'>Link</a></li>
        </ul>
        </div>
        <div className='footDiv4'>
        <ul>
        <li><a href='/'>Link</a></li>
            <li><a href='/'>Link</a></li>
            <li><a href='/'>Link</a></li>
        </ul>
        </div>
        </div>
        <div className='footDiv5'>
        <ul>
        <FontAwesomeIcon icon="fa-brands fa-linkedin" size='2x' className='brand' />

        <FontAwesomeIcon icon="fa-brands fa-twitter" size='2x' className='brand'/>

        <FontAwesomeIcon icon="fa-brands fa-facebook" size='2x'className='brand'/>
        <FontAwesomeIcon icon="fa-brands fa-instagram"size='2x' className='brand'/>

            
        </ul>
        </div>
        </footer>
        
       
    ) 
    
}

export default Footer;