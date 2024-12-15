import styles from './Resume.module.css';
import { useContext } from 'react';
import { WebContext } from '../../../WebContext/WebContext';
import { useTranslation } from 'react-i18next';
import CVSpanish from '../../../assets/images/cv.png'
import CVEnglish from '../../../assets/images/resume.png'
import CVEnglishPDF from '../../../assets/Resume.pdf'
import CVSpanishPDF from '../../../assets/CV.pdf'

const Resume = () => {
    const { educationZIndex, selectedLanguage, isLightTheme } = useContext(WebContext);
    const { t } = useTranslation();

    const selectedCV = selectedLanguage === 'UK' ? CVEnglish : CVSpanish;
    const selectedPDF = selectedLanguage === 'UK' ? CVEnglishPDF : CVSpanishPDF;

    return (
        <div className={`${styles.container} ${!isLightTheme ? styles.dark : styles.light}`} style={{ zIndex: educationZIndex }}>
            <div className={styles.titlesSection}>
                <h2 className={styles.title}>{t('cv')}</h2>
            </div>
            <div className={styles.cvContainer}>
                <img src={selectedCV} alt={`CV en ${selectedLanguage === 'UK' ? 'inglés' : 'español'}`} className={styles.cvImg} />
            </div>
            <div className={styles.footer}>
                    <a href={selectedPDF} download={`Curriculum_Vitae_${selectedLanguage}.pdf`} className={styles.button}>
                        {t('downloadCV')}
                    </a>
                </div>

        </div>
    );
};

export default Resume;
