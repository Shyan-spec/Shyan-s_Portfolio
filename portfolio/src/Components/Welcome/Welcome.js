import React from 'react';
import './Welcome.scss';
import 'animate.css';
import Friend from '../Friend/Friend';


class Welcome extends React.Component {
    render() {
    return (
        <>
        

        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        
        
                
            <div className="header animate__animated animate__fadeInLeft space" id="introduction">
                
                <h1 className='header-title'>
                Hello, my name is <span className="text-color-main">Shyan Walker</span>
                <br />
                The Software Engineering Professional
                </h1>
                
                
                <a rel="noreferrer" style={{text_decoration:'none'}} href="#about">
                <button style={{text_decoration:'none'}} className="button" > Get to Know Me!</button>
                </a>
                
            </div>
        
       
        
        </>
    
        
    );
}
}

export default Welcome;
