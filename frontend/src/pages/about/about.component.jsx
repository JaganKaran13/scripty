import React from 'react';
import './about.styles.scss';

const About = () => (
    <div className='aboutpage'>
        <div className="about-image"></div>
        <div className="about-information">
            <div className="title">Helping you setup you development environment with just a few click, Let us worry about the setup while you do the hard part!</div>
            <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique facilis aspernatur sint, earum modi ut quam reprehenderit esse, numquam excepturi deleniti in error minima alias accusantium sapiente voluptates magnam recusandae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe molestias, cupiditate labore temporibus ipsa corrupti eius repudiandae qui incidunt natus quasi voluptatum rem iusto facilis cum tempore esse aut aliquam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque similique inventore veniam cum, est earum. Ut voluptate nam, officia consequatur a deleniti labore cum assumenda aliquam ex laboriosam, non commodi.
            </div>
            <div className="steps">
                <div className="step-one">
                    <div className="step-number">1.</div>
                    <div className="step-info">Select all the application you need !</div>
                </div>
                <hr/>
                <div className="step-two">
                    <div className="step-number">2.</div>
                    <div className="step-info">Download the script file and run it !</div>
                </div>
                
            </div>
        </div>
    </div>
)

export default About;