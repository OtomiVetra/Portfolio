import Sidebar from "../components/Sidebar";

const IndexPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <div className="screen">screen1</div>
          <div className="screen">screen2</div>
          <div className="screen">screen3</div>
          <div className="screen">screen4</div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
