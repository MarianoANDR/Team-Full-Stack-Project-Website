import { getDownloadURL, ref } from 'firebase/storage'
import React from 'react'
import { Card ,Image } from 'react-bootstrap'
import { storage } from '../firebase'

export default function Message({children,images,title,description}) {
    // create a refrence for firebase storage
    getDownloadURL(ref(storage, `iamges/${images}`)).then((url)=> {
        const img = document.getElementById('myimg');
    img.setAttribute('src', url);
    })

  return (
    <div>
        <Card>
            <Card.Body>
                <div>
                    <Image id = 'myimg' src='' alt='image'></Image>
                </div>
                <div>
                    <h3>{title}</h3>
                </div>
            </Card.Body>
        </Card>
      {children}
    </div>
  )
}
