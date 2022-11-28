import React, { useState } from 'react';
import { Card ,Form ,Button,Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import {Link , useNavigate} from 'react-router-dom';
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
    <div>
      hello
    </div>
  )
}
