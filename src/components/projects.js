import React from 'react';
import { Container,Row,Col,Tab,Nav} from "react-bootstrap";
import ProjectCard from './projectcard.js';
import TrackVisibility from 'react-on-screen';

function Projects()
{ 
  const projects=[
    {title:'Portfolio-Website',
     description:'Showcase of my web development projects, skills, and accomplishments',
     imgUrl:"https://tse2.mm.bing.net/th?id=OIP.iDYXq3As-rn3ms_zQwQ-6gHaDj&pid=Api&P=0&h=180",
     link:"https://github.com/SarthakKashmira/My-Portfolio",
     website:"https://funny-mermaid-e9beb8.netlify.app"
  },
  {title:'Chat-App',
    description:'Real-time chat application to connect with your friends.',
    imgUrl:"https://tse1.mm.bing.net/th?id=OIP.Cp_qSTHrxqrx3UatHiIZMwHaED&pid=Api&P=0&h=180",
    link:"https://github.com/SarthakKashmira/Chat-App",
    website:"https://github.com/SarthakKashmira/Chat-App"
 },
 {title:'Youtube-Clone',
  description:'YouTube clone with video uploading, streaming, and user interaction features.',
  imgUrl:"https://uvereann.github.io/youtube-clone/img/logo.png",
  link:"https://github.com/SarthakKashmira/",
  website:"https://singular-brigadeiros-08dddc.netlify.app/"
  },  
 ]

 const projects1=[
  {title:'Weather-App',
   description:'Predicts weather of any place entered by the user.',
   imgUrl:"https://logodix.com/logo/1255156.png",
   link:"https://github.com/SarthakKashmira/Weather-App",
   website:"https://stellular-fairy-401582.netlify.app/"
},
{title:'Medical-Chatbot',
  description:'Answers the queries related to diseases asked by the user.',
  imgUrl:"https://tse3.mm.bing.net/th?id=OIP.WCaT_wBqfeKVnWdCVapsawHaFG&pid=Api&P=0&h=180",
  link:"https://github.com/SarthakKashmira/Medical-Chatbot",
  website:"https://github.com/SarthakKashmira/Medical-Chatbot"
},
{title:'Ecommerce-store',
description:'Fully functional eCommerce store with product listings and secure checkout.',
imgUrl:"https://png.pngtree.com/png-clipart/20220213/original/pngtree-e-letter-logo-ecommerce-shop-store-design-png-image_7265997.png",
link:"https://github.com/SarthakKashmira/",
website:"https://github.com/SarthakKashmira/"
},  
]


    return(
        <div>
            <section className='project' id='projectss'>
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                {({isVisible})=>
                  <div className={isVisible?'animate__animated animate__slideInUp':''}>
                    <h2>Projects </h2>
                    <p>These are the list of some projects that I made.</p>
                    </div>
                  }  
                  </TrackVisibility>
                    <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey='first'>
                        <Row className="cards">
                            {projects.map((project,index)=>{
                                return(
                                  <a href={project.website} target="_blank" rel="noopener noreferrer" className="linki"> 
                                    <ProjectCard key={index} {...project}   />
                                  </a>
                                )
                            })}
                        </Row>

                    </Tab.Pane>
                    <Tab.Pane eventKey='second'>
                    <Row className="cards">
                            {projects1.map((project,index)=>{
                                return(
                                  <a href={project.website} target="_blank" rel="noopener noreferrer" className="linki"> 
                                    <ProjectCard key={index} {...project}   />
                                  </a>
                                )
                            })}
                        </Row>

                    </Tab.Pane>
                    <Tab.Pane eventKey='third'>

                    </Tab.Pane>
                    <Tab.Pane eventKey='fourth'>

                    </Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>
                    </Col>
                </Row>
            </Container>
           
            </section>
        </div>
    );}
export default Projects;
