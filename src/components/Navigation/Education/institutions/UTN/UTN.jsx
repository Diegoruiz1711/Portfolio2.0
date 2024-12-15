import styles from './UTN.module.css';
import ArgFlag from '../../../../../assets/images/argentina.png';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { WebContext } from '../../../../../WebContext/WebContext';

const UTN = () => {
    const { t } = useTranslation();
    const { isLightTheme } = useContext(WebContext);

    return (
        <div className={`${styles.container} ${!isLightTheme ? styles.dark : styles.light}`}>
            <div className={styles.location}><span>La Plata, Argentina </span><img src={ArgFlag} alt="Logo Argentina" className={styles.flag} /> </div>
            <div className={styles.institution}>
                <h2 className={styles.title}>Universidad Tecnológica Nacional - Facultad Regional La Plata</h2>
                <ul>
                    <li className={styles.list}>{t('engineer')}</li>
                    <li className={styles.list}>{t('technician')}</li>
                </ul>
            </div>

        </div>
    )
}

export default UTN;