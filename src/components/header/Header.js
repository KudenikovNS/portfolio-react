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
          href="https://drive.google.com/file/d/1-s5AxZ5gOz7pTLF_OSDfru8qqdVA8zQX/view?usp=sharing"
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          Download CV EN
        </a>
        <a
          href="https://drive.google.com/file/d/1H9YHspj6FuceC23PuGEoDs1pFFi44PCf/view?usp=sharing"
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
        <a
          href="https://www.linkedin.com/in/kudenikovns/"
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </div>
    </header>
  );
};

export default Header;
