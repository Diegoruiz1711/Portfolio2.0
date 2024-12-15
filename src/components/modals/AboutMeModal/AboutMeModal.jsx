import styles from './AboutMeModal.module.css';
import { useContext } from 'react';
import { WebContext } from "../../../WebContext/WebContext"
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';

const AboutMeModal = () => {

    const { activeModal, setActiveModal, openModal, closeModal, isLightTheme } = useContext(WebContext);

    const { t } = useTranslation();

    return (
        <Modal
            isOpen={activeModal === 'aboutme'}
            onRequestClose={closeModal}
            className={styles.modalContainer}
            overlayClassName={styles.modalOverlay}
            shouldCloseOnOverlayClick={true}
        >
            <div className={styles.container}>
                <div className={`${styles.innerModalCcontainer} ${!isLightTheme ? styles.dark : styles.light}`}>
                    <div className={styles.header}>
                        <div className={styles.modalTitle}><h2 className={styles.title}>{t('aboutMe')}</h2></div>
                    </div>
                    <div className={styles.modalContent}>
                        <p>{t('aboutMeText-1')}</p>
                        <p>{t('aboutMeText-2')}</p>
                        <p>{t('aboutMeText-3')}</p>
                        <p>{t('aboutMeText-4')}</p>
                        <p>{t('aboutMeText-5')}</p>
                    </div>
                </div>
            </div>

        </Modal >
    );
};

export default AboutMeModal;