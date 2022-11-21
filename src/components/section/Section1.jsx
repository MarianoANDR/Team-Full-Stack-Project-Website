import './section.css'

const Section1 = () => {
    return(
        <div className='sectionDiv'>
            <div className='div1'>
            <div className="div1a">
            <h2 className='h2'>Create a World that doesn't expire</h2>
            <p>Sign up Today</p>
            </div>
            </div>
            
            <div className='div2'>
                <div className="divAb">
                <div className='div2a'>
                <a href='/'>
                <span className='span'>Donate Food</span>
                <img src='.\src\images\images section1\arrow.png' alt='black arrow'></img></a>
                <p className='par'>Business</p></div>
                <div className='div2b'>
                <a href='/'>
                <span className='span'>Receive Food</span>
                <img src='.\src\images\images section1\arrow.png' alt='black arrow'></img></a>
                <p className='par'>NonProfit</p></div>
            </div>
        </div>
        </div>
    ) 
}

export default Section1;