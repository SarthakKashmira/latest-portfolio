import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import React from 'react';
import {useState,useEffect} from 'react';
import logo from '../img/IMG_20230210_155638.jpg';
import './navigation.css';
function Navigation() {
  const [activeLink,setactiveLink]=useState('home');
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const onScroll=()=>{
    if(window.scrollY>50)
    {setScrolled(true);}
    else{setScrolled(false);}
  }
  window.addEventListener('scroll',onScroll);
  return()=>window.removeEventListener('scroll',onScroll);
},[]);
 const onUpdateActiveLink=(value)=>{
  setactiveLink(value);
}
const [click,setclicked]=useState(true);
const handleClick=()=>{
  setclicked(!click);
}
    return (
         <Navbar expand="lg" className={scrolled?"scrolled":""}>
      <Container>
        <Navbar.Brand href="#home"><img className='mera 'src={logo} alt='LOGO'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"> 
        <span className={click?"navbar-toggler-icon":"navbar-toggler-icon"} onClick={handleClick}></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==='skills'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projectss" className={activeLink==='projectss'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('projectss')}>Projects</Nav.Link>
            <Nav.Link href="#connect_with_me" className={activeLink==='connect_with_me'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('connect_with_me')}>Connect With Me</Nav.Link>
            <Nav.Link href="#footers" className={activeLink==='footers'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('footers')}>Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
  
  export default Navigation;
  