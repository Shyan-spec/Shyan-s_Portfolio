import React ,{Component} from 'react';
import ShyanPhoto from './ShyanWalker.jpeg'
import './About.scss';
import Resume from '/Users/shyanw/Documents/Shyan-Portfolio/portfolio/src/Components/About/S.Walker Resume 2022.pdf';

class About extends Component {
    render() {
    return (
                

                    
                    <div className= 'square'>

                    <h1 className="about-me">ABOUT ME</h1>
                    

                    
                    <div className="mars">
                    <img alt="Profile Image" className="img-fluid"  src={ShyanPhoto}/>

                    <div className="info-res wrap">
                    
                    <span className="paragraph">
                    Greetings,
                    I begin my coding journey in 2016 as a CS student pursing my degree in Computer Science. 
                    Since obtaining my degree, I currently reside in New York City continuously expanding my knowledge and personal development in software engineering.
                    Some of my specialties include but not limited to Full Stack development and cloud-based platforms. 
                    I’m skilled in Web development tools such as HTML5, CSS3, and JavaScript utilizing Angular and React.js frameworks. 
                    As well as, experience in cross-functional agile methodologies and project management practices. 
                    
                   
                    
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