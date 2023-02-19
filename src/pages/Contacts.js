const Contacts = () => {
  return (
    <main className='section'>
      <div className='container'>
        <h1 className='projects__title'>Contacts</h1>
        <ul className='contetn-list'>
          <li className='content-list__item'>
            <h2 className='projects__title2'>Location</h2>
            <p>Moscow, Russia</p>
          </li>
          <li className='content-list__item'>
            <h2 className='projects__title2'>Telegram / WhatsApp</h2>
            <p>
              <a href='tel:79051234567'>+7 (905) 123-45-67</a>
            </p>
          </li>
          <li className='content-list__item'>
            <h2 className='projects__title2'>Email</h2>
            <p>
              <a href='melito:webdev@protonmail.com'>webdev@protonmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
