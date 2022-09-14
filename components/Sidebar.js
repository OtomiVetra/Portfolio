const Sidebar = () => {
  return (
    <div className="menu">
      <img className="avatar mb-4" src="/img/Avatar.png" />
      <div className="mb-4">
        <h2 className="title title-name">Алексей Шелаев</h2>
        <p className="description">frontend developer</p>
      </div>
      <ul className="links">
        <li><a href="#about" className="links_item">Обо мне</a></li>
        <li><a href="#skills" className="links_item">Навыки</a></li>
        <li><a href="#projects" className="links_item">Проекты</a></li>
        <li><a href="#contacts" className="links_item">Контакты</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
