import styles from './AboutMe.module.css';
import FotoCV from '../../../assets/images/fotoCV.png';
import GHLight from '../../../assets/images/ghLight.png';
import GHDark from '../../../assets/images/ghDark.png';
import linkedInIcon from '../../../assets/images/inLight.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { WebContext } from '../../../WebContext/WebContext';
import { useTranslation } from 'react-i18next';

const AboutMe = () => {

    const { openModal, educationZIndex, isLightTheme, closeModal } = useContext(WebContext)
    const { t } = useTranslation();
    const ghIcon = isLightTheme ? GHLight : GHDark;

    return (
        <div className={`${styles.container} ${!isLightTheme ? styles.dark : styles.light}`} style={{ zIndex: educationZIndex }}>
            <div className={styles.imageSection}>
                <img src={FotoCV} alt="Imagen Home" className={styles.image} />
            </div>
            <div className={styles.introSection}>
                <div className={styles.titlesSection}>
                    <h2 className={styles.title}>Diego Ruiz Martín</h2>
                    <h3 className={styles.subtitle}>{t('subtitle-home')}</h3>
                </div>
                <div className={styles.textSection}>
                    <p className={styles.text}>{t('welcome')}</p>
                    <p className={styles.text}>{t('hi')}</p>
                </div>
            </div>
            <div className={styles.aboutContact}>
                <div className={styles.linkSection}>
                    <Link to='https://github.com/Diegoruiz1711' style={{ zIndex: educationZIndex }} target='_blank'><img src={ghIcon} alt="Ícono de Github" className={styles.social} />
                    </Link>
                    <Link to='https://www.linkedin.com/in/diegoruiz1711/' style={{ zIndex: educationZIndex }} target='_blank'><img src={linkedInIcon} alt="Ícono de LinkedIn" className={styles.social1} />
                    </Link>
                </div>
                <div className={styles.linkSection}>
                    <div className={styles.button} style={{ zIndex: educationZIndex }} onClick={() => openModal('aboutme')}>{t('aboutMe')}</div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;