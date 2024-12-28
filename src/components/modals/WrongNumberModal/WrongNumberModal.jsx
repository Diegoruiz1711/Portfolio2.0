import styles from './WrongNumberModal.module.css';
import { useContext } from 'react';
import { WebContext } from "../../../WebContext/WebContext"
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import Caution from '../../../assets/images/caution.png';



const WrongNumberModal = () => {

    const { activeModal, closeModal,handleWrongNumberAccess } = useContext(WebContext);

    const { t } = useTranslation();

    return (
        <Modal
            isOpen={activeModal === 'alertWrongNumber'}
            onRequestClose={closeModal}
            className={styles.modalContainer}
            overlayClassName={styles.modalOverlay}
            shouldCloseOnOverlayClick={true}
        >
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>{t('error')}</h2>
            </div>

            <div className={styles.alert}>
                <img src={Caution} alt="" className={styles.caution} />

                <p className={styles.row}>{t('errorText')}</p>

            </div>

            <div className={styles.buttonContainer}>
                <div className={styles.button} onClick={handleWrongNumberAccess}>{t('close')}</div>
            </div>
        </Modal >
    );
};

export default WrongNumberModal;