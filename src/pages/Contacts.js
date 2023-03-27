const Contacts = () => {
  return (
    <main className='section'>
      <div className='container'>
        <h1 className='projects__title'>Contacts</h1>
        <ul className='contetn-list'>
          <li className='content-list__item'>
            <h2 className='projects__title2'>Location</h2>
            <p>Georgia</p>
          </li>
          <li className='content-list__item'>
            <h2 className='projects__title2'>Telegram / WhatsApp</h2>
            <p>
              <a href='tel:79169679879'>+7(916)067-08-79</a>
            </p>
          </li>
          <li className='content-list__item'>
            <h2 className='projects__title2'>Phone</h2>
            <p>
              <a href='tel:995558216396'>+995-558-216-396</a>
            </p>
          </li>
          <li className='content-list__item'>
            <h2 className='projects__title2'>Email</h2>
            <p>
              <a href='mailto:kudenikov.92@gmail.com'>kudenikov.92@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
