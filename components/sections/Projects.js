import { Github, Link45deg } from "react-bootstrap-icons"

const projects = [
  {
    title: "mesto",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut suscipit unde accusantium iste quisquam distinctio consequuntur in voluptate, totam inventore.",
    preview: "/img/mesto-preview.jpg",
    githubLink: "https://github.com/OtomiVetra/mesto",
    siteLink: "https://mesto.junior-portfolio.ru/",
    skills: ["html", "css", "JavaScript", "BEM", "Webpack"],
    time: "Feb 2021 - Oct 2021",
    badgeClass: "bg-primary"
  },
  {
    title: "Russian-Travel",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut suscipit unde accusantium iste quisquam distinctio consequuntur in voluptate, totam inventore.",
    preview: "/img/russian-travel-preview.jpg",
    githubLink: "https://github.com/OtomiVetra/mesto",
    siteLink: "https://russian-travel.junior-portfolio.ru/",
    skills: ["html", "css", "BEM"],
    time: "Nov 2020 - Dec 2020",
    badgeClass: "bg-primary"
  },
  {
    title: "mesto",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut suscipit unde accusantium iste quisquam distinctio consequuntur in voluptate, totam inventore.",
    preview: "/img/mesto-preview.jpg",
    githubLink: "https://github.com/OtomiVetra/mesto",
    siteLink: "https://mesto.junior-portfolio.ru/",
    skills: ["html", "css", "JavaScript", "BEM", "Webpack"],
    time: "Feb 2021 - Oct 2021",
    badgeClass: "bg-primary"
  },
  {
    title: "mesto",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut suscipit unde accusantium iste quisquam distinctio consequuntur in voluptate, totam inventore.",
    preview: "/img/mesto-preview.jpg",
    githubLink: "https://github.com/OtomiVetra/mesto",
    siteLink: "https://mesto.junior-portfolio.ru/",
    skills: ["html", "css", "JavaScript", "BEM", "Webpack"],
    time: "Feb 2021 - Oct 2021",
    badgeClass: "bg-primary"
  },
  {
    title: "mesto",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut suscipit unde accusantium iste quisquam distinctio consequuntur in voluptate, totam inventore.",
    preview: "/img/mesto-preview.jpg",
    githubLink: "https://github.com/OtomiVetra/mesto",
    siteLink: "https://mesto.junior-portfolio.ru/",
    skills: ["html", "css", "JavaScript", "BEM", "Webpack"],
    time: "Feb 2021 - Oct 2021",
    badgeClass: "bg-primary"
  }

]


const Projects = () => {
  return (
    <div>
      <h3 className="title">Мои проекты</h3>
      <div className="skills row">
        {projects.map((project) => {
          return (<div className="col-md-12 col-lg-6" key={project.title}>
            <div className="skill card">
              <div className="card-img-wrapper"><img src={project.preview} className="card-img-top" alt="preview" /></div>

              <div className="card-body">
                <div className="card-title">
                  <h4>{project.title}</h4>
                </div>
                <div className="master-list">{project.skills.map((item) => {
                  return (<span key={item} className={"badge " + project.badgeClass}>{item}</span>)
                })}</div>
                <p className="master-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi molestias porro reiciendis mollitia nihil quas unde doloribus ab fugit eum.</p>
                <div className="links">
                  <a href={project.siteLink} target="_blank" class="btn btn-outline-primary"><Link45deg /> Перейти на сайт</a>
                  <a href={project.githubLink} target="_blank" class="btn btn-outline-primary"><Github /> Посмотреть код</a>
                </div>

              </div>
            </div>
          </div>)
        })}
      </div>
    </div>
  )
}

export default Projects;