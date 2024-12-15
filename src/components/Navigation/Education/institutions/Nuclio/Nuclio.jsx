import styles from './Nuclio.module.css'
import CatFlag from '../../../../../assets/images/cat.png'
import { useTranslation } from 'react-i18next'
import { useContext } from 'react';
import { WebContext } from '../../../../../WebContext/WebContext';

const Nuclio = () => {
    const { t } = useTranslation();
    const { isLightTheme } = useContext(WebContext);
    return (
        <div className={`${styles.container} ${!isLightTheme ? styles.dark : styles.light}`}>
            <div className={styles.location}><span>{t('location')}</span><img src={CatFlag} alt="Catalan Flag" className={styles.flag} /> </div>
            <div className={styles.institution}>
                <h2 className={styles.title}>Nuclio Digital School</h2>
                <ul>
                    <li className={styles.list}>{t('nuclioDegree')}</li>
                </ul>
            </div>
        </div>
    )
}

export default Nuclio;