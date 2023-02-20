const Contacts = () => {
  return (
    <main className='section'>
      <div className='container'>
        <h1 className='projects__title'>Contacts</h1>
        <ul className='contetn-list'>
          <li className='content-list__item'>
            <h2 className='projects__title2'>Location</h2>
            <p>Cyprus</p>
          </li>
          <li className='content-list__item'>
            <h2 className='projects__title2'>Telegram / WhatsApp</h2>
            <p>
              <a href='tel:79160670879'>+7 (916) 067-08-79</a>
            </p>
          </li>
          <li className='content-list__item'>
            <h2 className='projects__title2'>Email</h2>
            <p>
              <a href='melito:kudenikov.92@gmail.com'>kudenikov.92@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
