import {useState,useEffect} from 'react';
import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './banner.css';
import {ArrowRightCircle} from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {Nav} from 'react-bootstrap';

function Banner(){
  const [Loop,setLoop]=useState(0);
  const [Deleting,setDeleting]=useState(false);
  const toRotate=["Web Developer","Web Designer","ML Enthusiast"];
  const [Text,setText]=useState(''); 
  const [Delta,setDelta]=useState(300 - Math.random() * 100)
  const period=2000;
  
  useEffect(()=>{
    let ticker=setInterval(()=>{tick();} ,Delta);
    return ()=>{clearInterval(ticker)};
     },[Text])
     
  const tick=()=>
  {
                  let i=Loop % toRotate.length;
                  let fullText=toRotate[i];
                  let UpdateText=Deleting?fullText.substring(0,Text.length-1):fullText.substring(0,Text.length+1);
                 setText(UpdateText);
                 if(Deleting)
                  {setDelta(prevDelta=>prevDelta/2)}
                 if(!Deleting && UpdateText===fullText)
                  {setDeleting(true);
                   setDelta(period);}
                 else if(Deleting && UpdateText==='')
                  {setDeleting(false);
                   setLoop(Loop+1);
                   setDelta(500);
                  }

 }

  return(
        <div>
          <section className='banner' id='home'>
            <Container>
                <Row className='rowobjects'>
                 <Col xs={12} md={6} xl={7}>
                  <TrackVisibility>
                  {()=>
                  <div className={'animate__animated animate__bounce'}>
                    <span className='tagline'>Welcome to my portfolio</span>
                    <h1>{`Hi I'm Sarthak Kashmira`}<span className='wrap'> ||  {Text}</span></h1>
                    <p>Hello everybody.I am a student at IIIT Bhubaneswar and is currently doing web development</p>
                    </div>
                  }  
                    </TrackVisibility>

                 </Col>
                 <Col xs={10} md={4} xl={5}>
                 <Nav.Link href="#connect_with_me">
                 <button onClick={()=>console.log('connecting')}>Let's Connect<ArrowRightCircle size={25}/></button>
                 </Nav.Link>
                 </Col>
                </Row>
            </Container>
          </section>  
        </div>
    );
}
export default Banner;