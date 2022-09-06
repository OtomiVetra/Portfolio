import About from "../components/sections/About";
import Contacts from "../components/sections/Contacts";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Sidebar from "../components/Sidebar";

const IndexPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-lg-3">
          <Sidebar />
        </div>
        <div className="col-md-8 col-lg-9">
          <div className="screen" id="about"><About /></div>
          <div className="screen" id="skills"><Skills /></div>
          <div className="screen" id="projects"><Projects /></div>
          <div className="screen" id="contacts"><Contacts /></div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
