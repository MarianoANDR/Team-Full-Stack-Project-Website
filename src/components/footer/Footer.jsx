import './footer.css';

const Footer = () => {
   
    return(
        
         <footer className='footer'>
        <div className = 'footDiv1'>
            <a href='/'><img alt='COMPANY LOGO'></img></a> 
            <span>Helping Hand</span>
            <p>Helping Hand is a 501c3 nonprofit</p>
        </div>   
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
        <div className='footDiv5'>
        <ul>
        <li><a href='/'><img alt='facebook logo'></img></a></li>
        <li><a href='/'><img alt='instagram logo'></img></a></li>
        <li><a href='/'><img alt='linkedin logo'></img></a></li>
        <li><a href='/'><img alt='twitter logo'></img></a></li>
            
        </ul>
        </div>
        </footer>
        
       
    ) 
    
}

export default Footer;