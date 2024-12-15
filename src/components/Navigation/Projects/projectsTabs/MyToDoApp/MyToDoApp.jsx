import styles from './MyToDoApp.module.css';
import { Link } from 'react-router-dom';
import MyToDoAppVideo from '../../../../../assets/videos/myToDoAppVideo.mp4';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { WebContext } from '../../../../../WebContext/WebContext';

const MyToDoApp = () => {
    const { t } = useTranslation();
    const { isLightTheme } = useContext(WebContext);
    return (
        <div className={`${styles.container} ${!isLightTheme ? styles.dark : styles.light}`}>
            <div className={styles.textSection}>
                <h2 className={styles.title}>My ToDo App</h2>
                <p className={styles.text}>{t('todoDescription1')}</p>
                <p className={styles.text}>{t('todoDescription2')}</p>
                <Link to='https://github.com/Diegoruiz1711/ToDoAppFrontend' target='_blank' className={styles.link}>
                    <p className={styles.text}>{t('feRepository')}</p>
                </Link>
                <Link to='https://github.com/Diegoruiz1711/ToDoAppBackend' target='_blank' className={styles.link}>
                    <p className={styles.text}>{t('beRepository')}</p>
                </Link>
            </div>

            <div className={styles.section}>
                <video src={MyToDoAppVideo} controls className={styles.todoAppVideo}></video>
            </div>
        </div>
    )
}

export default MyToDoApp;