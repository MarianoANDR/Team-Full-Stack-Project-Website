import React,{useRef, useState} from 'react';
import { Card ,Form ,Button,Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import {Link , useHistory} from 'react-router-dom';
export default function ForgotPassword() {
    const emailRef = useRef();
    const {resetPassword} = useAuth();
const [error,setError] = useState('');
const [loading,setLoading] = useState(false);
const [message,setMessage] = useState(false);
  async  function  handleSubmit(e){
        //prevents from submiting as usual.
        e.preventDefault()

try{
    setMessage('')
    setError('');
    setLoading(true);
        await resetPassword(emailRef.current.value);
        setMessage('chek your inbox for furthur details')
    } catch{
        setError('Failed to Log IN')
    }
    setLoading(false)
}
    
  return (
    <>
     <Card className = 'p-5'>
        <Card.Body>
<h2 className='text-left mb-4'>Password reset</h2>
{error && <Alert variant = 'danger'>{error}</Alert>}
{error && <Alert variant = 'success'>{message}</Alert>}
<Form onSubmit={handleSubmit}>
    <Form.Group id = 'email' className='mb-4'>
<Form.Label className='mb-3'>
    Email
</Form.Label>
<Form.Control type = 'email' ref = {emailRef} required></Form.Control>
    </Form.Group>
    

    <Button className = 'w-100' type = 'submit'>Reset password</Button>
</Form>
<div className='w-100 text-center mt-3'>
         <Link to = '/login'>Login</Link>
        </div>
        </Card.Body>
     </Card>
     <div className='w-100 text-center mt-2'>
        Need an account? <Link to = '/signup'>Sign Up</Link>
        </div> 
    </>
  )
}
