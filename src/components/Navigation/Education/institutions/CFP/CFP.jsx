import styles from './CFP.module.css'
import ArgFlag from '../../../../../assets/images/argentina.png'
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { WebContext } from '../../../../../WebContext/WebContext';

const CFP = () => {
    const { t } = useTranslation();
    const { isLightTheme } = useContext(WebContext);

    return (
        <div className={`${styles.container} ${!isLightTheme ? styles.dark : styles.light}`}>
            <div className={styles.location}><span>La Plata, Argentina </span><img src={ArgFlag} alt="Logo Argentina" className={styles.flag} /> </div>
            <div className={styles.institution}>
                <h2 className={styles.title}>Centro de Formación Profesional 401</h2>
                <ul>
                    <li className={styles.list}>{t('cfpWeb')}</li>
                    <li className={styles.list}>{t('cfpGD')}</li>
                </ul>
            </div>
        </div>
    )
}

export default CFP;