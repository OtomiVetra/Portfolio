const Sidebar = () => {
  return (
    <div className="menu">
      <img className="avatar mb-4" src="/img/Avatar.png" />
      <div className="mb-4">
        <h2 className="title title-name">Алексей Шелаев</h2>
        <p className="description">frontend developer</p>
      </div>
      <ul className="links">
        <li><a href="#about">Обо мне</a></li>
        <li><a href="#skills">Навыки</a></li>
        <li><a href="#projects">Проекты</a></li>
        <li><a href="#contacts">Контакты</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
