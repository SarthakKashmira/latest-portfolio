import React from 'react';
import { Container,Row,Col,Tab,Nav} from "react-bootstrap";
import ProjectCard from './projectcard.js';
import proj1 from '../img/download.jpg';
import TrackVisibility from 'react-on-screen';
import isVisible from '@testing-library/user-event/dist/utils';
function Projects()
{ const projects=[
    {title:'Portfolio-Website',
     description:'Design and build',
    imgUrl:proj1},
    
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
                    <p>These are the list of some projects that I made and on few of them ,I am working.</p>
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
                        <Row>
                            {projects.map((project,index)=>{
                                return(
                                    <ProjectCard
                                key={index}
                                {...project}
                                />
                                )
                            })}
                        </Row>

                    </Tab.Pane>
                    <Tab.Pane eventKey='second'>

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
