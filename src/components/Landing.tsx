export default function Landing() {
  return (
    <div className="container" id="landingContainer">
      <p id="landingName">Josh Barrette</p>

      <div>
        <p className="subHeader">About</p>
        <p className="subAbout">
          I am a software developer with a focus on full-stack web application
          development. I primarily use React with either Vite or Next.js for
          frontend development. I have used JavaScript/TypeScript and Spring
          Boot for backend servers implemented in both monolithic and serverless
          architectures for APIs. AWS is my go-to when it comes to
          infrastructure hosting. My most used services on AWS are S3, Lambda,
          DynamoDB, and API Gateway.
        </p>
      </div>

      <div>
        <p className="subHeader">Education and Certifications</p>
        <p className="eduTitle">
          Bachelor of Science in Computer Science and Mathematics
        </p>
        <p className="subScript">University of Wisconsin Parkside</p>
        <p className="eduTitle">AWS Certified Developer – Associate</p>
        <p className="eduTitle">CompTIA A+</p>
      </div>

      <div>
        <p className="subHeader">Projects</p>
        <div id="projectsContainer">
          <div>
            <p className="subSubHeader">
              <a href="https://github.com/JoshBarrette/hitsounds">
                Full-Stack Game Mod Sharing Web App
              </a>
            </p>
            <p className="subScript">Next.js, MySQL, AWS S3</p>
            <p className="subAbout">
              Designed a full-stack web application for sharing and managing
              game mods. Uploaded mods are stored in AWS S3 and tracked via a
              MySQL database. Authentication set up through Discord and JWTs.
              Used Next.js for both the frontend and the REST API.
            </p>
          </div>

          <div>
            <p className="subSubHeader">
              <a href="https://chat.barrette.dev">Live Chat App</a>
            </p>
            <p className="subScript">React, NestJS, Socket.io</p>
            <p className="subAbout">
              Created a real-time web chat application using Socket.io to
              implement web sockets for communication. Server built with NestJS
              using passport for authentication with Google. Client created
              using React with TypeScript. MongoDB is used to track users and
              log messages.
            </p>
          </div>

          <div>
            <p className="subSubHeader">
              <a href="https://github.com/JoshBarrette/cminus-compiler">
                C Minus Compiler
              </a>
            </p>
            <p className="subScript">C++, Bison, Flex</p>
            <p className="subAbout">
              Implemented a compiler for the C Minus programming language that
              compiles to assembly language. Uses Flex and Bison in C++ for
              tokenizing, parsing, creating a program tree, and generating the
              assembly code.
            </p>
          </div>

          <div>
            <p className="subSubHeader">
              <a href="https://github.com/JoshBarrette/matrix-solver">
                Linear Algebra Matrix Solver
              </a>
            </p>
            <p className="subScript">C++</p>
            <p className="subAbout">
              Built a program for reducing given matrices to row echelon form.
              Can also solve matrices as a series of linear equations and find
              bases for both the null space and range. Supports calculations
              using matrices and vectors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
