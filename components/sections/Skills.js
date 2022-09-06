import { ArrowDown, ArrowLeft, ArrowRight } from "react-bootstrap-icons";

const skills = [
  {
    title: "Базовые навыки",
    icon: <ArrowDown />,
    items: ["html", "css", "JavaScript"],
    badgeClass: "bg-primary"
  },
  {
    title: "Инструменты",
    icon: <ArrowRight />,
    items: ["Git", "VSCode", "SCSS", "BEM", "Webpack"],
    badgeClass: "bg-success"
  },
  {
    title: "Библиотеки и фреймворки",
    icon: <ArrowLeft />,
    items: ["React", "Next", "Express", "Bootstrap"],
    badgeClass: "bg-danger"

  },
  {
    title: "Бекенд",
    icon: <ArrowLeft />,
    items: ["Node.js", "Mongo", "REST API"],
    badgeClass: "bg-warning"

  }

]

const Skills = () => {
  return (
    <div>
      <p className="subtitle">Что я использую в работе</p>
      <h3 className="title">Мои Навыки</h3>
      <div className="skills row">
        {skills.map((skill) => {
          return (<div className="col-md-12 col-lg-6" key={skill.title}>
            <div className="skill card">
              <div className="card-header">
                <span className="icon">{skill.icon}</span>
                <h4 className="skill-title">{skill.title}</h4>
              </div>
              <div className="master-list">{skill.items.map((item) => {
                return (<span key={item} className={"badge " + skill.badgeClass}>{item}</span>)
              })}</div>
              <p className="master-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi molestias porro reiciendis mollitia nihil quas unde doloribus ab fugit eum.</p>
            </div>
          </div>)
        })}
      </div>
    </div>
  )
}

export default Skills;