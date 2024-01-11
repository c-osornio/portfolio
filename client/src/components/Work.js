import { Fragment, useContext, useState } from "react";
import NavContext from "../context/navContext";
import {
  ImgSideBar,
  SliderSideBar,
  VideoSideBar,
  YoutubeSideBar,
} from "./WorkSideBar";

const workData = [
  {
    img: "img/projects/sabai.JPG",
    name: "Sabai Haus",
    format: "video",
    project: "Short Term Rentals Homepage",
    client: "Sabai Haus",
    // duration: "1 MONTH",
    technologies: "JavaScript, React, Next.Js, SASS" ,
    // budget: "1550 USD",
    link: "http://sabaihaus.com",
    mp4: "img/projects/sabai.mp4"
  },
  {
    img: "img/projects/just4kicksIMG.jpg",
    name: "Just4Kicks",
    format: "video",
    project: "E-COMMERCE WEBSITE",
    client: "Lead Developer Team Project",
    // duration: "1 MONTH",
    technologies: "JavaScript, React, MongoDB, Mongoose, Express, Node.js, Redux, PayPal API, 3rd Party RapidAPI, Tailwind, Bcrypt, Axios, Git, GitHub, AWS EC2" ,
    // budget: "1550 USD",
    github: "https://github.com/Coding-Dojo-Group-3/jocs",
    // link: "http://just4kicks.cosornio.com",
    mp4: "img/projects/just4kicks.mp4"
  },
  {
    img: "img/projects/kringleIMG.jpg",
    name: "Kringle",
    format: "video",
    project: "SECRET SANTA WEBSITE",
    client: "Solo Project",
    // duration: "3 MONTHS",
    technologies: "JavaScript, React, MongoDB, Mongoose, Express, Node.js, UseContext, UseReducer, React Bootstrap, Bcrypt, Axios, Git, GitHub, AWS EC2" ,
    // budget: "1550 USD",
    github: "https://github.com/c-osornio/SecretSanta-MERN",
    // link: "http://kringle.cosornio.com",
    mp4: "img/projects/kringle.mp4"
  },
  {
    img: "img/projects/petloverIMG.JPG",
    name: "PetLover",
    format: "video",
    project: "pet adoption website",
    client: "Solo Project",
    // duration: "3 MONTHS",
    technologies: "Javascript, Socket.io, React, MongoDB, Mongoose, Express, Node.js, Reusable components",
    // budget: "1550 USD",
    github: "https://github.com/c-osornio/MERN-Deployment",
    mp4: "img/projects/petlover.mp4"
  },
  {
    img: "img/projects/househunterIMG.JPG",
    name: "House Hunter",
    format: "video",
    project: "HOUSE HUNTING WEBSITE",
    client: "Solo Project",
    // duration: "3 MONTHS",
    technologies: "Java, SpringBoot, Spring MVC, Eclipse, Many-to-Many, OOP, Rest Controller, Bootstrap, CSS3, HTML5, MySQL, RegExp, BCrypt",
    // budget: "1550 USD",
    github: "https://github.com/c-osornio/java_stack/tree/main/Spring/SpringProjects/BeltExam",
    mp4: "img/projects/househunter.mp4"
  },
  {
    img: "img/projects/magazineIMG.JPG",
    name: "Magazine and Subscribe",
    format: "video",
    project: "Magazine Subscription Website",
    client: "Solo Project",
    // duration: "3 MONTHS",
    technologies: "Python, Flask, MySQL, Bootstrap, CSS3, HTML5, RegExp, BCrypt",
    // budget: "1550 USD",
    github: "https://github.com/c-osornio/deploy_flask",
    mp4: "img/projects/magazine.mp4"
  },
  // {
  //   img: "img/projects/easybay.jpg",
  //   name: "EasyBay",
  //   format: "img",
  //   project: "Landing Page Design",
  //   client: "Solo Project",
  //   // duration: "3 MONTHS",
  //   technologies: "HTML5, CSS3, Javascript",
  //   // budget: "1550 USD",
  //   github: "https://github.com/c-osornio/WebFund-YellowBelt-Exam"
  // },
  // {
  //   img: "img/projects/todoIMG.JPG",
  //   name: "Todo List",
  //   format: "video",
  //   project: "TODO List Web Application",
  //   client: "Solo Project",
  //   // duration: "3 MONTHS",
  //   technologies: "Javascript, React, React Bootstrap, Local Storage, JSON",
  //   // budget: "1550 USD",
  //   github: "https://github.com/c-osornio/MERN_stack/tree/main/React/TodoList/client",
  //   mp4: "img/projects/todo.mp4"
  // },
  // {
  //   img: "img/projects/project-8.jpg",
  //   name: "Image Format",
  //   format: "img",
  //   project: "WEBSITE",
  //   client: "ENVATO",
  //   duration: "3 MONTHS",
  //   technologies: ["HTML", "JAVASCRIPT"],
  //   budget: "1550 USD",
  // },
  // {
  //   img: "img/projects/project-9.jpg",
  //   name: "Image Format",
  //   format: "img",
  //   project: "WEBSITE",
  //   client: "ENVATO",
  //   duration: "3 MONTHS",
  //   technologies: ["HTML", "JAVASCRIPT"],
  //   budget: "1550 USD",
  // },
];

