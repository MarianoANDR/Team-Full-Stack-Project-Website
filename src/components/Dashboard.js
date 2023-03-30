import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate} from 'react-router-dom';
import Loginnav from './Loginnav';
import Footer from './footer/Footer'
import Postdisplay from './Postdisplay';
export default function Dashboard() {
const [error,setError] = useState('');
const { currentUser,logout} = useAuth();
const history = useNavigate();
    //logout handle
    async function handleLogout(){
        setError('')

        try{
            await logout()
            history.push('/login')
        
    } catch{
        setError('failed to log out')
    }
}
  return (
    <>
     <Loginnav logout = {handleLogout}/> 
     <Postdisplay/>
     <Footer/>
    </>
  )
}
