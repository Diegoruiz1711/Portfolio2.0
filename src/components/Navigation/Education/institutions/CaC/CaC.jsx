import styles from './CaC.module.css';
import ArgFlag from '../../../../../assets/images/argentina.png'
import { useTranslation } from 'react-i18next'
import { useContext } from 'react';
import { WebContext } from '../../../../../WebContext/WebContext';

const CaC = () => {
    const { t } = useTranslation();
    const { isLightTheme } = useContext(WebContext);

    return (
        <div className={`${styles.container} ${!isLightTheme ? styles.dark : styles.light}`}>
            <div className={styles.location}><span>Buenos Aires, Argentina </span><img src={ArgFlag} alt="Logo Argentina" className={styles.flag} /> </div>
            <div className={styles.institution}>
                <h2 className={styles.title}>Agencia de Habilidades para el Futuro</h2>
                <ul>
                    <li className={styles.list}>{t('cacUxUi')}</li>
                    <li className={styles.list}>{t('cacJava')}</li>
                </ul>
            </div>
        </div>
    )
}

export default CaC;