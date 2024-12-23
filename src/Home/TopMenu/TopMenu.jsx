import styles from './TopMenu.module.css'
import Logo from '../../assets/images/programmingImg.png'
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { WebContext } from '../../WebContext/WebContext';
import Help from '../../assets/images/help.png'
import GetIn from '../../assets/images/getIn.png'
import AccessSwitch from '../../components/AccessSwitch/AccessSwitch';

const TopMenu = () => {

    const { t } = useTranslation();
    const { openModal } = useContext(WebContext);

    return (
        <div className={styles.container}>
            <div className={styles.accessLights}>
                <AccessSwitch />
            </div>
            <div className={styles.banner}>
                <div className={styles.titleContainer}>
                    <img src={Logo} alt="Logo Portfolio" className={styles.imgLogo} />
                    <div className={styles.title}>
                        {t('logo')}
                    </div>
                </div>
            </div>

            <div className={styles.accessMobile}>
                <div className={styles.accessButtons}>
                    <div className={styles.mobileAccessButton} onClick={() => openModal('menumobile')}>
                        <img src={GetIn} alt="Icono de ingreso" className={styles.topButtons} />
                    </div>
                    <div className={styles.mobileAccessButton} onClick={() => openModal('startmodal')}>
                        <img src={Help} alt="Icono de ayuda" className={styles.topButtons} />
                    </div>
                </div>
            </div>
            <div className={styles.helpButtonContainer}>
                <div className={styles.helpButton} onClick={() => openModal('startmodal')}>
                    <img src={Help} alt="Icono de ayuda" className={styles.topButtons} />
                </div>
            </div>
        </div>
    )
}

export default TopMenu