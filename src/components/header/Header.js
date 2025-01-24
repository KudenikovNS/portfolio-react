import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Nikita</em>
          </strong>
          <br />
          This is my portfolio as a <br /> frontend developer
        </h1>
        <div className="header__text">
          <p>
            * Because the real commercial projects I have participated in are
            under NDA (non-disclosure agreement), in my portfolio I showcase
            projects that have been created to demonstrate my skills.
          </p>
        </div>
        <a
          href="https://drive.google.com/file/d/1m7K2BJYh3kFvtOTiHjoTJOBxekB3kBQK/view?usp=sharing"
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          Download CV EN
        </a>
        <a
          href="https://drive.google.com/file/d/11kE0BfP4jCYlrgRdGnzWXRo0UVeZUqdr/view?usp=sharing"
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          Download CV RU
        </a>
        <a
          href="https://github.com/KudenikovNS?tab=repositories"
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </header>
  );
};

export default Header;
