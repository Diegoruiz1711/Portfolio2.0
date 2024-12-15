import ChokoladeVideo from '../../../../../assets/videos/chokoladeVideo.mp4'
import styles from './Chokolade.module.css'
import ChokoladeMobile from '../../../../../assets/images/chokoladeMobile.png'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { WebContext } from '../../../../../WebContext/WebContext'



const Chokolade = () => {

    const { t } = useTranslation();
    const { isLightTheme } = useContext(WebContext);
    return (
        <div className={`${styles.container} ${!isLightTheme ? styles.dark : styles.light}`}>
            <div className={styles.textSection}>
                <h2 className={styles.title}>Chokolade La Plata</h2>
                <p className={styles.text}>{t('chokoladeDescription1')}</p>
                <p className={styles.text}>{t('chokoladeDescription2')}</p>
                <Link to='https://github.com/Diegoruiz1711/chokoladeLaPlata' target='_blank' className={styles.link}>
                    <p className={styles.text}>
                        {t('repository')}
                    </p>
                </Link>
            </div>
            <div className={styles.section}>
                <video src={ChokoladeVideo} controls className={styles.chokoladeVideo}></video>
            </div>
            <div className={styles.sectionMobile}>
                <img src={ChokoladeMobile} alt="Chokolade Mobile" className={styles.imgMobile} />
            </div>
        </div>
    )
}

export default Chokolade