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
          This is my portfolio as a <br /> FullStack developer
        </h1>
        <div className="header__text">
          <p>
            * Since some of the commercial projects I participated in are
            covered by non-disclosure agreements (NDA), my portfolio also
            includes demonstration projects created to showcase my skills and
            development approach.
          </p>
        </div>
        <a
          href="https://drive.google.com/file/d/1ZcrIzF9bbK7UdLDZZxJZwuIV742i70vD/view?usp=sharing"
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          Download CV EN
        </a>
        <a
          href="https://drive.google.com/file/d/140rwVDo4yNqDblKUKRQoSziAyIBEWZQQ/view?usp=sharing"
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
