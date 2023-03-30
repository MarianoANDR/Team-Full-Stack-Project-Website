import React, { useRef, useState } from 'react'
import { Container, Form, Card ,Button} from 'react-bootstrap'
import Loginnav from './Loginnav'
import './posts/post.css'
import {collection,addDoc,serverTimestamp} from '../firebase'
import {  db ,storage} from '../firebase'
import {ref,uploadBytes} from 'firebase/storage'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import {v4} from 'uuid'
export default function Post() {
  const [post,setpost] = useState({description:'' });
  const {currentUser} = useAuth();
  const title = useRef();
  const imag = useRef();
const history = useNavigate();

  //submit post
  if (!currentUser.uid){
    console.log('user error')
  }
  async  function submitPost(e) {
    e.preventDefault();
const collectionRef = collection(db,"post");
 await addDoc(collectionRef,{
  ...post,
  title : title.current.value,
  timestamp: serverTimestamp(),
  user: currentUser.uid,
  images:`${imag.current.files[0].name + currentUser.uid}`
});

//image
const imageRef = ref(storage ,`iamges/${imag.current.files[0].name}`)
await uploadBytes(imageRef,imag.current.files[0])
setpost({description:""});
history('/dashboard')
  }

  return (
    <>
     <Loginnav/> 
     <Container>
        <Card>
            <Card.Body>
                <h2>Create a new Post</h2>
                <Form  onSubmit={submitPost}>
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control className='textarea bg-dark' ref= {title} placeholder='enter the blog title here...' type='text'></Form.Control>
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Blog Image</Form.Label>
        <Form.Control className = 'textarea bg-dark' 
        ref = {imag} accept='.png ,.jpeg ,.jpg' type="file" />
      </Form.Group>
                    <Form.Group>
                        <Form.Label>Discription</Form.Label>
                        <Form.Control value={post.description}
                        onChange = {(e) => setpost({...post,description:e.target.value})}
                         className='textarea bg-dark' 
                         as='textarea'  placeholder="discription here"
          style={{ height: '100px' }}></Form.Control>
                        <p className={`blue ${post.description.length > 300 ? 'red':''}`}>{post.description.length}/300</p>
                    </Form.Group>
                    
                
                    <Button className='submit' type='submit'>Submit</Button>
                </Form>
            </Card.Body>
        </Card>
     </Container>
    </>
  )
}
