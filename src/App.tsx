
import './App.css';
import ProfileHeader from './components/ProfileHeader';

function App() {
  return (
    <div className="portfolio-root">
      <ProfileHeader />
      <main>
        <section className="section about-section">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            Full Stack Developer with hands-on experience in <b>Java</b>, <b>Spring Boot</b>, REST API development, and SQL.<br/>
            Strong foundation in Data Structures and Algorithms with <b>900+ problems solved</b> across competitive platforms.<br/>
            Experienced in building scalable backend systems, following MVC architecture, writing unit and integration tests, and deploying applications using Docker.<br/>
            Proven ability to optimize data workflows and deliver clean, maintainable code in fast-paced environments.<br/>
            <br/>
            <a href="https://www.linkedin.com/in/kritika-das-3040b2246/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
            <a href="https://github.com/kritika-das" target="_blank" rel="noopener noreferrer">GitHub</a> |
            <a href="https://leetcode.com/u/kritikad322" target="_blank" rel="noopener noreferrer">LeetCode</a> |
            <a href="https://www.geeksforgeeks.org/user/kritika_das/" target="_blank" rel="noopener noreferrer">GeeksforGeeks</a> |
            <a href="https://www.codechef.com/users/kritikad322" target="_blank" rel="noopener noreferrer">CodeChef</a>
          </p>
        </section>
        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <ul className="projects-list">
            <li className="project-item">
              <strong>Electronic Store Management System</strong><br />
              <span>Spring Boot backend system managing product listings and customer orders. <a href="https://github.com/kritika-das/Electronic_store" target="_blank" rel="noopener noreferrer">View Repository</a></span>
            </li>
            <li className="project-item">
              <strong>DesiQNA Website</strong><br />
              <span>QA platform enabling users to post and answer questions. <a href="https://github.com/kritika-das/DesiQNA_Website" target="_blank" rel="noopener noreferrer">View Repository</a></span>
            </li>
            <li className="project-item">
              <strong>Inventory Management System</strong><br />
              <span>Created a web-based inventory system that tracks products, quantities, and sales using PHP and MySQL, improving inventory visibility and reducing manual tracking errors. <a href="https://github.com/kritika-das/sql" target="_blank" rel="noopener noreferrer">View Repository</a></span>
            </li>
          </ul>
        </section>
        <section id="skills" className="section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-list">
            <div className="skill-category">Java</div>
            <div className="skill-category">Spring Boot</div>
            <div className="skill-category">Docker</div>
            <div className="skill-category">HTML &amp; CSS</div>
            <div className="skill-category">Typescript</div>
            <div className="skill-category">Bootstrap</div>

          </div>
        </section>
        <section id="hireme" className="section">
          <h2 className="section-title">Hire Me</h2>
          <div className="hireme-block">
            <a href={`mailto:kritikad322@gmail.com`} className="hireme-btn">Hire Me</a>
            <a href="/resume.pdf" className="hireme-btn" download>Download Resume</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
