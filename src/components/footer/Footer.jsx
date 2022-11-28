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
        <li><a href='www.facebook.com'><img className='faceLogo' src='https://t4.ftcdn.net/jpg/03/16/95/93/360_F_316959354_x4fl2wlOmwyaCUQAkmDqCBwHtLSHsUTg.jpg' alt='facebook logo'></img></a></li>
        <li><a href='www.instagram.com'><img className='instLogo' src='https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg' alt='instagram logo'></img></a></li>
        <li><a href='www.linkedin.com'><img className='linkLogo' src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='linkedin logo'></img></a></li>
        <li><a href='www.twitter.com'><img className='twitLogo' src='https://cdn-icons-png.flaticon.com/512/124/124021.png' alt='twitter logo'></img></a></li>
            
        </ul>
        </div>
        </footer>
        
       
    ) 
    
}

export default Footer;