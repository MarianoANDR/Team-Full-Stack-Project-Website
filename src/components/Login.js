import React,{useRef, useState} from 'react';
import { Card ,Form ,Button,Alert , Container } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import {Link , useNavigate} from 'react-router-dom';
export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const {login} = useAuth();
const [error,setError] = useState('');
const [loading,setLoading] = useState(false);
const history = useNavigate()
  async  function  handleSubmit(e){
        //prevents from submiting as usual.
        e.preventDefault()

try{
    setError('');
    setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
        history('/dashboard')
    } catch{
        setError('Failed to Log IN')
    }
    setLoading(false)
}
    
  return (
    <>
    <Container className = 'd-flex align-items-center justify-content-center' style = {{minHeight:'100vh'}} >
    <div className="w-100" style={{maxWidth:'600px'}}>
     <Card className = 'p-5'>
        <Card.Body>
<h2 className='text-left mb-4'>Log in to your account</h2>
{error && <Alert variant = 'danger'>{error}</Alert>}
<Form onSubmit={handleSubmit}>
    <Form.Group id = 'email' className='mb-4'>
<Form.Label className='mb-3'>
    Email
</Form.Label>
<Form.Control type = 'email' ref = {emailRef} required></Form.Control>
    </Form.Group>
    <Form.Group  className='mb-4' id = 'password'>
<Form.Label className='mb-2'>
    Password
</Form.Label>
<Form.Control type = 'password' ref = {passwordRef} required></Form.Control>
    </Form.Group>

    <Button className = 'w-100' type = 'submit'>Log in</Button>
</Form>
<div className='w-100 text-center mt-3'>
         <Link to = '/forgot-password'>Forgot Password?</Link>
        </div>
        </Card.Body>
     </Card>
     <div className='w-100 text-center mt-2'>
        Need an account? <Link to = '/signup'>Sign Up</Link>
        </div> 
        </div>
        </Container>
    </>
  )
}
