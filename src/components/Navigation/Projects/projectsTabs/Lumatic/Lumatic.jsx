import { Link } from 'react-router-dom'
import styles from './Lumatic.module.css'
import LumaticVideo from '../../../../../assets/videos/lumaticVideo.mp4'

import LumaticMobile from '../../../../../assets/images/lumaticMobile.png'
import { useTranslation } from 'react-i18next'
import { useContext } from 'react'
import { WebContext } from '../../../../../WebContext/WebContext'


const Lumatic = () => {

    const { t } = useTranslation();
    const { isLightTheme } = useContext(WebContext);

    return (
        <div className={`${styles.container} ${!isLightTheme ? styles.dark : styles.light}`}>
            <div className={styles.textSection}>
                <h2 className={styles.title}>Lumatic Events</h2>
                <p className={styles.text}>{t('lumaticDescription1')}</p>
                <p className={styles.text}>{t('lumaticDescription2')}</p>
                <p className={styles.text}>{t('lumaticDescription3')}</p>
                <Link to='https://github.com/nds-fsd/luma' target='_blank' className={styles.link}>
                    <p className={styles.text}>{t('repository')}</p>
                </Link>
                <Link to='https://lumatic.netlify.app/' target='_blank' className={styles.link}>
                    <p className={styles.text}>{t('website')}</p></Link>
            </div>

            <div className={styles.section}>
                <video src={LumaticVideo} controls className={styles.lumaticVideo}></video>
            </div>

            <div className={styles.sectionMobile}>
                <img src={LumaticMobile} alt="Lumatic Mobile" className={styles.imgMobile} />
            </div>
        </div>
    )
}

export default Lumatic