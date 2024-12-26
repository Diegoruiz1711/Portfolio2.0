import styles from './LeftMenu.module.css'
import ArrowBack from '../../assets/images/arrowBack.png'
import ArrowNext from '../../assets/images/arrowNext.png'
import Cat from '../../assets/images/cat.png'
import Eng from '../../assets/images/uk.png'
import Esp from '../../assets/images/spain.png'
import { useContext } from 'react'
import { WebContext } from '../../WebContext/WebContext'
import { useTranslation } from 'react-i18next';
import ThemeSwitch from '../../components/ThemeSwitch/ThemeSwitch'

const LeftMenu = () => {
    const { t } = useTranslation();
    const { carrusel, carruselContent,
        handleBack, handleNext, selectedLanguage, handleLanguageClick } = useContext(WebContext)

    return (
        <div className={styles.container}>
            <div className={styles.swipper}>
                <div className={styles.content1}>
                    <div className={styles.section1}>
                        <p className={styles.navigationName}>
                            {t('menu')}
                        </p>
                    </div>
                    <div className={styles.section}>
                        <div className={styles.visor}>
                            {t(carruselContent[carrusel].text)}
                        </div>
                    </div>
                </div>

                <div className={styles.content2}>
                    <div className={styles.section}>
                        <p className={styles.navigationName}>
                            {t('accessCode')}
                        </p>
                    </div>
                    <div className={styles.section1}>

                        <div className={styles.visor}>
                            {t(carruselContent[carrusel].code)}
                        </div>
                    </div>

                </div>
                <div className={styles.arrowsContainer}>
                    <button className={styles.arrow} onClick={handleBack}>
                        <img src={ArrowBack} alt="Arrow Back" className={styles.arrowImg} />
                    </button>
                    <button className={styles.arrow} onClick={handleNext}>
                        <img src={ArrowNext} alt="Arrow Next" className={styles.arrowImg} />
                    </button>
                </div>
            </div>
            <div className={styles.modeContainer}>

                <ThemeSwitch />
            </div>
            <div className={styles.langContainer}>
                <div
                    className={styles.lang}
                    style={{ transform: selectedLanguage === 'Esp' ? 'scale(0.8)' : 'scale(1)' }}
                    onClick={() => {
                        handleLanguageClick('Esp');
                    }}
                >
                    <img src={Esp} alt="Bandera Española" className={styles.flag} />
                </div>

                <div
                    className={styles.lang}
                    style={{ transform: selectedLanguage === 'UK' ? 'scale(0.8)' : 'scale(1)' }}
                    onClick={() => {
                        handleLanguageClick('UK');
                    }}
                >
                    <img src={Eng} alt="Bandera inglesa" className={styles.flag} />
                </div>

                <div
                    className={styles.lang}
                    style={{ transform: selectedLanguage === 'Cat' ? 'scale(0.8)' : 'scale(1)' }}
                    onClick={() => {
                        handleLanguageClick('Cat');
                    }}
                >
                    <img src={Cat} alt="Bandera catalana" className={styles.flag} />
                </div>
            </div>
        </div>
    )
}

export default LeftMenu