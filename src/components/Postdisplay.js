import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import Message from './Message';

export default function Postdisplay() {
    const [allPosts,setAllPosts] = useState([]);
    const getPosts = async () => {
        const collectionRef = collection(db,'post');
        const q = query(collectionRef,orderBy('timestamp','desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setAllPosts(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})) )
        });
        return unsubscribe;
    }
    useEffect(() => {
        getPosts();
    },[]);
  return (
    <div className='subhead'>
      <h3>see what other people are saying</h3>
      {allPosts.map(post => <Message {...post} key = {post.id} ></Message>)}
    </div>
  )
}
