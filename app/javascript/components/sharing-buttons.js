const sharingButtonsOnHover = () => {
  const whatsapp  = document.querySelector('#whatsapp');
  const mail      = document.querySelector('#mail');
  const messenger = document.querySelector('#messenger');

  whatsapp.addEventListener('mouseover', (event) => {
    const whatsapp_content  = document.querySelector('.whatsapp-content-off');
    whatsapp_content.classList.toggle('whatsapp-content-off');
    whatsapp_content.classList.toggle('whatsapp-content-on')

    whatsapp.addEventListener('mouseout', (event) => {
      const whatsapp_content  = document.querySelector('.whatsapp-content-on');
      whatsapp_content.classList.toggle('whatsapp-content-off');
      whatsapp_content.classList.toggle('whatsapp-content-on')
      });
  });

  mail.addEventListener('mouseover', (event) => {
    const mail_content  = document.querySelector('.mail-content-off');
    mail_content.classList.toggle('mail-content-off');
    mail_content.classList.toggle('mail-content-on')

    mail.addEventListener('mouseout', (event) => {
      const mail_content  = document.querySelector('.mail-content-on');
      mail_content.classList.toggle('mail-content-off');
      mail_content.classList.toggle('mail-content-on')
      });
  });

  messenger.addEventListener('mouseover', (event) => {
    const messenger_content  = document.querySelector('.messenger-content-off');
    messenger_content.classList.toggle('messenger-content-off');
    messenger_content.classList.toggle('messenger-content-on')

    messenger.addEventListener('mouseout', (event) => {
      const messenger_content  = document.querySelector('.messenger-content-on');
      messenger_content.classList.toggle('messenger-content-off');
      messenger_content.classList.toggle('messenger-content-on')
      });
  });



}

export { sharingButtonsOnHover};
