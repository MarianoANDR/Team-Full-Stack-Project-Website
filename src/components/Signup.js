import React,{useRef, useState} from 'react';
import { Card ,Form ,Button,Alert ,Container} from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import {Link , useNavigate} from 'react-router-dom'
export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signup} = useAuth();
const [error,setError] = useState('');
const [loading,setLoading] = useState(false);
const history = useNavigate()

  async  function  handleSubmit(e){
        //prevents from submiting as usual.
        e.preventDefault()
if(passwordRef.current.value !== passwordConfirmRef.current.value){
    return setError('passwords do not match');
}
try{
    setError('');
    setLoading(true);
        await signup(emailRef.current.value, passwordRef.current.value)
        history.push('/')
    } catch{
        setError('Failed to create an account')
    }
    setLoading(false)
}
    
  return (
    <>
    <Container className = 'd-flex align-items-center justify-content-center' style = {{minHeight:'100vh'}} >
    <div className="w-100" style={{maxWidth:'600px'}}>
     <Card className = 'p-5'>
        <Card.Body>
<h2 className='text-left mb-4'>Create your account</h2>
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
    <Form.Group  className='mb-4' id = 'password-confirm'>
<Form.Label className='mb-2'>
    Password Confirmation
</Form.Label>
<Form.Control type = 'password' ref = {passwordConfirmRef} required></Form.Control>
    </Form.Group>
    <Button className = 'w-100' type = 'submit'>Sign Up</Button>
</Form>
        </Card.Body>
     </Card>
     <div className='w-100 text-center mt-2'>
        Already have an account? <Link to ='/login'>Log In</Link>
        </div> 
        </div>
        </Container>
    </>
  )
}
