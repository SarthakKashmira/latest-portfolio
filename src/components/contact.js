import React from 'react';
import {useState} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import ContactImg from '../img/contact-img.svg';
import axios from 'axios';
import './contact.css';
function Contact(){
    const formInitial={
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:'',
    }
    const[formDetails,setformdetails]=useState(formInitial);
    const[buttonText,setbuttonText]=useState('Send');
    const [status,setstatus] =useState({});
    const onFormUpdate=(category,value)=>{
        setformdetails({
            ...formDetails,
            [category]:value
        })
      console.log(formDetails);}

        const handleSubmit= async (e)=>{
            e.preventDefault();
            setbuttonText('Sending...');
              try{
                  const response = await axios.post("http://localhost:8000/connect_with_me",{
                    formDetails
                  })
                  if(response){
                    console.log(response)
                  }
              }
              catch(e){
                console.log(e);

              }
              setbuttonText('Send');
        };
    return(
        <section className='contact' id='connect_with_me'>
         <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                    <img src={ContactImg} alt='Contact Us'/>
                </Col>
                <Col md={6}>
                 <h2>Get in touch.</h2>
                 <form onSubmit={handleSubmit}>
                    <Row>
                      <Col sm={6} className='px-1'>
                        <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={(e)=>onFormUpdate('firstName',e.target.value)}/>
                      </Col>  
                      <Col sm={6} className='px-1'>
                        <input type='text' value={formDetails.lastName} placeholder='Last Name' onChange={(e)=>onFormUpdate('lastName',e.target.value)}/>
                      </Col>  
                      <Col sm={6} className='px-1'>
                        <input type='email' value={formDetails.email} placeholder='E-mail' onChange={(e)=>onFormUpdate('email',e.target.value)}/>
                      </Col>  
                      <Col sm={6} className='px-1'>
                        <input type='tel' value={formDetails.phone} placeholder='Phone No.' onChange={(e)=>onFormUpdate('phone',e.target.value)}/>
                      </Col> 
                      <Col>
                      <textarea row='6' value={formDetails.message} placeholder='Message' onChange={(e)=>onFormUpdate('message',e.target.value)}></textarea>
                      <button type='submit' ><span>{buttonText}</span></button>
                      </Col> 
                       {
                        status.message &&
                        <Col>
                        <p className={status.success===false?'danger':'success'}>{status.message}</p>
                        </Col>
                       }
                    </Row>
                 </form>

                </Col>
            </Row>
         </Container>   

        </section>

    );
}
export default Contact;