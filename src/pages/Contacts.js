const Contacts = () => {
  return (
    <main className='section'>
      <div className='container'>
        <h1 className='projects__title'>Contacts</h1>
        <ul className='contetn-list'>
          <li className='content-list__item'>
            <h2 className='projects__title2'>Location</h2>
            <p>Slovenia</p>
          </li>
          <li className='content-list__item'>
            <h2 className='projects__title2'>Telegram</h2>
            <p>
              <a href='https://t.me/nik_kudenik' target="_blank" rel="noreferrer">@nik_kudenik</a>
            </p>
          </li>
          <li className='content-list__item'>
            <h2 className='projects__title2'>Phone</h2>
            <p>
              <a href='tel:38640371795'>+38640371795</a>
            </p>
          </li>
          <li className='content-list__item'>
            <h2 className='projects__title2'>Email</h2>
            <p>
              <a href='mailto:kudenikovns@gmail.com'>kudenikovns@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
