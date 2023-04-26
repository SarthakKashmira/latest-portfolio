import { Container,Row,Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from '../img/icons8-html-5.svg';
import css from '../img/icons8-css3.svg';
import js from '../img/icons8-javascript.svg';
import React from 'react';
import react from '../img/icons8-react.svg';
import npm from '../img/icons8-npm.svg';
import nodejs from '../img/icons8-nodejs-48.png';
import c from '../img/icons8-c-cute-48.png';
import cpp from '../img/icons8-c++.svg';
import python from '../img/icons8-python-48.png';
import './skills.css';

function Skills (){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <div>
            <section className='skill 'id='skills'>
                <Container>
                    <Row>
                        <Col>
                        <div className='skill-bx'>
                            <h2>
                                Skills
                            </h2>
                            <p>These are some of my skills which I had learnt so far and had applied here. </p>
                            <Carousel responsive={responsive} infinity={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={html} alt='Img'/>
                                    <h5>HTML</h5>
                                </div>
                                <div className='item'>
                                    <img src={css} alt='Img'/>
                                    <h5>CSS</h5>
                                </div>
                                <div className='item'>
                                    <img src={js} alt='Img'/>
                                    <h5>Javascript</h5>
                                </div>
                                <div className='item'>
                                    <img src={react} alt='Img'/>
                                    <h5>React</h5>
                                </div>
                                <div className='item'>
                                    <img src={npm} alt='Img'/>
                                    <h5>NPM</h5>
                                </div>
                                <div className='item'>
                                    <img src={nodejs} alt='Img'/>
                                    <h5>NodeJs</h5>
                                </div>
                                <div className='item'>
                                    <img src={c} alt='Img'/>
                                    <h5>C</h5>
                                </div>
                                <div className='item'>
                                    <img src={cpp} alt='Img'/>
                                    <h5>C++</h5>
                                </div>
                                <div className='item'>
                                    <img src={python} alt='Img'/>
                                    <h5>Python</h5>
                                </div>
                            </Carousel>
                        </div>
                        </Col>
                    </Row>
                </Container>

            </section>

        </div>
    );
}
export default Skills;