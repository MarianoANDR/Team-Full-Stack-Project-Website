import React from 'react'
import Footer from "./footer/Footer";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";
import { Nav,Navbar,Container, Button } from 'react-bootstrap';
import {Link , useNavigate} from 'react-router-dom'
import OffcanvasExample from './Nav';

export default function Home() {
  return (
    <>
     <OffcanvasExample/>
      <Section2 />

<Section1/>

<Footer/>
    </>
  )
}
