import styles from './MenuMobile.module.css';
import { useContext } from 'react';
import { WebContext } from "../../../WebContext/WebContext"
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import Cat from '../../../assets/images/cat.png'
import Eng from '../../../assets/images/uk.png'
import Esp from '../../../assets/images/spain.png'
import ArrowBack from '../../../assets/images/arrowBack.png'
import ArrowNext from '../../../assets/images/arrowNext.png'
import AccessSwitch from '../../AccessSwitch/AccessSwitch';
import AccessButton from '../../../assets/images/accessButton.png';
import ThemeSwitch from '../../ThemeSwitch/ThemeSwitch';
import { FaMoon, FaSun } from 'react-icons/fa';

// import Marco from '../../../assets/images/marco1.png'

const MenuMobile = () => {

    const { activeModal, closeModal, handleLanguageClick, carrusel, carruselContent, toggleTheme, isLightTheme,
        handleBack, handleNext, selectedLanguage, codeValue, handleAccessCode, numbers, handleAccessGaranted } = useContext(WebContext);

    const { t } = useTranslation();

    return (
        <Modal
            isOpen={activeModal === 'menumobile'}
            onRequestClose={closeModal}
            className={styles.modalContainer}
            overlayClassName={styles.modalOverlay}
            shouldCloseOnOverlayClick={true}
        >
            {/* <div className={styles.Marco}></div> */}

            <div className={styles.modeContainer}>
                <div onClick={toggleTheme} className={styles.smallLink}>
                    {isLightTheme ? <FaMoon size={18} /> : <FaSun size={18} />}
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
            <div className={styles.header}>

                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>{t('accessMenu')}</h2>
                </div>

            </div>

            <div className={styles.modalContent}>
                <div className={styles.swipper}>
                    <div className={styles.content}>
                        <div className={styles.section}>
                            <p className={styles.navigationName}>
                                {t('menu')}
                            </p>
                        </div>
                        <div className={styles.section2}>
                            <div className={styles.visorMenu}>
                                {t(carruselContent[carrusel].text)}
                            </div>
                        </div>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.section}>
                            <p className={styles.navigationName}>
                                {t('accessCode')}
                            </p>
                        </div>
                        <div className={styles.section2}>

                            <div className={styles.visorMenu}>
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
                <div className={styles.accessControl}>
                    <div className={styles.visorControl}>
                        {codeValue}
                    </div>
                    <div className={styles.numbers}>
                        {numbers.map((element, index) => (
                            <button
                                key={index}
                                className={styles.button}
                                onClick={() => handleAccessCode(element)}
                            >
                                {element}
                            </button>
                        ))}
                    </div>
                    <div className={styles.accessButton} onClick={handleAccessGaranted}>
                        <img src={AccessButton} alt="Access Button" className={styles.accessImg} />
                    </div>
                </div>
            </div>

        </Modal >
    );
};

export default MenuMobile;