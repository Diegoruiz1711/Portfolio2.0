import styles from './StartModal.module.css';
import { useContext } from 'react';
import { WebContext } from "../../../WebContext/WebContext"
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import Cat from '../../../assets/images/cat.png'
import Eng from '../../../assets/images/uk.png'
import Esp from '../../../assets/images/spain.png'
import GetIn from '../../../assets/images/getIn.png'
import Swipper from '../../../assets/images/smSwipper.png'
import AccessControl from '../../../assets/images/smControl.png'



const StartModal = () => {

    const { activeModal, closeModal, handleLanguageClick, selectedLanguage } = useContext(WebContext);

    const { t } = useTranslation();

    return (
        <Modal
            isOpen={activeModal === 'startmodal'}
            onRequestClose={closeModal}
            className={styles.modalContainer}
            overlayClassName={styles.modalOverlay}
            shouldCloseOnOverlayClick={true}
        >
            {/* <div className={styles.Marco}></div> */}

            <div className={styles.header}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>{t('help')}</h2>
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

            <div className={styles.modalContent}>
                <div className={styles.content}>
                    <p className={styles.row}>{t('startModal1')}</p>
                    <p className={styles.row}>{t('startModal2-1')} <span style={{ color: 'yellow' }}>mobile </span> {t('startModal2-2')}
                        <img src={GetIn} alt="" className={styles.icon} /> {t('startModal2-3')}</p>
                    <div className={styles.imageDescription}>
                        <img src={Swipper} alt="" className={styles.icon} /><p>{t('startModal3')}</p>
                    </div>
                    <div className={styles.imageDescription}>
                        <img src={AccessControl} alt="" className={styles.icon} /><p>{t('startModal4')}</p>
                    </div>
                    <p className={styles.row}>{t('startModal2-1')} <span style={{ color: 'yellow' }}>web </span>{t('startModal5')}</p>

                    <p className={styles.row}>{t('startModal6')}</p>
                </div>
                <div className={styles.buttonContainer}>
                    <div className={styles.button} onClick={closeModal}>{t('close')}</div>
                </div>
            </div>
        </Modal >
    );
};

export default StartModal;