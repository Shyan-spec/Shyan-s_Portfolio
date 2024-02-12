import React, { Component } from "react";
import "./Projects.scss";
import CalcPic from "./CalcPic.png";
import DailyVoice from "./DailyVoice.png";
import QuoteGen from "./QuoteGen.png";
import Nasa_Project from "./NASA_Project.png";

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
                <span>2021</span>
              </div>
              <br /> Your Online Calculator
            </h1>
            <div className="desAndbuttonWrap">
              <span className="description">
                A basic online calculator made from scratch! Here to handle all
                of your mathematic problems.
                <br /> Displays understanding of Javascript, HTML and CSS
                languages.
              </span>
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
            </div>
          </div>

          <div className="box1 mar">
            <img alt="Calculator" className="Calc-img" src={CalcPic} />
          </div>

          {/* Project 2 */}

          <div className="textbox mar">
            <h1 className="title">
              <div className="titleContainer">
                <span>Project 2:</span>
                <span>2021</span>
              </div>
              <br /> The Daily Voice
            </h1>
            <div className="desAndbuttonWrap">
              <span className="description">
                A Public Forum Simulator. <br /> Login and Post whatever is on
                your mind for everyone to read!
                <br /> A fullStack application that utilizes JavaScript, HTML
                and CSS Languages for the Frontend, and MySQL for the database.{" "}
              </span>
              <button className="button-link"> Publishing...</button>
            </div>
          </div>

          <div className="box1 mar">
            <img alt="Login DailyVoice" className="DV-img" src={DailyVoice} />
          </div>

          {/* Project 3 */}

          <div className="textbox mar">
            <h1 className="title">
              <div className="titleContainer">
                <span>Project 3:</span>
                <span>2022</span>
              </div>
              <br /> Random Quote Generator
            </h1>
            <div className="desAndbuttonWrap">
              <span className="description">
                A Random Quote Generator. <br /> Receive a meaningful quote and
                share it on your LinkedIn profile!
                <br /> Utilizes JavaScript, HTML and CSS Languages for the
                Frontend, as well as an API that fetches the generated quotes.{" "}
              </span>

              <a
                href="https://shyan-spec.github.io/quoteGenerator/"
                className="button-link"
              >
                See Live!
              </a>
            </div>
          </div>

          <div className="box1 mar">
            <img alt="Login DailyVoice" className="DV-img" src={QuoteGen} />
          </div>

          {/* Project 4 */}

          <div className="textbox mar">
            <h1 className="title">
              <div className="titleContainer">
                <span>Project 4:</span>
                <span>2022</span>
              </div>
              <br /> NASA Project
            </h1>
            <div className="desAndbuttonWrap">
              <span className="description">
                Schedule a mission launch to the one Kepler Exoplanets! <br />{" "}
                This fullStack aplication uses a RESTful API fetching data from
                the Kepler Project by NASA
                <br />
                This application utilizes JavaScript, HTML, CSS, React Framework
                for the frontend and Node.js for the backend, as well as a NoSQL
                database run on MongoDB <br />
                (This unofficial application is not affiliated with the NASA
                comapny){" "}
              </span>
              <button className="button-link">Publishing...</button>
            </div>
          </div>

          <div className="box1 mar">
            <img alt="Login DailyVoice" className="DV-img" src={Nasa_Project} />
          </div>

          {/* Project 5 */}

          <div className="textbox mar">
            <h1 className="title">Project 5</h1>
            <div className="desAndbuttonWrap">
              <span className="description">Project Under Construction.</span>
              <button className="button-link">Coming Soon...</button>
            </div>
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
