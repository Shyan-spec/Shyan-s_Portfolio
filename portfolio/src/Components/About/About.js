import React ,{Component} from 'react';
import ShyanPhoto from './ShyanWalker.jpeg'
import './About.scss';
import Resume from './Shyan Walker Resume ( JAN 2024 ) Official.pdf';

class About extends Component {
    render() {
    return (
                

                    
                    <div className= 'square'>

                    <h1 className="about-me">ABOUT ME</h1>
                    

                    
                    <div className="mars">
                    <img alt="Profile Image" className="img-fluid"  src={ShyanPhoto}/>

                    <div className="info-res wrap">
                    
                    <span className="paragraph">
                    Hello! My name is Shyan Walker, and I am deeply passionate about the world of software development. With a strong penchant for problem-solving, I am dedicated to making a meaningful impact through technology. My journey has been characterized by a relentless pursuit of knowledge and a diverse portfolio of projects that have both challenged my thinking and sharpened my skills across the full-stack development spectrum, including JavaScript, React, Node.js, and many more. I flourish in collaborative environments, placing high value on both sharing ideas and being an avid listener. Driven by a desire to innovate and improve lives, I am eager to develop my own solutions while making significant contributions to projects that matter.
                    
                    </span>
                    

                    <a rel="noreferrer" target="_blank"  href={Resume}>
                    <button className='border-box resume-button'>View Resume</button>
                    </a>
                    
                    </div>
                    </div>
                    </div>

                
                    



                    
                    
                    
               
                

    );
}
}


export default About;