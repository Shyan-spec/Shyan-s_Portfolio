import React, { Component } from "react";
import "./Projects.scss";
import CalcPic from "./CalcPic.png";
import DailyVoice from "./DailyVoice.png";
import QuoteGen from "./QuoteGen.png";
import Nasa_Project from "./NASA_Project.png";
import Duck_Hunt from "./Duck-Hunt-Home.png";
import Share_Rental from "./Share-Rental-Listing.png";
import Travel_Gold from "./Travel-Gold-Itin.png";
import Bump_It from "./Bump-It-Up-Home.png";

class Projects extends Component {
  render() {
    return (
      <div className="pages">
        <h1 id="project">Projects</h1>
        <div className="display">
          {/* Project 1 */}

          <div className="textbox mar">
            <h1 className="title">
              <div className="titleContainer">
                <span>Project 1:</span>
                <span>2023</span>
              </div>
              <br /> Duck Hunt Game Clone
            </h1>
            <div className="desAndbuttonWrap">
              <span className="description">
                A modern clone of the classic Duck Hunt game by Nintendo,
                designed to rekindle the joy of the original. Utilizing the
                latest in web technologies—JavaScript, HTML5, and CSS3—'Duck
                Hunt' challenges players to aim for precision and speed to hit
                moving targets and score the highest. Every duck downed adds to
                your score, pushing you to beat your best in a test of skill and
                reflexes. Perfect for gamers seeking to relive the classic
                experience.
                <div className="tech-stack">
                  <img
                    src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                    alt="Js- Badge"
                  />
                  <img
                    src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                    alt="Js- Badge"
                  />
                  <img
                    src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                    alt="Js- Badge"
                  />
                </div>
              </span>
              <div className="button-class">
                <button className="button-link">
                  <a
                    className="live"
                    href="https://shyan-walker-duck-hunt.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Live!
                  </a>
                </button>
                <button className="button-link">
                  <a
                    className="live"
                    href="https://github.com/Shyan-spec/duck-hunt-emulator-game"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="box1 mar">
            <img alt="duck-hunt" className="DV-img" src={Duck_Hunt} />
          </div>

          {/* Project 2 */}

          <div className="textbox mar">
            <h1 className="title">
              <div className="titleContainer">
                <span>Project 2:</span>
                <span>2023</span>
              </div>
              <br /> Share Rental - Web Project
            </h1>
            <div className="desAndbuttonWrap">
              <span className="description">
                Introducing 'Share,' a website where users have the unique
                opportunity to list and rent out their own products to others
                seeking temporary use of such items. Built with technologies of
                JavaScript, HTML5, CSS3, Node.js, and MongoDB, 'Share'
                facilitates a dynamic platform that's both user-friendly and
                secure. Here, users can effortlessly browse through a diverse
                range of listings, finding exactly what they need and renting it
                with ease. 'Share' isn't just about rentals; it's about creating
                a community where sharing economy thrives, enabling users to
                make the most out of their possessions while fostering a culture
                of trust and convenience.
              </span>
              <div className="tech-stack">
                <img
                  src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
                  alt="Js- Badge"
                />
              </div>
              <div className="button-class">
                <button className="button-link">Ask to See!</button>
                <button className="button-link">
                  <a
                    className="live"
                    href="https://github.com/Shyan-spec/share-rental-frontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="box1 mar">
            <img alt="duck-hunt" className="DV-img" src={Share_Rental} />
          </div>

          {/* Project 3 */}

          <div className="textbox mar">
            <h1 className="title">
              <div className="titleContainer">
                <span>Project 3:</span>
                <span>2024</span>
              </div>
              <br /> Travel Gold - FullStack Project
            </h1>
            <div className="desAndbuttonWrap">
              <span className="description">
                A dynamic platform where users can effortlessly login and craft
                personalized travel itineraries. Built on the foundation of
                JavaScript, HTML5, CSS3, Node.js, and MongoDB, this application
                is designed to streamline your travel planning process.
                Leveraging the Google API, 'Travel Gold' enables users to search
                for must-visit destinations, allowing them to curate a list of
                places they wish to explore, complete with all the necessary
                details about each location.
              </span>
              <div className="tech-stack">
                <img
                  src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white"
                  alt="Js- Badge"
                />
              </div>
              <div className="button-class">
                <button className="button-link">Ask to See!</button>
                <button className="button-link">
                  <a
                    className="live"
                    href="https://github.com/Shyan-spec/travel-gold-frontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="box1 mar">
            <img alt="travel-gold" className="DV-img" src={Travel_Gold} />
          </div>
          {/* Project 4 */}

          <div className="textbox mar">
            <h1 className="title">
              <div className="titleContainer">
                <span>Project 4:</span>
                <span>2024</span>
              </div>
              <br /> Bump It Up - FullStack Mobile Project
            </h1>
            <div className="desAndbuttonWrap">
              <span className="description">
                Dive into "Bump It Up," an exhilarating platform where users
                engage in the classic rock, paper, scissors game with a modern
                twist. This game leverages advanced web technologies like
                JavaScript, HTML5, CSS3, Node.js, and React for the frontend,
                with Django and Python powering the backend. Players can log in,
                challenge others to matches, and utilize their phone's
                accelerometer to 'bump' their choices against an opponent. The
                real-time gameplay allows for viewing match results and tracking
                one’s own history of games, adding a competitive edge to this
                timeless game.
              </span>
              <div className="tech-stack">
                <img
                  src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/Python-316192?style=for-the-badge&logo=python&logoColor=white"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white"
                  alt="Js- Badge"
                />
              </div>
              <div className="button-class">
                <button className="button-link">Ask to See!</button>
                <button className="button-link">
                  <a
                    className="live"
                    href="https://github.com/Shyan-spec/bump-it-backend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="box1 mar">
            <img alt="travel-gold" className="DV-img" src={Bump_It} />
          </div>
          {/* Project 5 */}

          <div className="textbox mar">
            <h1 className="title">
              <div className="titleContainer">
                <span>Project 5:</span>
                <span>2021</span>
              </div>
              <br /> Your Online Calculator
            </h1>
            <div className="desAndbuttonWrap">
              <span className="description">
                A web-based tool engineered to facilitate a wide array of
                calculations with efficiency and precision. This calculator
                harnesses the robustness of JavaScript along with the styling
                capabilities of HTML5 and CSS3 to deliver a responsive user
                experience. Designed to perform standard calculations. This
                project not only showcases my technical acumen in creating
                practical web applications but also my commitment to delivering
                user-friendly digital tools.
                <div className="tech-stack">
                  <img
                    src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                    alt="Js- Badge"
                  />
                  <img
                    src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                    alt="Js- Badge"
                  />
                  <img
                    src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                    alt="Js- Badge"
                  />
                </div>
              </span>
              <div className="button-class">
                <button className="button-link">
                  <a
                    className="live"
                    href="https://shyan-spec.github.io/Calculator/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Live!
                  </a>
                </button>
                <button className="button-link">
                  <a
                    className="live"
                    href="https://github.com/Shyan-spec/Calculator"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="box1 mar">
            <img alt="Calculator" className="Calc-img" src={CalcPic} />
          </div>

          {/* Project 6 */}

          <div className="textbox mar">
            <h1 className="title">
              <div className="titleContainer">
                <span>Project 6:</span>
                <span>2021</span>
              </div>
              <br /> The Daily Voice
            </h1>
            <div className="desAndbuttonWrap">
              <span className="description">
                An interactive public forum crafted for community engagement.
                This forum employs user authentication, enabling members to sign
                up and log in effortlessly to contribute their viewpoints.
                Developed with JavaScript, HTML5, and CSS3 for the front end,
                and powered by an Express Node.js server with a MySQL database.
                From sharing statuses to fostering discussions.
              </span>
              <div className="tech-stack">
                <img
                  src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white"
                  alt="Js- Badge"
                />
              </div>
              <div className="button-class">
                <button className="button-link">Ask To See!</button>
                <button className="button-link">
                  <a
                    className="live"
                    href="https://github.com/Shyan-spec/The-Daily-Voice"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="box1 mar">
            <img alt="Login DailyVoice" className="DV-img" src={DailyVoice} />
          </div>

          {/* Project 7 */}

          <div className="textbox mar">
            <h1 className="title">
              <div className="titleContainer">
                <span>Project 7:</span>
                <span>2022</span>
              </div>
              <br /> Random Quote Generator
            </h1>
            <div className="desAndbuttonWrap">
              <span className="description">
                A dynamic Random Quote Generator designed to enlighten and
                motivate users with a daily dose of wisdom. Harnessing the power
                of a third-party API, it fetches an array of thought-provoking
                quotes for users to explore. Built with a sleek integration of
                JavaScript, HTML5, and CSS3, and bolstered by Node.js for
                backend operations. Its standout feature is the ability to share
                these quotes directly to LinkedIn with a single click,
                connecting the inspiration to your professional profile and
                network.
              </span>
              <div className="tech-stack">
                <img
                  src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white"
                  alt="Js- Badge"
                />
              </div>
              <div className="button-class">
                <button className="button-link">
                  <a
                    className="live"
                    href="https://shyan-spec.github.io/quoteGenerator/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Live!
                  </a>
                </button>
                <button className="button-link">
                  <a
                    className="live"
                    href="https://github.com/Shyan-spec/quoteGenerator"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="box1 mar">
            <img alt="Login DailyVoice" className="DV-img" src={QuoteGen} />
          </div>

          {/* Project 8 */}

          <div className="textbox mar">
            <h1 className="title">
              <div className="titleContainer">
                <span>Project 8:</span>
                <span>2022</span>
              </div>
              <br /> NASA Project
            </h1>
            <div className="desAndbuttonWrap">
              <span className="description">
                A web application that taps into the wealth of data from the
                NASA Kepler Project via a third-party API. Built with modern web
                technologies like JavaScript, HTML5, CSS3, Node, React, and
                NoSQL with MongoDB for database management, this app is designed
                for both astronomy enthusiasts and aspiring space
                explorers.Users can schedule simulated launches to
                Kepler-discovered celestial bodies, all from the comfort of
                their own digital command center.
              </span>
              <div className="tech-stack">
                <img
                  src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
                  alt="Js- Badge"
                />
                <img
                  src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white"
                  alt="Js- Badge"
                />
              </div>
              <div className="button-class">
                <button className="button-link">Ask To See!</button>
                <button className="button-link">
                  <a
                    className="live"
                    href="https://github.com/Shyan-spec/nasa-project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="box1 mar">
            <img alt="Login DailyVoice" className="DV-img" src={Nasa_Project} />
          </div>


          <div className="box mar">
            <div className="all-gears">
              <div className="gear parent1">
                <div className="center"></div>
                <div className="tooth"></div>
                <div className="tooth"></div>
                <div className="tooth"></div>
                <div className="tooth"></div>
              </div>
              <div className="gear parent2">
                <div className="center"></div>
                <div className="tooth"></div>
                <div className="tooth"></div>
                <div className="tooth"></div>
                <div className="tooth"></div>
              </div>
              <div className="gear2 parent3">
                <div className="center2"></div>
                <div className="tooth2"></div>
                <div className="tooth2"></div>
                <div className="tooth2"></div>
                <div className="tooth2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