const Work = () => {
  const { nav } = useContext(NavContext);
  const [active, setActive] = useState(null);
  return (
    <Fragment>
      <section id="work" className={`${nav === "work" ? "active" : ""}`}>
        <div
          className={`portfolio-container ${
            active ? "slide-out overflow-hidden" : ""
          }`}
        >
          {/* Main Heading Starts */}
          <div className="container page-title text-center">
            <h2 className="text-center">
              my <span>portfolio</span>
            </h2>
            <span className="title-head-subtitle">
              a few recent design and coding projects. Want to see more? Email
              me.
            </span>
          </div>
          {/* Main Heading Ends */}
          <div className="portfolio-section">
            <div className="container cd-container">
              <div>
                {/* Portfolio Items Starts */}
                <ul className="row" id="portfolio-items">
                  {workData.map((work, i) => (
                    <li className="col-12 col-md-6 col-lg-4" key={i}>
                      <a
                        href="#"
                        data-type="project-1"
                        onClick={() => setActive(i + 1)}
                      >
                        <img
                          src={work.img}
                          alt={work.name}
                          className="img-fluid"
                          style={{height:250, width:500}}
                        />
                        <div>
                          <span>{work.name}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
                {/* Portfolio Items Ends */}
              </div>
            </div>
          </div>
          {/* PORTFOLIO OVERLAY STARTS */}
          <div className="portfolio-overlay" onClick={() => setActive(null)} />
          {/* PORTFOLIO OVERLAY ENDS */}
        </div>
        {workData.map((work, i) => (
          <div
            key={i}
            className={`project-info-container project-1 ${
              active === i + 1 ? "slide-in" : ""
            }`}
          >
            {/* Main Content Starts */}
            <div className="project-info-main-content">
              {work.format == "img" ? (
                <ImgSideBar img={work.img} />
              ) : work.format == "youtube" ? (
                <YoutubeSideBar playing={active} />
              ) : work.format == "slider" ? (
                <SliderSideBar />
              ) : (
                <VideoSideBar playing={active} mp4={work.mp4} img={work.img}/>
              )}
            </div>
            {/* Main Content Ends */}
            {/* Project Details Starts */}
            <div className="projects-info row-2">
              <div className="col-12 col-sm-6 p-none">
                <h3 className="font-weight-600 uppercase">{work.name}</h3>
                <ul className="project-details">
                  <li>
                    <i className="fa fa-file-text-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Project{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.project}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-user-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Client{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.client}
                    </span>
                  </li>
                  {/* <li>
                    <i className="fa fa-hourglass-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Duration{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.duration}
                    </span>
                  </li> */}
                  <li>
                    <i className="fa fa-code" />{" "}
                    <span className="font-weight-400 project-label">
                      {" "}
                      Technologies
                    </span>{" "}
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.technologies}
                    </span>
                  </li>
                  {/* <li>
                    <i className="fa fa-money" />{" "}
                    <span className="font-weight-400 project-label">
                      {" "}
                      Budget
                    </span>{" "}
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.budget}
                    </span>
                  </li> */}
                </ul>
                {
                  work.link ? 
                  <a href={work.link} className="btn" target="_blank" rel="noreferrer">
                  <span>
                    <i className="fa fa-external-link" />
                    preview
                  </span>
                  </a>
                  :
                  <a href={work.github} className="btn" target="_blank" rel="noreferrer">
                  <span>
                    <i className="fa fa-external-link" />
                    View code
                  </span>
                  </a>
                }
                
              </div>
              <div className="p-none text-left mt-5">
                <a
                  href="#"
                  className="btn btn-secondary close-project"
                  onClick={() => setActive(null)}
                >
                  <span>
                    <i className="fa fa-close" />
                    Close
                  </span>
                </a>
              </div>
            </div>
            {/* Project Details Ends */}
          </div>
        ))}
      </section>
      {active && (
        <span
          className={`back-mobile ${active ? "is-visible" : ""}`}
          onClick={() => setActive(null)}
        >
          <i className="fa fa-arrow-left" />
        </span>
      )}
    </Fragment>
  );
};
export default Work;
