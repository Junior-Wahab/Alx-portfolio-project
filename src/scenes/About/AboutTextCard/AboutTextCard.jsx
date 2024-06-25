import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Wahab Musah Jnr </span>
        from <span className={s.purple}> Accra, Ghana.</span>
        <br />
        As a versatile UI/UX designer and skilled React.js developer,
        I blend creativity with technical expertise to craft engaging
        digital experiences. With a passion for user-centered design,
        I specialize in creating intuitive interfaces that enhance
        usability and delight users. <br />
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Games
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Reading
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
