import styles from '../styles/ContactCode.module.css';

const contactItems = [

  {
    social: 'email',
    link: 'lbutschowitz@gmail.com',
    href: 'mailto:lbutschowitz@gmail.com',
  },
  {
    social: 'github',
    link: 'mishiningo',
    href: 'https://github.com/mishiningo',
  },
  {
    social: 'linkedin',
    link: 'leonardo butschowitz',
    href: 'https://www.linkedin.com/in/leonardo-butschowitz-97a831346/',
  },
  {
    social: 'twitter',
    link: 'mishiningo',
    href: 'https://www.twitter.com/mishiningo',
  },
  {
    social: 'instagram',
    link: 'mishiningo',
    href: 'https://www.instagram.com/mishiningo',
  },
  {
    social: 'codepen',
    link: 'mishiningo',
    href: 'https://codepen.io/mishiningo',
  },
  {
    social: 'codesandbox',
    link: 'mishiningo',
    href: 'https://codesandbox.io/u/mishiningo',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
