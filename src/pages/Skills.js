const Skills = () => {
  return (
    <>
      <main className='section'>
        <div className='container'>
          <h1 className='projects__title'>Skills</h1>
          <ul className='contetn-list'>
            <li className='content-list__item'>
              <h2 className='projects__title2'>Frontend</h2>
              <p>
                JavaScript, ReactJS, Gatsby.js, HTML, CSS, OOP, BEM Nested,
                WebPack, GitHub, Figma, Cross-browser layout, Adaptive layout,
                Selenium
              </p>
            </li>
            <li className='content-list__item'>
              <h2 className='projects__title2'>Backend</h2>
              <p>NodeJS, MSSQL, MongoDB, C#, PowerShell, Postman</p>
            </li>
            <li className='content-list__item'>
              <h2 className='projects__title2'>Additional skills</h2>
              <p>
                Technical writer, Support, Decision making, Analytics,
                Communication, Attention to detail
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Skills;
