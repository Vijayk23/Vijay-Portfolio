import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

export function Projects() {
  const projects = [
    {
      pic: "./images/Todo-list.png",
      name: "TODO-LIST",
      url: "https://vijayk23.github.io/Todolist/",
      description:
        "Efficiently manage tasks with our intuitive todo-list app. Stay organized and boost productivity on the go!",
    },
    {
      pic: "./images/calculator.png",
      name: "CALCULATOR",
      url: "https://vijayk23.github.io/Calculator/",
      description:
        "Streamline your calculations with our user-friendly calculator app. Accurate solutions for equations on the fly.",
    },
    {
      pic: "./images/personal portfolio.png",
      name: "PERSONAL PORTFOLIO",
      url: "https://vijay23.netlify.app/",
      description:
        "Explore my journey through innovative projects and skills in my personal portfolio app. Discover my creative world.",
    },
    {
      pic: "./images/Chess Board.png",
      name: "CHESS BOARD",
      url: "https://vijayk23.github.io/ChessBoard/",
      description:
        "Immerse yourself in strategic battles with our Chess Board app. Play, learn, and master the classic game on your device. Checkmate!",
    },
    {
      pic: "./images/STOPWATCH.png",
      name: "STOP WATCH",
      url: "https://vijaykstopwatch.netlify.app/",
      description:
        "React stopwatch: A simple timer app with start, stop, and reset functionality to track elapsed time accurately.",
    },
  ];
  return (
    <div className="projects">
      <Navbar />
      <h2 id="project-title">
        Explore a collection of{" "}
        <span id="project-title1">personally developed projects</span> showcased
        here.
      </h2>
      <div className="project-card">
        {projects.map((pro) => (
          <Project proj={pro} />
        ))}
      </div>
    </div>
  );
}

function Project({ proj }) {
  return (
    <div className="project-card1">
      <img src={proj.pic} id="project-img" />
      <h4 id="project-name">{proj.name}</h4>
      <p id="project-des">{proj.description}</p>
      <Link to={proj.url} target="_blank" id="projectbutton">
        <button id="project-button">LIVE URL</button>
      </Link>
    </div>
  );
}
