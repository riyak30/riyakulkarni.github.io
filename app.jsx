const projects = [
  {
    title: "Project One",
    description:
      "Short description of a key project. Summarize the impact and tech stack.",
    link: "#",
  },
  {
    title: "Project Two",
    description:
      "Another highlight worth sharing. Mention what you built and results.",
    link: "#",
  },
];

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "SQL",
  "Python",
  "Figma",
  "Git/GitHub",
];

const App = () => (
  <div className="page">
    <nav className="nav">
      <div className="logo">RK</div>
      <div className="links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a
          href="https://drive.google.com/file/d/1X3x6cw8MgxMZH9YGBV_tgk47cRVl2dKi/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
        <a className="cta" href="#contact">Contact</a>
      </div>
    </nav>

    <main>
      <section id="about" className="card about">
        <div className="avatar-wrapper">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320' viewBox='0 0 320 320'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' x2='100%25' y1='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%232d7eff'/%3E%3Cstop offset='100%25' stop-color='%23090b12'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='%23060b16' width='320' height='320' rx='28'/%3E%3Ccircle fill='url(%23g)' cx='160' cy='120' r='72'/%3E%3Crect fill='%230b1629' x='64' y='176' width='192' height='112' rx='44'/%3E%3C/svg%3E"
            alt="Profile placeholder"
          />
        </div>
        <div className="copy">
          <p className="eyebrow">About Me</p>
          <h1>Hi, I’m Riya — builder & problem-solver.</h1>
          <p className="lead">
            Replace this text with a concise, 3-5 sentence story about who you
            are, what you care about, and the kind of work you want to do. Keep
            it focused and outcomes-oriented.
          </p>
          <div className="pill-row">
            <span className="pill">Open to roles</span>
            <span className="pill pill--subtle">Remote or hybrid</span>
          </div>
        </div>
      </section>

      <section id="projects" className="card">
        <div className="section-header">
          <p className="eyebrow">Projects</p>
          <h2>Selected work</h2>
        </div>
        <div className="grid">
          {projects.map((project) => (
            <article key={project.title} className="tile">
              <div className="tile-header">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
              <div className="tile-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="tile-footer">
                <a href={project.link}>View details →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="card">
        <div className="section-header">
          <p className="eyebrow">Skills</p>
          <h2>Tools & stacks</h2>
        </div>
        <div className="pill-grid">
          {skills.map((skill) => (
            <span className="pill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="card contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let’s talk.</h2>
          <p className="lead">
            Add your preferred contact details below. A short sentence on the
            type of work you’re looking for makes it easier for people to
            reach out with relevant opportunities.
          </p>
          <div className="contact-actions">
            <a className="primary" href="mailto:you@example.com">
              Email me
            </a>
            <a
              className="ghost"
              href="https://drive.google.com/file/d/1X3x6cw8MgxMZH9YGBV_tgk47cRVl2dKi/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <a className="ghost" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
