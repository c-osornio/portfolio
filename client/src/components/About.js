import { useContext } from "react";
import NavContext from "../context/navContext";

const About = () => {
  const { nav } = useContext(NavContext);

  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('CarlosOsornio.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'CarlosOsornio.pdf';
            alink.click();
        })
    })
}

  return (
    <section id="about" className={`${nav === "about" ? "active" : ""}`}>
      {/* Main Heading Starts */}
      <div className="container page-title text-center">
        <h2 className="text-center">
          about <span>me</span>
        </h2>
        <span className="title-head-subtitle">If you can&apos;t figure something out, figure out how to figure it out</span>
      </div>
      {/* Main Heading Ends */}
      <div className="container infos">
        <div className="row personal-info">
          {/* Personal Infos Starts */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-container">
              <img
                className="img-fluid d-block"
                src="img/profile.png"
                alt=""
              />
            </div>
            <p className="d-block d-md-none">
            {`I'm`} a web developer based in Anaheim,
            California. I strive to build immersive and beautiful web applications
            through carefully crafted code and user-centric design. 
            </p>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-12">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-1">
                <li>
                  <h6>
                    <span className="font-weight-600">First Name</span>
                    Carlos
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Last Name</span>
                    Osornio
                  </h6>
                </li>
                {/* <li>
                  <h6>
                    <span className="font-weight-600">Birthdate</span>21 june
                    1990
                  </h6>
                </li> */}
                {/* <li>
                  <h6>
                    <span className="font-weight-600">Nationality</span>
                    English
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Experience</span>7 years
                  </h6>
                </li> */}
                <li>
                  <h6>
                    <span className="font-weight-600">Location</span>
                    California
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Freelance</span>
                    Available
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Languages</span>
                    English
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-2">
                <li>
                  <h6>
                    <span className="font-weight-600">Phone</span>+1 909 979 7464
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Email</span>
                    c.alejandro.oso@gmail.com
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">LinkedIn</span>
                    <a href="https://www.linkedin.com/in/carlos-osornio/" target="_blank" rel="noreferrer">carlos-osornio</a>
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">GitHub</span>
                    <a href="https://github.com/c-osornio" target="_blank" rel="noreferrer">c-osornio</a>
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-12 resume-btn-container">
              <button onClick={onButtonClick} className="btn btn-resume" target="_blank">
                <span>
                  <i className="fa fa-download" />
                  download my cv
                </span>
              </button>
            </div>
          </div>
          {/* Personal Infos Ends */}
        </div>
      </div>
      {/* Download CV Starts */}
      <div className="container col-12 mx-auto text-center">
        <hr className="about-section" />
      </div>
      {/* Download CV Ends */}
      {/* Resume Starts */}
      <div className="resume-container">
        <div className="container">
          <div className="row">
            {/* Experience Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h2 className="font-weight-600 uppercase title-section">
                experience
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2019 - 2022
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        mortgage underwriter
                        <span className="separator" />
                        <span className="font-weight-700">Better.com</span>
                      </span>
                    </div>
                    <div className="card-body ">
                      <p>
                      - Underwrote Fannie Mae and Freddie Mac conforming mortgages and issued VPALS. 
                      </p>
                      <p>
                      - Graduated Valedictorian through Better Mortgage&apos;s Underwriting University Class of 2020. 
                      </p>
                      <p>
                      - Conducted thorough reviews of applicants credit reports, calculated all sources of income, and reviewed assets for qualification. 
                      </p>
                      <p>
                      - Analyzed risk and made recommendations to help facilitate/streamline loan process. 
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2015 - 2019
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        sr. loan consultant
                        <span className="separator" />
                        <span className="font-weight-700">Ally Financial </span>
                      </span>
                    </div>
                    <div className="card-body">
                    <p>
                      - Assisted in development and implementation of new lending policies and procedures.
                      </p>
                      <p>
                      -  Collaborated with cross-functional teams, to drive business growth and increase loan volume.
                      </p>
                      <p>
                      - Provided auto loan consulting to reach clients&apos; financial needs.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                {/* <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2014 - 2015
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Sales and Marketing Specialist
                        <span className="separator" />
                        <span className="font-weight-700">G Solutions Enterprise</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        diam nonummy.
                      </p>
                    </div>
                  </div>
                </div> */}
                {/* Item Ends */}
                {/* Item Starts */}
                {/* <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2012 - 2014
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Customer Service Manager
                        <span className="separator" />
                        <span className="font-weight-700">IRVINEWEBWORKS, INC.</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        diam nonummy.
                      </p>
                    </div>
                  </div>
                </div> */}
                {/* Item Ends */}
                {/* Item Starts */}
                {/* <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2012 - 2013
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Seasonal Cashier
                        <span className="separator" />
                        <span className="font-weight-700">Tillys</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        diam nonummy.
                      </p>
                    </div>
                  </div>
                </div> */}
                {/* Item Ends */}
                {/* Item Starts */}
                {/* <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2011 - 2012
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Customer Service Team Lead
                        <span className="separator" />
                        <span className="font-weight-700">Alta Resources</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        diam nonummy.
                      </p>
                    </div>
                  </div>
                </div> */}
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item" style={{marginBottom: -10}}>
                  {/* <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2010 - 2011
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Admissions / Guest Control
                        <span className="separator" />
                        <span className="font-weight-700">Disneyland Resort</span>
                      </span>
                    </div>
                    <div className="card-body" >
                      <p >
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        diam nonummy.
                      </p>
                    </div>
                  </div> */}
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6 skills-container">
              <h2 className="font-weight-600 uppercase title-section">
                Education
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2022 - 2023
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Software Development Certificate 
                        <span className="separator" />
                        <span className="font-weight-700">
                          Coding Dojo (Colorado Technical University)
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        <strong>Grade: </strong>Triple Black Belt in Python, Java, and MERN
                      </p>
                      <p>
                      <strong>Languages/ Stacks: </strong>Python, Java, JavaScript (MERN), CSS, HTML, SQL
                      </p>
                      <p>
                      <strong>Frameworks/Libraries:</strong> Flask, Django, React, Redux, Next.js, EmailJS, Node.js, Mongoose, Express, Socket.io, Spring MVC, Bootstrap, Materialize, Tailwind, SASS/LESS
                      </p>
                      <p>
                      <strong>Databases: </strong>MySQL, MongoDB 
                      </p>
                      <p>
                      <strong>Cloud: </strong>AWS EC2, Gunicorn, Nginx, Vercel 
                      </p> 
                      <p>
                      <strong>Web Technologies:</strong>  RESTful APIs, RestController, AJAX, Context API, Axios
                      </p>  
                      <p>
                      <strong>Tools: </strong>Git, Github, Agile Methodology, Terminal, GitBash, Powershell, VS Code, SpringBoot, Postman, JSON, Bcrypt, Jinja, JSX, MySQL Workbench, MongoDB Compass/Atlas, OOP, Figma, Balsamiq
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        Class of 2022
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        AA, Business Administration
                        <span className="separator" />
                        <span className="font-weight-700">
                          Fullerton College
                        </span>
                      </span>
                    </div>
                    <div className="card-body" >
                      <p>
                        Fullerton, CA
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Education Ends */}
          </div>
          {/* Skills Starts */}
          <div className="row">
            {/* Skill Bar Starts */}
            <div className="col-12">
              <h2 className="font-weight-600 uppercase title-section skills-title">
                skills
              </h2>
            </div>
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">html</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={85}
                  style={{ width: "85%" }}
                />
                <span className="percent" style={{ right: "calc(15% - 21px)" }}>
                  85%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">javascript</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "80%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">css</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "80%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">python</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "80%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">java</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "80%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">react</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={85}
                  style={{ width: "85%" }}
                />
                <span className="percent" style={{ right: "calc(15% - 21px)" }}>
                  85%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">mySQL</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={75}
                  style={{ width: "75%" }}
                />
                <span className="percent" style={{ right: "calc(25% - 21px)" }}>
                  75%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">MongoDB</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={75}
                  style={{ width: "75%" }}
                />
                <span className="percent" style={{ right: "calc(25% - 21px)" }}>
                  75%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Git</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "80%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
          </div>
          {/* Skills Starts */}
        </div>
        {/* Resume Ends */}
      </div>
    </section>
  );
};
export default About;
